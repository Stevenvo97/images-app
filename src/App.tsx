import { ImagesPanel } from "./components/imagesPanel";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledWrap>
      <ImagesPanel />
    </StyledWrap>
  );
}

export default App;
