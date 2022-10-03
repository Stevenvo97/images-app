import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";


export const StyledContainer = styled.div`
  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }

  @media (max-height: 480px) {
    li {
      height: 80vh;
    }
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul {
      flex-direction: row;
    }

    li {
      height: auto;
      width: 100%;
    }
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
`;

export const StyledWrapGrid = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;
export const StyledWrapImage = styled(motion.li)`
  height: 40vh;
  flex-grow: 1;

  :last-child {
    flex-grow: 10;
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;

  max-height: 100%;
  min-width: 100%;

  vertical-align: bottom;

  :hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    cursor: pointer;
  }
`;
