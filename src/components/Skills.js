import styled from "styled-components"

const Skills = () => {
  return (
    <Wrapper>
      <div className="s">Skills</div>
      <div className="container">
      <div className="div1">
      <div className="react">REACT </div>
          <div className="react">/</div>
        <div className="react">JAVASCRIPT </div>
          <div className="react">/</div>
        <div className="react">HTML </div>
          <div className="react">/</div>
        <div className="react">CSS </div>
          <div className="react">/</div>
        <div className="react">NODE.JS </div>
          <div className="react">/</div>
        <div className="react">API's </div>
          <div className="react">/</div>
        <div className="react">MONGO-DB </div>
          <div className="react">/</div>
        <div className="react">MERN </div>
          <div className="react">/</div>
    </div>
      <div className="div2">
        <div className="react">REACT </div>
          <div className="react">/</div>
        <div className="react">JAVASCRIPT </div>
          <div className="react">/</div>
        <div className="react">HTML </div>
          <div className="react">/</div>
        <div className="react">CSS </div>
          <div className="react">/</div>
        <div className="react">NODE.JS </div>
          <div className="react">/</div>
        <div className="react">API's </div>
          <div className="react">/</div>
        <div className="react">MONGO-DB </div>
          <div className="react">/</div>
        <div className="react">MERN </div>
          <div className="react">/</div>
      </div>
      <div className="list">
          <ul className="ul">
            <li className="li">HTML</li>
            <li className="li">Javascript/ES6</li>
            <li className="li">CSS</li>
            <li className="li">React</li>
            <li className="li">API's</li>
            <li className="li">Node.js</li>
            <li className="li">Mongo-DB</li>
            <li className="li">MERN</li>
            <li className="li">GitHub</li>
            <li className="li">Netlify</li>
            <li>Render</li>
            <li>Styled-Components</li>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Critical Thinking</li>
            <li>Adaptability</li>
          </ul>
        </div>
        <div className="outline"></div>
      </div>
      
    </Wrapper>
  )
}
export default Skills
const Wrapper = styled.div`
top: 6.5vh;
position: relative;

.s{
  text-align: center;
  border: 0.1vw solid;
  width: 10vh;
  margin: auto;
  margin-bottom: 3vh;
  border-radius: 5px;
}

.list{
position: absolute;
width: 36vh;
height: 28vh;
border: 0.1vw solid;
font-size: 2vh;
left: 0;
right: 0;
top: 4.4vh;
margin: auto;
border-radius: 10px;
background: #00006a;
z-index: 2;
display:none ;
}
.outline{
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 4vh;
  width: 36vh;
  height: 28vh;
  border: .1vw solid;
  border-radius: 10px;
  opacity: 0;
  transition: .5s;
  box-shadow: 5px 5px 5px;
}
.ul{
  columns: 2;
}
.s:hover + .container{
  .list{
  display: block;
  }
  .outline{
    opacity: 1;
    left: 3vh;
    top: 6vh;
  }
}
.div1{
  position: absolute;
  animation: my-move1 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  width: 100%;
  display: none;
  top: 2.3vh;
}
.s:hover + .container{
  .div1{
    display: flex;
  }
}
.react{
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
  display: none;
  width: 100%;
  top: 2.3vh;
}
.s:hover + .container{
  .div2{
    display: flex;
  }
}
.react{
  margin: auto;
  font-size: 1.7vh;
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