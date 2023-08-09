import {
  ImgWrapper,
  Wrapper,
  TitlesWrapper,
  Title,
  SubTitle,
  RemoveButton,
} from "./styles";

import X_Icon from "../../assets/icons/x_icon.svg";

export interface MusicTileProps {
  img: string;
  title: string;
  subtitle: string;
}

export const MusicTile = (props: MusicTileProps) => {
  const { img, title, subtitle } = props;
  return (
    <Wrapper>
      <RemoveButton>
        <img src={X_Icon} />
      </RemoveButton>
      <ImgWrapper src={img} />
      <TitlesWrapper>
        <Title title={title}>{title}</Title>
        <SubTitle title={subtitle}>{subtitle}</SubTitle>
      </TitlesWrapper>
    </Wrapper>
  );
};
