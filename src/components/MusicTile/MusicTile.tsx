import { useState } from "react";
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
  imageAlt: string;
  index: number;
  handleRemoveButtonClick: Function;
}

export const MusicTile = (props: MusicTileProps) => {
  const { img, title, subtitle, imageAlt, index, handleRemoveButtonClick } =
    props;

  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const handleMouseEnter = () => {
    setShowRemoveButton(true);
  };
  const handleMouseLeave = () => {
    setShowRemoveButton(false);
  };

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showRemoveButton && (
        <RemoveButton
          onClick={() => {
            handleRemoveButtonClick(index);
          }}
        >
          <img src={X_Icon} draggable="false" />
        </RemoveButton>
      )}

      <ImgWrapper src={img} alt={imageAlt} draggable="false" />
      <TitlesWrapper>
        <Title title={title}>{title}</Title>
        <SubTitle title={subtitle}>{subtitle}</SubTitle>
      </TitlesWrapper>
    </Wrapper>
  );
};
