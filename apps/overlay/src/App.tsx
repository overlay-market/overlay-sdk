import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import Main from "./pages/App/Main";

export const AppWrapper = styled.div`
  background-color: #202431;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: calc(
    100vw - (100vw - 100%)
  ); //the width of the scrollbar is subtracted
  position: relative;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;
