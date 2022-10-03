import {
  StyledPopup,
  StyledPopupBody,
  StyledPopupWrapper,
} from "./index.styled";
import closeIcon from "../../close-icon.svg";
import { Image } from "../../interfaces/types";

export type Props = {
  image?: Image;
  isOpen: boolean;
  onClose: () => void;
};

const Popup = ({ isOpen = false, onClose, image }: Props) => {
  return (
    <>
      <StyledPopup data-open={isOpen}>
        <div className="popup-content">
          <div className="close-button" onClick={onClose}>
            <img src={closeIcon} alt="logo" />
          </div>
          <StyledPopupBody>
            <img src={image?.urls.full} />
            <div className="content">
              <h1>PHOTO</h1>
              <p>Created at: {image?.createdAt}</p>
              <p>Description: {image?.altDescription || "coming soon..."}</p>
              <p>Width: {image?.width}</p>
              <p>Height: {image?.height}</p>
              <p>Likes: {image?.likes}</p>
            </div>
          </StyledPopupBody>
        </div>
      </StyledPopup>
      <StyledPopupWrapper data-open={isOpen} onClick={onClose} />
    </>
  );
};

export { Popup };
