import { IFileData, IFiles, TipoFile } from '../common';

@NativeClass()
export class MediaStoreiOS {
  private fetchOptions: PHFetchOptions;

  constructor() {
    this.fetchOptions = PHFetchOptions.alloc().init();
    this.fetchOptions.sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', true));
  }

  public async getMedia(): Promise<IFiles[]> {
    const albums: IFiles[] = [];

    const collections = PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(PHAssetCollectionType.Album, PHAssetCollectionSubtype.AlbumRegular, null);

    for (let i = 0; i < collections.count; i++) {
      const collection = collections.objectAtIndex(i);

      const assets = PHAsset.fetchAssetsInAssetCollectionOptions(collection, this.fetchOptions);

      if (assets.count === 0) continue;

      const files: IFileData[] = [];

      for (let j = 0; j < assets.count; j++) {
        const asset = assets.objectAtIndex(j);

        files.push({
          id: asset.localIdentifier,
          asset,
          tipo: asset.mediaType === PHAssetMediaType.Video ? TipoFile.VIDEO : TipoFile.IMAGE,
          isSelected: false,
        });
      }

      albums.push({
        id: collection.localIdentifier,
        albunName: collection.localizedTitle || 'Album',
        data: files,
        icon: null,
        iconIos: files[0].asset, // ⬅️ primer asset, no URL
        isSelected: false,
      });
    }

    return albums;
  }
}
