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
        <div className="react">MONGODB </div>
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
        <div className="react">MONGODB </div>
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
            <li className="li">MongoDB</li>
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
top: 8.5vh;
position: relative;
.s{
  text-align: center;
  position: relative;
  width: 15vh;
  height: 3vh;
  margin: auto;
  margin-bottom: 3vh;
  border-radius: 5px;
  border: 0.4vw solid;
  padding-top: 0.5vh;
  z-index: 3;
}

.list{
position: absolute;
width: 36vh;
height: 28vh;
border: 0.1vw solid;
font-size: 2vh;
left: 0;
right: 0;
top: 6.3vh;
margin: auto;
border-radius: 10px;
background: #00006a;
z-index: 3;
display:none ;
}
.outline{
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 6.3vh;
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
    top: 8vh;
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
  top: 4vh;
  z-index: 0;
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
  top: 4vh;
  z-index: 0;
}
.s:hover + .container{
  .div2{
    display: flex;
  }
}
.react{
  margin: auto;
  font-size: 2.5vw;
}
.react:hover{
  transform: scale(1.2);
}
@keyframes my-move{
  0%{left:-100%};
  100%{left:0%}
}
@media only screen and (min-width: 600px) {
  height: 30vh;
  margin: auto;
  top: 10vh;
  .s{
    position: relative;
    left: -11vh;
  }
  .list{
  left: 0;
  right: 0;
  top: 8vh;
}
.outline{
  left: 0;
  right: 0;
  top: 8vh;
}
.s:hover + .container{
  .outline{
    left: 3vh;
    top: 10vh;
  }
}
  .div1{
    top: 5vh;
  }
  @keyframes my-move1{
  0%{left:15%};
  100%{left:115%}
}
  .div2{
    top: 5vh;
  }
  @keyframes my-move{
  0%{left:-85%};
  100%{left:15%}
}
}
@media only screen and (min-width: 768px) {
.list{
left: 0;
right: 0;
top: 8vh;
}
.outline{
  left: 0;
  right: 0;
  top: 8vh;
}
.s{
    border: 0.3vw solid;
  }
.s:hover + .container{
  .outline{
    left: 3vh;
    top: 10vh;
  }
}
}
@media only screen and (min-width: 992px) {
  position: relative;
  left: 0;
  top: 0;
  width: 99%;
  height: 10vh;
.s{
    position: absolute;
    left: 30vh;
    border: .2vw solid;
  }
.list{
position: absolute;
margin-left: 47vh;
width: 52vh;
height: 20vh;
font-size: 2vh;
top: 0;
}
.ul{
  columns: 3;
}
.outline{
  position: absolute;
  top: 0;
  width: 52vh;
  height: 20vh;
  margin-left: 47vh;
  opacity: 0;
}
.s:hover + .container{
  .outline{
    left: 2vh;
    top: 2vh;
  }
}
}
@media only screen and (min-width: 1200px) {
  .list{
position: absolute;
margin-left: 47vh;
width: 80vh;
height: 20vh;
font-size: 2vh;
top: 0;
display: none;
z-index: 1;
}
.ul{
  columns: 3;
}
.outline{
  position: absolute;
  top: 1vh;
  width: 80vh;
  height: 20vh;
  margin-left: 47vh;
  opacity: 0;
}
.s:hover + .container{
  .outline{
    left: 2vh;
    top: 2vh;
  }
}

}

`