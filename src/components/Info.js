import styled from "styled-components"

const Info = () => {
    return (
        <Wrapper>   
            <div className="b">Bio</div>    
            <div className="p">
                Hello there! My name is David and I am a self taught front-end developer. I am currently working full time as a critical care nurse but would love to make a full transition into the world of web development. I like to wake up at 4 AM on my off days and work on coding websites. Having the ability to create whatever I can imagine just by typing on a keyboard is astonishing to me and feels like a super power.
            </div>
      </Wrapper>
  )
}
export default Info

const Wrapper = styled.div`
border: 0.1vw solid ;
top: 3vh;
left: 0;
right: 0;
margin: auto;
width: 50%;
text-align: center;
position: relative;
.b{

}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
`