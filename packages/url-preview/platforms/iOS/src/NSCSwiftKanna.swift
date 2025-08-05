import Kanna

@objcMembers
@objc(NSCSwiftKanna)
public class NSCSwiftKanna: NSObject {
    @objc public func extractMetadata(from urlString: NSString, onSuccess: @escaping (NSDictionary) -> Void, onError: @escaping (NSError) -> Void) {
            
            guard let url = URL(string: urlString as String) else {
                let error = NSError(domain: "KannaScraper", code: 1001, userInfo: [NSLocalizedDescriptionKey: "URL inválida"])
                onError(error)
                return
            }
            
            let task = URLSession.shared.dataTask(with: url) { data, _, error in
                if let error = error {
                    onError(error as NSError)
                    return
                }
                
                guard let data = data,
                      let html = String(data: data, encoding: .utf8),
                      let doc = try? HTML(html: html, encoding: .utf8) else {
                    let error = NSError(domain: "KannaScraper", code: 1002, userInfo: [NSLocalizedDescriptionKey: "No se pudo parsear el HTML"])
                    onError(error)
                    return
                }
                
                var result: [String: Any] = [:]
                
                // title
                if let title = doc.title {
                    result["title"] = title
                }
                
                // description
                if let description = doc.at_xpath("//meta[@name='description']")?["content"] ??
                                      doc.at_xpath("//meta[@property='og:description']")?["content"] {
                    result["description"] = description
                }
                
                // image
                if let image = doc.at_xpath("//meta[@property='og:image']")?["content"] {
                    result["image"] = image
                }
                
                // video
                if let video = doc.at_xpath("//meta[@property='og:video']")?["content"] {
                    result["video"] = video
                }
                DispatchQueue.main.async {
                    onSuccess(result as NSDictionary)
                }
            }
            
            task.resume()
        }
}
