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
border: 0.1vw solid;
width: 15vh;
height: 3vh;
margin: auto;
border-radius: 5px;
margin-bottom: 2vh;

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
}
.b:hover + .p + .background{
  left: 3vh;
  top: 7vh;
  opacity: 1;
  box-shadow: 5px 5px 5px ;
}

@media only screen and (min-width: 1000px) {
  body {
    background-color: lightblue;
  }
  .p{
    display: block;
  }
}
`