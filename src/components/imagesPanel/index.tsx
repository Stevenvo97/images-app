import { StyledContainer, StyledImage, StyledWrapGrid, StyledWrapImage } from "./index.styled";
import { Image } from "../../interfaces/types";

type Props = {
  images?: Image[];
};

const ImagesPanel = ({ images }: Props) => {
  return (
    <StyledContainer>
    <StyledWrapGrid>
      {images && images?.length
        ? images.map((image, idx) => (
          <StyledWrapImage key={`${image.id}idx`}>
            <StyledImage src={image.urls.full}  loading="lazy"/>
            </StyledWrapImage>
          ))
        : null}
    </StyledWrapGrid>
    </StyledContainer>
  );
};

export { ImagesPanel };
