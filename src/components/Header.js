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
width: 99.9%;
text-align: center;
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


@media only screen and (min-width: 1000px) {
  margin-left: 0;
  left: 0;
  .container{
    height: 30vh;
    width: 25vh;
    margin-left: 10vw;
  }
  .pic{
    position: absolute;
    left: 0;
    height: 30vh;
    width: 25vh;
    top: 0;
    transition: .5s;
    box-shadow: none;
    animation: none;
  }
  .pic:hover{
    position: absolute;
    left: -4vh;
    top: -4vh;
    box-shadow: 5px 5px 5px black;
  }
  .div1{
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: none;
    width: 25vh;
    height: 30vh;
    border-radius:5% ;
    transition: .5s;
    display: block;
    outline: none;
    background-color: white;
    animation: none;
  }
  .pic:hover +.div1{
    left: -2vh;
    top: -2vh;
    box-shadow: 5px 5px 5px black;
  }
  .div2{
    position: absolute;
    display: none;
    background:none;
    left: 0;
    top:0;
    height: 30vh;
    width: 25vh;
    border: 0.1vw solid;
  }
  
  .pic:hover +.div1 +.div2{
    display: block;
}
}
`