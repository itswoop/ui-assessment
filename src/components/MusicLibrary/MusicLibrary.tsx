import { CleanData } from "src/App";
import { MusicTile } from "../../components";

import { MusicLibraryWrapper, MusicTileWrapper } from "./styles";

interface MusicLibraryProps {
  albumsData: CleanData[];
  handleRemoveButtonClick: Function;
}

export const MusicLibrary = (props: any) => {
  const { albumsData, handleRemoveButtonClick } = props;
 

  return (
    <MusicLibraryWrapper>
      {albumsData.map((album: any, index: string) => {
        return (
          <MusicTileWrapper>
            <MusicTile
              img={album.artworkUrl}
              title={album.title}
              subtitle={album.artist}
              key={index}
              index={index}
              imageAlt={album.imageAlt}
              handleRemoveButtonClick={handleRemoveButtonClick}
            />
          </MusicTileWrapper>
        );
      })}
    </MusicLibraryWrapper>
  );
};
