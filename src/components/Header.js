import styled from "styled-components"
import pic from '../images/profilepic.jpeg'
const Header = () => {
    return (
      <Wrapper>    
        <div className="header">David Chapman</div>
        <div className="container">
          <img src={pic} className='pic' />
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
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
.header{
  position: absolute;
  margin: auto;
  width: 20vh;
  font-size: 3vh;
  left: 0;
  right: 0;
  bottom: 0;
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
  left: 0;
  border-radius: 5%;
  z-index: 3;
  box-shadow: 5px 5px 5px black;
  animation: move1 3s infinite;
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
  outline: .1vw solid ;
  box-shadow: 5px 5px 5px black;
  border-radius: 5%;
  animation: move2 3s infinite;
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
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
z-index: 5;
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
  margin-left: 0vh;
  font-size: 4vh;
  left: 30vh;
  top: 10vh;
  height: 5vh;
  width: 30vh;
}
}
@media only screen and (min-width: 1200px) {
}



`