import { CleanData } from "src/App";
import { MusicTile } from "../../components";
import Header from "./Header";

import { MusicLibraryWrapper, MusicTileWrapper, Wrapper } from "./styles";

interface MusicLibraryProps {
  albumsData: CleanData[];
  handleRemoveButtonClick: Function;
  handleSortByTitleClick: Function;
  handleSortByArtistClick: Function;
}

export const MusicLibrary = (props: any) => {
  const {
    albumsData,
    handleRemoveButtonClick,
    handleSortByArtistClick,
    handleSortByTitleClick,
  } = props;

  return (
    <Wrapper>
      <Header
        handleSortByArtistClick={handleSortByArtistClick}
        handleSortByTitleClick={handleSortByTitleClick}
      />
      <MusicLibraryWrapper>
        {albumsData.map((album: any, index: string) => {
          return (
            <MusicTileWrapper key={index}>
              <MusicTile
                img={album.artworkUrl}
                title={album.title}
                subtitle={album.artist}
                index={index}
                imageAlt={album.imageAlt}
                handleRemoveButtonClick={handleRemoveButtonClick}
              />
            </MusicTileWrapper>
          );
        })}
      </MusicLibraryWrapper>
    </Wrapper>
  );
};
