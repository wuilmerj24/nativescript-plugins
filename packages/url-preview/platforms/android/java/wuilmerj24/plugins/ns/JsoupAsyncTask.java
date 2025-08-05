package wuilmerj24.plugins.ns;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class JsoupAsyncTask {
    public interface ConnectionCallback {
        void onComplete(Document document);

        void onError(Exception e);
    }

    private static final ExecutorService executor = Executors.newCachedThreadPool();

    public static void fetchDocumentAsync(String url, ConnectionCallback callback) {
        executor.execute(() -> {
            try {
                Document document = Jsoup.connect(url)
                        .timeout(30 * 1000)
                        .userAgent(
                            "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36")
                        .get();
                callback.onComplete(document);
            } catch (IOException e) {
                callback.onError(e);
            }
        });
    }

    public static void shutdown() {
        executor.shutdown();
    }
}
