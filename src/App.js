import styled from "styled-components";
import {
  Info,
  Header,
  Contact,
  Projects,
  Skills,
  Ship,
  Resume
} from "./components";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
            <div>
            <Header />
            <Info />
            <Skills/>
            <Projects />
            <Contact />
            <Ship/>
          </div>
          } />
          <Route path="/resume" element={ <Resume/>} />
        </Routes>
      </BrowserRouter>
    
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