declare class NSCSwiftKanna extends NSObject {

    static alloc(): NSCSwiftKanna; // inherited from NSObject

    static new(): NSCSwiftKanna; // inherited from NSObject

    extractMetadataFromOnSuccessOnError(urlString: string, onSuccess: (p1: NSDictionary<any, any>) => void, onError: (p1: NSError) => void): void;
}