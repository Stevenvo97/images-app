import styled from "styled-components";

export const StyledPopup = styled.div`
  position: fixed;
  left: 50%;

  padding: 0 16px 32px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 8px #d9d9d9;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  visibility: hidden;

  &[data-open="true"] {
    z-index: 200;
    top: 50%;
    opacity: 1;
    visibility: visible;
  }

  &[data-open="false"] {
    top: -50%;
  }

  .popup-content {
    position: relative;
    z-index: 111;
    height: 100%;
    padding: 16px;
  }

  .close-button {
    position: absolute;
    top: 24px;
    right: 16px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  width: 70vw;
  height: 70vh;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;
export const StyledPopupBody = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    padding-top: 32px;

    flex-direction: column;
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 40%;
    }
  }
  .content {
    width: 40%;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-start;
    gap: 6px;
    flex-direction: column;
    @media only screen and (max-width: 600px) {
      width: 100%;
      gap: 2px;
    }
  }
`;
export const StyledPopupWrapper = styled.div`
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  background: rgba(38, 38, 38, 0.3);

  &[data-open="false"] {
    display: none;
  }
`;
