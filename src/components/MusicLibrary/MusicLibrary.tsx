import { MusicTile } from "../../components";

import { MusicLibraryWrapper, MusicTileWrapper } from "./styles";

export const MusicLibrary = (props: any) => {
  const { albumsData } = props;
  console.log(albumsData);
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
            />
          </MusicTileWrapper>
        );
      })}
    </MusicLibraryWrapper>
  );
};
