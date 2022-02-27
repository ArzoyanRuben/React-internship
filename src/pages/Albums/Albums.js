import { getAlbums } from "../../API/albumsAPI"
import { getPhotos } from "../../API/photosAPI"
import useFetch from "../../hooks/useFetch"
import Album from "../../components/Album"
import List from "../../components/shared/List/List"
import Photos from "../../components/Photos/Photos"

export default function Albums() {
    const [albums] = useFetch(null, getAlbums)
    const [photos] = useFetch(null, getPhotos)

    return(
        <>
        {albums &&  (
          <List
            listItems={albums}
            modalItems={photos}
            ListComponent={Album}
            ModalComponent={Photos}
          />
        )}
      </>
    )
}