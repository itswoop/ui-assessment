import styled from "styled-components";
export const MusicLibraryWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  @media (min-width: 767px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
  gap: 24px;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  margin: auto;
`;
export const MusicTileWrapper = styled.div`
  display: flex;
  margin: auto;
`;
