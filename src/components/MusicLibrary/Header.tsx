import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;
  gap: 24px;
  margin-top: 25px;
`;
const FilterByArtist = styled.button`
  width: 150px;
  height: 50px;
  color: black;
  cursor: pointer;
  padding: 0px;
`;

const FilterByTitle = styled(FilterByArtist)``;
