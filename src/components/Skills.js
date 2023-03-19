import styled from "styled-components"

const Skills = () => {
  return (
    <Wrapper>
      <div className="s">Skills</div>
      <div className="container">
      <div className="div1">
        <div className="react">REACT</div>
        <div className="react">JAVASCRIPT</div>
        <div className="react">HTML</div>
        <div className="react">CSS</div>
        <div className="react">NODE.JS</div>
        <div className="react">API's</div>
        <div className="react">MONGO-DB</div>
        <div className="react">MERN</div>
    </div>
      <div className="div2">
        <div className="react">REACT</div>
        <div className="react">JAVASCRIPT</div>
        <div className="react">HTML</div>
        <div className="react">CSS</div>
        <div className="react">NODE.JS</div>
        <div className="react">API's</div>
        <div className="react">MONGO-DB</div>
        <div className="react">MERN</div>
    </div>
      </div>
    </Wrapper>
  )
}
export default Skills
const Wrapper = styled.div`
top: 15vh;
position: relative;
.s{
  text-align: center;
  border: 0.1vw solid;
  width: 10vh;
  margin: auto;
  margin-bottom: 2vh;
}
.container{
  display: none;
}
.s:hover + .container{
  display: block;
}
.div1{
  position: absolute;
  animation: my-move1 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  display: flex;
  width: 100%;
}
.react{
  border: 0.1vw solid;
  margin: auto;
}
.react:hover{
  transform: scale(1.2);
}
@keyframes my-move1{
  0%{left:0%};
  100%{left:100%}
}

.div2{
  position: absolute;
  left: -200vh;
  animation: my-move 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  display: flex;
  width: 100%;
}
.react{
  border: 0.1vw solid;
  margin: auto;
}
.react:hover{
  transform: scale(1.2);
}
@keyframes my-move{
  0%{left:-100%};
  100%{left:0%}
}
@media only screen and (min-width: 1000px) {
  top: 12vh;
  .container{
    display: block;
  }
}
`