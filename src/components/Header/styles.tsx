import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  justify-content: center;
  gap: 24px;
  margin-top: 25px;
`;
export const FilterByArtist = styled.button`
  width: 150px;
  height: 50px;
  color: black;
  cursor: pointer;
  padding: 0px;
`;

export const FilterByTitle = styled(FilterByArtist)``;
