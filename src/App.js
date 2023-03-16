import styled from "styled-components";
import {
  Info,
  Header,
  Contact,
  Projects,
  Skills
} from "./components";
function App() {
  return (
    <Wrapper>
    <div>
      <Header />
      <Info />
      <Skills/>
      <Projects />
      <Contact />
    </div>
    </Wrapper>
  );
}

export default App;

const Wrapper=styled.div`
  background: linear-gradient(#000dc5,#00010b);
  color: #04fdf9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
`