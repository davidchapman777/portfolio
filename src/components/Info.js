import styled from "styled-components"

const Info = () => {
    return (
      <Wrapper>
        <div className="container">
          <div className="b">Bio</div>    
            <div className="p">
                Hello there! My name is David and I am a self taught front-end developer. I am currently working full time as a critical care nurse but would love to make a full transition into the world of web development. I like to wake up at 4 AM on my off days and work on coding websites. Having the ability to create whatever I can imagine just by typing on a keyboard is astonishing to me and feels like a super power.
            </div>
            <div className="background"></div>
        </div>
      </Wrapper>
  )
}
export default Info

const Wrapper = styled.div`
left: 0;
right: 0;
margin: auto;
text-align: center;
position: absolute;
.container{
  position: relative;
  top: 2vh;
}
.b{
border: 0.4vw solid;
padding-top: 0.5vh;
width: 15vh;
height: 3vh;
margin: auto;
border-radius: 5px;
margin-bottom: 2vh;
z-index: 2;
}
.p{
  z-index: 2;
  border: 0.1vw solid;
  width: 30vh;
  height: 32vh;
  margin: auto;
  position: absolute;
  font-size: 2.1vh;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding: 1vh;
  background: #00006a;
  display: none;
}
.b:hover + .p{
  display: block;
}
.background{
  z-index: 0;
  width: 32vh;
  height: 34vh;
  border: .1vw solid ;
  position: absolute;
  margin: auto;
  left: 0vh;
  right: 0;
  top: 4.2vh;
  border-radius: 10px;
  transition: .5s;
  opacity: 0;
  background: #00006a;
}
.b:hover + .p + .background{
  left: 3vh;
  top: 7.5vh;
  opacity: 1;
  box-shadow: 5px 5px 5px ;
}

@media only screen and (min-width: 600px) {
height: 30vh;
width: 30vh;
left: -30%;
.b:hover + .p + .background{
  left: 2vh;
  top: 7.5vh;
  opacity: 1;
  box-shadow: 5px 5px 5px ;
}
}
@media only screen and (min-width: 768px) {
  .b{
    border: 0.3vw solid;
  }
}
@media only screen and (min-width: 992px) {
  position: relative;
  width: 99%;
  height: 10vh;
  left: 0;
  z-index: 4;
.container{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
.b{
border: 0.2vw solid;
padding-top: 0.5vh;
width: 15vh;
height: 3vh;
left: 30vh;
position: absolute;
}
.p{
  position: absolute;
  margin-left: 47vh;
  width: 50vh;
  display: none;
  height: 20vh;
  font-size: 2.2vh;
  transition: .5s;
  top: 0vh;
  text-align: left;
}
.b:hover + .p{
  display: block;
}
.background{
  position: absolute;
  opacity: 0;
  top: 0vh;
  width: 52vh;
  height: 22vh;
  margin-left: 47vh;
}
.b:hover + .p + .background{
  opacity: 1;
  top: 2vh;
  margin-left: 47.5vh;
}
}
@media only screen and (min-width: 1200px) {
}


`