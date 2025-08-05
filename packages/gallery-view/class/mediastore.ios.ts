import { ImageSource, Utils } from '@nativescript/core';
import { CLog, IFileData, IFiles, TipoFile } from '../common';

@NativeClass()
export class MediaStoreiOS {
  private fetchOptions: PHFetchOptions;

  constructor() {
    this.fetchOptions = PHFetchOptions.alloc().init();
  }

  public async getMedia(): Promise<Array<IFiles>> {
    return new Promise(async (resolve, reject) => {
      try {
        const sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', true));
        this.fetchOptions.sortDescriptors = sortDescriptors;

        const assetCollections = PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(PHAssetCollectionType.Album, PHAssetCollectionSubtype.AlbumRegular, null);

        const albums: Array<IFiles> = [];

        for (let i = 0; i < assetCollections.count; i++) {
          const collection = assetCollections.objectAtIndex(i);
          const assets = PHAsset.fetchAssetsInAssetCollectionOptions(collection, this.fetchOptions);
          const filesPromises: Promise<IFileData>[] = [];

          for (let j = 0; j < assets.count; j++) {
            const asset = assets.objectAtIndex(j);
            filesPromises.push(this.getAssetURI(asset, j));
          }

          const files = await Promise.all(filesPromises);
          albums.push({
            id: `${i + 1}`,
            albunName: collection.localizedTitle,
            data: files,
            icon: files[0]?.uri || '', // Usar la primera imagen/video como miniatura del álbum
            isSelected: false,
          });
        }

        resolve(albums);
      } catch (error) {
        reject(error);
      }
    });
  }

  private async getAssetURI(asset: PHAsset, index: number): Promise<IFileData> {
    return new Promise((resolve) => {
      if (asset.mediaType === PHAssetMediaType.Video) {
        // Obtener la URI del video
        PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(asset, null, (avAsset, audioMix, info) => {
          if (avAsset && avAsset.isKindOfClass(AVURLAsset.class())) {
            const urlAsset = avAsset as AVURLAsset;
            resolve({
              id: `${index + 1}`,
              uri: urlAsset.URL.absoluteString, // URI del video
              isSelected: false,
              tipo: TipoFile.VIDEO,
            });
          } else {
            resolve({ id: `${index + 1}`, uri: '', isSelected: false, tipo: TipoFile.VIDEO });
          }
        });
      } else {
        const requestOptions = PHContentEditingInputRequestOptions.new();
        requestOptions.canHandleAdjustmentData = (adjustmentData: PHAdjustmentData) => true;

        asset.requestContentEditingInputWithOptionsCompletionHandler(requestOptions, (input, info) => {
          if (input && input.fullSizeImageURL) {
            resolve({
              id: `${index + 1}`,
              uri: input.fullSizeImageURL.absoluteString, // URI de la imagen
              isSelected: false,
              tipo: TipoFile.IMAGE,
            });
          } else {
            resolve({ id: `${index + 1}`, uri: '', isSelected: false, tipo: TipoFile.IMAGE });
          }
        });
      }
    });
  }
}
