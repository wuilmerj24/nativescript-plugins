import { IFiles, TipoFile } from '../common';

@NativeClass()
export class MediaStoreAndroid {
  public getImagenes(context: android.content.Context): Array<IFiles> {
    const result: Array<IFiles> = [];

    try {
      const resolver = context.getContentResolver();
      const collection = android.os.Build.VERSION.SDK_INT >= 29 ? android.provider.MediaStore.Images.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL) : android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;

      const projection = [android.provider.MediaStore.Images.ImageColumns._ID, android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME];

      const sortOrder = android.provider.MediaStore.Images.ImageColumns.DATE_TAKEN + ' DESC';

      const cursor = resolver.query(collection, projection, null, null, sortOrder);

      if (!cursor) {
        return result;
      }

      const idColumn = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns._ID);
      const bucketColumn = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME);

      // Agrupación O(1)
      const albumMap = new Map<string, any[]>();

      while (cursor.moveToNext()) {
        const id = cursor.getLong(idColumn);
        const albumName = cursor.getString(bucketColumn) || 'Unknown';

        const uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);

        if (!albumMap.has(albumName)) {
          albumMap.set(albumName, []);
        }

        albumMap.get(albumName).push({
          id,
          uri,
          albunName: albumName,
          isSelected: false,
          tipo: TipoFile.IMAGE,
        });
      }

      cursor.close();

      // Convertir Map → Array final
      let index = 1;
      albumMap.forEach((files, albumName) => {
        result.push({
          id: String(index++),
          albunName: albumName,
          data: files,
          icon: files[0].uri,
          isSelected: false,
        });
      });

      return result;
    } catch (error) {
      console.error('MediaStore getImagenes error:', error);
      return result;
    }
  }

  public getVideos(context: android.content.Context): Array<IFiles> {
    const result: Array<IFiles> = [];

    try {
      const resolver = context.getContentResolver();
      const collection = android.os.Build.VERSION.SDK_INT >= 29 ? android.provider.MediaStore.Video.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL) : android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;

      const projection = [android.provider.MediaStore.Video.VideoColumns._ID, android.provider.MediaStore.Video.VideoColumns.BUCKET_DISPLAY_NAME];

      const sortOrder = android.provider.MediaStore.Video.VideoColumns.DATE_TAKEN + ' DESC';

      const cursor = resolver.query(collection, projection, null, null, sortOrder);

      if (!cursor) {
        return result;
      }

      const idColumn = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Video.VideoColumns._ID);
      const bucketColumn = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Video.VideoColumns.BUCKET_DISPLAY_NAME);

      const albumMap = new Map<string, any[]>();

      while (cursor.moveToNext()) {
        const id = cursor.getLong(idColumn);
        const albumName = cursor.getString(bucketColumn) || 'Unknown';

        const uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI, id);

        if (!albumMap.has(albumName)) {
          albumMap.set(albumName, []);
        }

        albumMap.get(albumName).push({
          id,
          uri,
          albunName: albumName,
          isSelected: false,
          tipo: TipoFile.VIDEO,
        });
      }

      cursor.close();

      let index = 1;
      albumMap.forEach((files, albumName) => {
        result.push({
          id: String(index++),
          albunName: albumName,
          data: files,
          icon: files[0].uri,
          isSelected: false,
        });
      });

      return result;
    } catch (error) {
      console.error('MediaStore getVideos error:', error);
      return result;
    }
  }
}
