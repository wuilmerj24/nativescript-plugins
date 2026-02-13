package wuilmerj24.plugins.ns

import java.net.URL
import java.util.concurrent.Executors
import org.json.JSONObject
import org.jsoup.Jsoup

class UrlPreviewFetcher {

    private val executor = Executors.newSingleThreadExecutor()

    data class Result(
            val url: String,
            val title: String?,
            val description: String?,
            val image: String?,
            val siteName: String?,
            val isVideo: Boolean,
            val videoUrl: String?
    )

    private fun Result.toJson(): JSONObject {
        val json = JSONObject()
        json.put("url", url)
        json.put("title", title)
        json.put("description", description)
        json.put("image", image)
        json.put("siteName", siteName)
        json.put("isVideo", isVideo)
        json.put("videoUrl", videoUrl)
        return json
    }

    interface Callback {
        fun onResult(result: JSONObject?, error: String?)
    }

    private val cache = HashMap<String, Result>()

    private val providers: List<PreviewProvider> =
            listOf(
                    YouTubeProvider(),
                    TwitterProvider(),
                    TikTokProvider(),
                    FacebookProvider(),
                    InstagramProvider()
            )

    fun fetch(url: String, callback: Callback) {
    executor.execute {
        cache[url]?.let {
            callback.onResult(it.toJson(), null)
            return@execute
        }

        try {
            // 1. Intentar con proveedores específicos (YouTube, TikTok, etc.)
            providers.firstOrNull { it.canHandle(url) }?.let { provider ->
                val result = provider.fetch(url)
                cache[url] = result
                callback.onResult(result.toJson(), null)
                return@execute
            }

            // 2. 🌐 PROVEEDOR GENERAL (Para cualquier página externa)
            // Usamos un User Agent de Chrome Desktop para evitar versiones móviles recortadas
            val doc =
                    Jsoup.connect(url)
                            .userAgent(
                                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
                            )
                            .timeout(
                                    8000
                            ) // Aumentamos a 8 seg porque algunas webs externas son lentas
                            .header("Accept-Language", "es-ES,es;q=0.9")
                            .followRedirects(true)
                            .ignoreHttpErrors(true)
                            .get()

            // Selectores mejorados: buscamos en OpenGraph, Twitter Cards y etiquetas estándar
            val title =
                    doc.select("meta[property=og:title]").attr("content").ifBlank {
                        doc.select("meta[name=twitter:title]").attr("content").ifBlank {
                            doc.title().ifBlank { null }
                        }
                    }

            val description =
                    doc.select("meta[property=og:description]").attr("content").ifBlank {
                        doc.select("meta[name=description]").attr("content").ifBlank { null }
                    }

            val image =
                    doc.select("meta[property=og:image]").attr("content").ifBlank {
                        doc.select("meta[name=twitter:image]").attr("content").ifBlank {
                            // Si no hay meta image, buscamos la primera imagen grande del post
                            // (opcional)
                            doc.select("link[rel=image_src]").attr("href").ifBlank { null }
                        }
                    }

            val siteName =
                    doc.select("meta[property=og:site_name]").attr("content").ifBlank {
                        try {
                            URL(url).host
                        } catch (_: Exception) {
                            null
                        }
                    }

            val videoUrl =
                    doc.select("meta[property=og:video:url]").attr("content").ifBlank {
                        doc.select("meta[property=og:video]").attr("content").ifBlank { null }
                    }

            val result =
                    Result(
                            url = url,
                            title = title,
                            description = description,
                            image = fixImageUrl(url, image), // Corregimos URLs relativas
                            siteName = siteName,
                            isVideo = !videoUrl.isNullOrBlank(),
                            videoUrl = videoUrl
                    )

            cache[url] = result
            callback.onResult(result.toJson(), null)
        } catch (e: Exception) {
            e.printStackTrace()
            val fallback = fallbackResult(url)
            cache[url] = fallback
            callback.onResult(fallback.toJson(), null)
        }
    }
}

// Función auxiliar para corregir imágenes que vienen como "/path/foto.jpg"
private fun fixImageUrl(baseUrl: String, imgUrl: String?): String? {
    if (imgUrl.isNullOrBlank()) return null
    if (imgUrl.startsWith("http")) return imgUrl
    return try {
        val base = URL(baseUrl)
        URL(base, imgUrl).toString()
    } catch (_: Exception) {
        imgUrl
    }
}


    private fun fallbackResult(url: String): Result {
        val host =
                try {
                    URL(url).host
                } catch (_: Exception) {
                    url
                }

        return Result(
                url = url,
                title = host,
                description = null,
                image = null,
                siteName = host,
                isVideo = false,
                videoUrl = null
        )
    }
}

/* =========================================================
Provider interfaces
========================================================= */

interface PreviewProvider {
    fun canHandle(url: String): Boolean
    fun fetch(url: String): UrlPreviewFetcher.Result
}

/* =========================================================
YouTube Provider (SIN NETWORK)
========================================================= */

class YouTubeProvider : PreviewProvider {

    override fun canHandle(url: String): Boolean {
        return url.contains("youtube.com") || url.contains("youtu.be")
    }

    override fun fetch(url: String): UrlPreviewFetcher.Result {
        val videoId = extractVideoId(url)

        return UrlPreviewFetcher.Result(
            url = url,
            title = "YouTube Video",
            description = null,
            image = videoId?.let { "https://img.youtube.com/vi/$it/hqdefault.jpg" },
            siteName = "YouTube",
            isVideo = true,
            videoUrl = "https://www.youtube.com/watch?v=$videoId"
        )

    }

    private fun extractVideoId(url: String): String? {
        return Regex("(?:v=|youtu\\.be/)([a-zA-Z0-9_-]{11})").find(url)?.groupValues?.get(1)
    }
}


class TwitterProvider : PreviewProvider {

    override fun canHandle(url: String): Boolean {
        return url.contains("twitter.com") || url.contains("x.com")
    }

    override fun fetch(url: String): UrlPreviewFetcher.Result {
        val doc =
                Jsoup.connect(url)
                        .userAgent(
                                "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Chrome/120.0"
                        )
                        .timeout(4000)
                        .maxBodySize(150 * 1024)
                        .followRedirects(true)
                        .ignoreHttpErrors(true)
                        .get()

        val title =
                doc.select("meta[name=twitter:title]")
                        .attr("content")
                        .ifBlank { doc.select("meta[property=og:title]").attr("content") }
                        .ifBlank { null }

        val description =
                doc.select("meta[name=twitter:description]")
                        .attr("content")
                        .ifBlank { doc.select("meta[property=og:description]").attr("content") }
                        .ifBlank { null }

        val image =
                doc.select("meta[name=twitter:image]")
                        .attr("content")
                        .ifBlank { doc.select("meta[property=og:image]").attr("content") }
                        .ifBlank { null }

        return UrlPreviewFetcher.Result(
            url = url,
            title = doc.select("meta[name=twitter:title]").attr("content").ifBlank { "Twitter" },
            description = doc.select("meta[name=twitter:description]").attr("content").ifBlank { null },
            image = image,
            siteName = "Twitter",
            isVideo = true, // Twitter es video-first hoy
            videoUrl = url
        )
    }
}

class TikTokProvider : PreviewProvider {

    override fun canHandle(url: String): Boolean {
        return url.contains("tiktok.com")
    }

    override fun fetch(url: String): UrlPreviewFetcher.Result {
        var finalUrl = url

        // PASO 1: Si es una URL corta (vm.tiktok o vt.tiktok), hay que resolverla primero
        // para obtener la URL real del video (tiktok.com/@user/video/...)
        if (url.contains("vm.tiktok.com") || url.contains("vt.tiktok.com")) {
            try {
                val response =
                        Jsoup.connect(url)
                                .userAgent(
                                        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                                )
                                .followRedirects(true)
                                .execute()

                // Obtenemos la URL final resuelta
                finalUrl = response.url().toString()

                // Limpiamos parámetros basura de la URL (?_t=..., &r=...) para que la API no falle
                if (finalUrl.contains("?")) {
                    finalUrl = finalUrl.substringBefore("?")
                }
            } catch (e: Exception) {
                // Si falla la redirección, intentamos con la original
                e.printStackTrace()
            }
        }

        // PASO 2: Llamamos a oEmbed con la URL FINAL limpia
        val oEmbedUrl = "https://www.tiktok.com/oembed?url=$finalUrl"

        try {
            val response =
                    Jsoup.connect(oEmbedUrl)
                            .ignoreContentType(true)
                            // Usamos un UA de PC para la API, suele funcionar mejor que el de móvil
                            .userAgent(
                                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                            )
                            .timeout(5000)
                            .ignoreHttpErrors(true)
                            .execute()

            if (response.statusCode() != 200) {
                // Si falla, devolvemos lo básico
                return basicResult(url)
            }

            val json = JSONObject(response.body())

            val title = json.optString("title").ifBlank { "TikTok Video" }
            val author = json.optString("author_name")
            val thumbnail = json.optString("thumbnail_url")

            return UrlPreviewFetcher.Result(
                    url = url, // Mantenemos la URL original que pidió el usuario
                    title = title,
                    description = if (author.isNotEmpty()) "Video by $author" else null,
                    image = thumbnail.ifBlank { null },
                    siteName = "TikTok",
                    isVideo = true,
                    videoUrl = finalUrl // Guardamos la URL resuelta por si se quiere reproducir
            )
        } catch (e: Exception) {
            e.printStackTrace()
            return basicResult(url)
        }
    }

    private fun basicResult(url: String): UrlPreviewFetcher.Result {
        return UrlPreviewFetcher.Result(
                url = url,
                title = "TikTok Video",
                description = null,
                image = null,
                siteName = "TikTok",
                isVideo = true,
                videoUrl = url
        )
    }
}


class FacebookProvider : PreviewProvider {

    override fun canHandle(url: String): Boolean {
        return url.contains("facebook.com") || url.contains("fb.watch")
    }

    override fun fetch(url: String): UrlPreviewFetcher.Result {
        val doc =
                Jsoup.connect(url)
                        .userAgent(
                                "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Chrome/120.0"
                        )
                        .timeout(4000)
                        .maxBodySize(150 * 1024)
                        .followRedirects(true)
                        .ignoreHttpErrors(true)
                        .get()

        val title = doc.select("meta[property=og:title]").attr("content").ifBlank { "Facebook" }

        val description =
                doc.select("meta[property=og:description]").attr("content").ifBlank { null }

        val image = doc.select("meta[property=og:image]").attr("content").ifBlank { null }

        return UrlPreviewFetcher.Result(
            url = url,
            title = doc.select("meta[property=og:title]").attr("content").ifBlank { "Facebook" },
            description = doc.select("meta[property=og:description]").attr("content").ifBlank { null },
            image = doc.select("meta[property=og:image]").attr("content").ifBlank { null },
            siteName = "Facebook",
            isVideo = true,
            videoUrl = url
        )

    }
}

// class InstagramProvider : PreviewProvider {

//     override fun canHandle(url: String): Boolean {
//         return url.contains("instagram.com")
//     }

//     override fun fetch(url: String): UrlPreviewFetcher.Result {
//         val doc =
//                 Jsoup.connect(url)
//                         .userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)")
//                         .timeout(4000)
//                         .maxBodySize(150 * 1024)
//                         .followRedirects(true)
//                         .ignoreHttpErrors(true)
//                         .get()

//         val title = doc.select("meta[property=og:title]").attr("content").ifBlank { "Instagram" }

//         val description =
//                 doc.select("meta[property=og:description]").attr("content").ifBlank { null }

//         val image = doc.select("meta[property=og:image]").attr("content").ifBlank { null }

//         return UrlPreviewFetcher.Result(
//             url = url,
//             title = doc.select("meta[property=og:title]").attr("content").ifBlank { "Instagram" },
//             description = doc.select("meta[property=og:description]").attr("content").ifBlank { null },
//             image = doc.select("meta[property=og:image]").attr("content").ifBlank { null },
//             siteName = "Instagram",
//             isVideo = true,
//             videoUrl = url
//         )

//     }
// }


class InstagramProvider : PreviewProvider {

    override fun canHandle(url: String): Boolean {
        return url.contains("instagram.com")
    }

    override fun fetch(url: String): UrlPreviewFetcher.Result {
        try {
            // EL TRUCO: Usar el User-Agent de WhatsApp.
            // Instagram confía en este bot para generar previsualizaciones en los chats.
            val doc =
                    Jsoup.connect(url)
                            .userAgent("WhatsApp/2.21.12.21 A")
                            .timeout(5000)
                            .followRedirects(true)
                            .ignoreHttpErrors(true)
                            .get()

            // Intentamos obtener los metadatos de OpenGraph
            val title =
                    doc.select("meta[property=og:title]")
                            .attr("content")
                            .ifBlank { doc.select("meta[name=twitter:title]").attr("content") }
                            .ifBlank { "Instagram Post" }

            val description =
                    doc.select("meta[property=og:description]").attr("content").ifBlank { null }

            // Imagen: Instagram suele usar og:image
            val image = doc.select("meta[property=og:image]").attr("content").ifBlank { null }

            // Verificamos si es un Reel o Video
            val isVideo =
                    url.contains("/reels/") ||
                            url.contains("/p/") ||
                            doc.select("meta[property=og:type]").attr("content").contains("video")

            return UrlPreviewFetcher.Result(
                    url = url,
                    title = title,
                    description = description,
                    image = image,
                    siteName = "Instagram",
                    isVideo = isVideo,
                    videoUrl = if (isVideo) url else null
            )
        } catch (e: Exception) {
            e.printStackTrace()
            return UrlPreviewFetcher.Result(
                    url = url,
                    title = "Instagram Post",
                    description = null,
                    image = null,
                    siteName = "Instagram",
                    isVideo = false,
                    videoUrl = null
            )
        }
    }
}
