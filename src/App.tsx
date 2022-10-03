import { useEffect, useState } from "react";
import { callApi, getApiPath } from "./api/utils";
import { PATHS } from "./api/paths";
import { Image } from "./interfaces/types";
import { formatImages } from "./api/dataTransform";
import { ImagesPanel } from "./components/imagesPanel";
import styled from "styled-components";
const StyledWrap = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  const [images, setImages] = useState<Image[]>();

  const getListImages = async () => {
    const res = await callApi(getApiPath(PATHS.GET_IMAGES), "GET");
    if (res) setImages(formatImages(res));
  };

  useEffect(() => {
    getListImages();
  }, []);

  return (
    <StyledWrap>
      <ImagesPanel images={images} />
    </StyledWrap>
  );
}

export default App;
