import styled from "styled-components"
import pic from '../images/profilepic.jpeg'
import { Link } from "react-router-dom"
const Header = () => {
    return (
      <Wrapper>    
        <div data-text='David Chapman / Front-end Developer'className="header">David Chapman / Front-end Developer</div>
        <div className="container">
          <img src={pic} className='pic' />
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <Link to='resume' className="resume">Resume</Link>
      </Wrapper>
  )
}
export default Header

const Wrapper = styled.div`
position: relative;
top: 0;
left: 0;
right: 0;
margin: auto;
width: 99%;
height: 30vh;
.resume{
  position: relative;
  text-decoration:none;
  color:#04fdf9;
  border: .4vw solid ;
  width: 15vh;
  height: 3vh;
  border-radius:5px;
  display:block;
  text-align:center;
  padding-top: 0.5vh;
  top:35.5vh;
  margin: auto;
  z-index:1;
}
.resume:hover{
  background:#04fdf9 ;
  color:#02158f;

}
.header{
  position: relative;
  font-size: 2vh;
  color: #02158f;
  left: 0;
  right: 0;
  width: 31.5vh;
  top: 29vh;
  margin: auto;
}
.header::before{
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #04fdf9;
  border-right: 2px solid;
  overflow: hidden;
  animation: animate 5s linear infinite;
  white-space: nowrap;
}
@keyframes animate {
  0%,10%,100%
  {width:0%}
  70%,90%
  {width:100%}
}
.container{
  position: relative;
  height: 20vh;
  width: 15vh;
  margin: auto;
  top: 5vh;
}
.pic{
  position: absolute;
  width: 15vh;
  height:20vh;
  left: 0;
  border-radius: 5%;
  z-index: 3;
  box-shadow: 5px 5px 5px black;
  animation: move1 3s infinite linear;
  animation-direction: alternate;
}
@keyframes move1{
from{top:0px}
to{top:-20px;
left: -20px;
}
}
.div1{
  position: absolute;
  width: 15vh;
  height: 20vh;
  left: 0;
  z-index: 2;
  box-shadow: 5px 5px 5px black;
  border-radius: 5%;
  animation: move2 3s infinite linear;
  animation-direction: alternate;
  background: white;
}
@keyframes move2{
  from{top:0px}
  to{top:-10px;
    left: -10px;
  }
}
.div2{
  position: absolute;
  border-radius: 5%;
  height: 20vh;
  width: 15vh;
  left: 0;
  border: 0.1vw solid;
  z-index: 1;
}

@media only screen and (min-width: 600px) {
}
@media only screen and (min-width: 600px) {
  .resume{
    top:25vh;
    border: .3vw solid;
  }
}
@media only screen and (max-width: 850px) and (orientation: landscape) {
  z-index: 5;
  .resume{
    top:57vh;
    left:9vh;
    border: .1vw solid;
    width: 40vh;
    height: 6vh;
  }
.container{
  position: absolute;
  height: 32vh;
  width: 22vh;
  top: 10vh;
  left: 10vh;
}
.pic{
  width: 35vh;
  height: 40vh;
  transition: 1s;
}
.div1{
  transition: 1s;
  width: 35vh;
  height: 40vh;
  left: 0;
}
.div2{
  height: 40vh;
  width: 35vh;
  left: 0;
}
.header{
  position: absolute;
  margin-left: 4vh;
  font-size: 7vh;
  left: 50vh;
  top: 15vh;
  height: 10vh;
  width: 115vh;
}
}

@media only screen and (min-width: 992px) {
z-index: 5;
.resume{
    top:70vh;
    margin-left:30vh;
    border: .2vw solid;
  }
.container{
  position: absolute;
  height: 32vh;
  width: 22vh;
  top: 5vh;
  left: 3vh;
}
.pic{
  animation:none;
  width: 25vh;
  height: 30vh;
  transition: 1s;
}
.pic:hover{
  transform:translateX(-2vh) translateY(-2vh);
}
.div1{
  animation: none;
  transition: 1s;
  width: 25vh;
  height: 30vh;
  left: 0;
}
.pic:hover + .div1{
  transform:translateX(-1vh) translateY(-1vh);
}
.div2{
  height: 30vh;
  width: 25vh;
  left: 0;
}
.header{
  position: absolute;
  margin-left: 4vh;
  font-size: 4vh;
  left: 26vh;
  top: 15vh;
  height: 5vh;
  width: 63vh;
}
}
@media only screen and (min-width: 1200px) {
}



`