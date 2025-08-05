import { IFiles, TipoFile } from '../common';

@NativeClass()
export class MediaStoreAndroid {
  public getImagenes(context: android.content.Context): Array<IFiles> {
    try {
      let collection: android.net.Uri;
      let selection: string;
      let projection: Array<string>;
      if (android.os.Build.VERSION.SDK_INT >= 29) {
        collection = android.provider.MediaStore.Images.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL);
        selection = `${android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME} >= ?`;
        projection = Array.of(android.provider.MediaStore.Images.ImageColumns._ID, android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Images.ImageColumns.DATA);
      } else {
        collection = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        selection = null;
        projection = Array.of(android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Images.ImageColumns.DATA, android.provider.MediaStore.Images.ImageColumns._ID);
      }
      const sortOrder = android.provider.MediaStore.Images.ImageColumns.DATE_TAKEN + ' DESC';

      const cursor: android.database.Cursor = context.getContentResolver().query(
        collection,
        projection,
        null,
        null,
        sortOrder
        // null
      );

      const idColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns._ID);
      const dataColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.DATA);
      let medias: Array<any> = new Array();
      let files: Array<any> = new Array();
      while (cursor.moveToNext()) {
        const id: number = cursor.getLong(idColumn);
        const data: string = cursor.getString(dataColumn);
        const contentUri: android.net.Uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);
        const albunName: string = data.split('/')[5];

        files.push({
          id: id,
          file: data,
          uri: contentUri,
          albunName: albunName,
          isSelected: false,
          tipo: TipoFile.IMAGE,
        });
        const index: number = medias.findIndex((item) => item == albunName);
        if (index == -1) {
          medias.push(albunName);
        }
      }
      let files_final: Array<IFiles> = new Array();
      for (let i: number = 0; i < medias.length; i++) {
        const dataFiles: Array<any> = files.filter((item) => item.albunName == medias[i]);
        files_final.push({
          id: `${i + 1}`,
          albunName: medias[i],
          data: dataFiles,
          icon: dataFiles[0].uri,
          isSelected: false,
        });
      }

      cursor.close();
      return files_final;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  public getVideos(context: android.content.Context): Array<IFiles> {
    try {
      let collection: android.net.Uri;
      let selection: string;
      let projection: Array<string>;
      if (android.os.Build.VERSION.SDK_INT >= 29) {
        collection = android.provider.MediaStore.Video.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL);
        selection = `${android.provider.MediaStore.Video.VideoColumns.BUCKET_DISPLAY_NAME} >= ?`;
        projection = Array.of(android.provider.MediaStore.Video.VideoColumns._ID, android.provider.MediaStore.Video.VideoColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Video.VideoColumns.DATA);
      } else {
        collection = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
        selection = null;
        projection = Array.of(android.provider.MediaStore.Video.VideoColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Video.VideoColumns.DATA, android.provider.MediaStore.Video.VideoColumns._ID);
      }
      const sortOrder = android.provider.MediaStore.Video.VideoColumns.DATE_TAKEN + ' DESC';

      const cursor: android.database.Cursor = context.getContentResolver().query(
        collection,
        projection,
        null,
        null,
        sortOrder
        // null
      );

      const idColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Video.VideoColumns._ID);
      const dataColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Video.VideoColumns.DATA);
      let medias: Array<any> = new Array();
      let files: Array<any> = new Array();
      while (cursor.moveToNext()) {
        const id: number = cursor.getLong(idColumn);
        const data: string = cursor.getString(dataColumn);
        const contentUri: android.net.Uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI, id);
        const albunName: string = data.split('/')[5];
        files.push({
          id: id,
          file: data,
          uri: contentUri,
          albunName: albunName,
          isSelected: false,
          tipo: TipoFile.VIDEO,
        });
        const index: number = medias.findIndex((item) => item == albunName);
        if (index == -1) {
          medias.push(albunName);
        }
      }
      let files_final: Array<IFiles> = new Array();
      for (let i: number = 0; i < medias.length; i++) {
        const dataFiles: Array<any> = files.filter((item) => item.albunName == medias[i]);
        files_final.push({
          id: `${i + 1}`,
          albunName: medias[i],
          data: dataFiles,
          icon: dataFiles[0].uri,
          isSelected: false,
        });
      }

      cursor.close();
      return files_final;
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}
