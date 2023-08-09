import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  background: #181818;
`;

export const ImgWrapper = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  object-fit: contain;
  filter: drop-shadow(0px 5px 5px #2b2b2b);
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 156px;
  height: 90px;
`;
export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: center;
  height: 40px;
  line-height: 20px;
  color: white;
  font-weight: 700;
  font-size: 15px;
`;
export const SubTitle = styled(Title)`
  font-weight: 400;
  font-size: 14px;
  color: lightgrey;
`;

export const RemoveButton = styled.div`
  display: flex;
  position: absolute;
  width: 25px;
  height: 25px;
  border: solid;
  border-radius: 50px;
  top: -15px;
  right: -10px;
  z-index: 2;
  background-color: green;
  cursor: pointer;
`;
