import { ImagesPanel } from "./components/imagesPanel";
import styled from "styled-components";
import { Popup } from "./components/popupViewImage";
import { useState } from "react";
import { Image } from "./interfaces/types";

const StyledWrap = styled.div`
  /* display: block;
  width: 100%;
  margin: 0 auto; */
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image>();
  const handleClose = () => {
    setSelectedImage({} as Image);
    setIsOpen(false);
  };

  return (
    <>
      <StyledWrap>
        <ImagesPanel onSelect={(e) =>
        {setSelectedImage(e)
          setIsOpen(true)}
        // console.log(e)
      }
          />
        {isOpen  && (
        <Popup isOpen={isOpen} onClose={handleClose} image={selectedImage} />
      )}
      {/* <Popup isOpen={isOpen} onClose={handleClose} image={selectedImage} /> */}
      </StyledWrap>
     
    </>
  );
}

export default App;
