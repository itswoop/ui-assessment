import { FilterByArtist, FilterByTitle, Wrapper } from "./styles";

interface HeaderProps {
  handleSortByTitleClick: Function;
  handleSortByArtistClick: Function;
}

const Header = (props: HeaderProps) => {
  const { handleSortByArtistClick, handleSortByTitleClick } = props;
  return (
    <Wrapper>
      <FilterByArtist
        onClick={() => {
          handleSortByArtistClick();
        }}
      >
        Filter By Artist
      </FilterByArtist>
      <FilterByTitle
        onClick={() => {
          handleSortByTitleClick();
        }}
      >
        Filter By Title
      </FilterByTitle>
    </Wrapper>
  );
};

export default Header;
