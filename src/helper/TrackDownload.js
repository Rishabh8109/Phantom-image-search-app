
import {createApi} from 'unsplash-js';

const unsplash = createApi({ accessKey: process.env.REACT_APP_CLIENT_ID });

export function TrackDownloade(id) {
    unsplash.photos.get({ photoId: id }).then(result => {
        if (result.type === 'success') {
          const photo = result.response;
          unsplash.photos.trackDownload({
            downloadLocation: photo.links.download_location,
          });
        }
    });
}