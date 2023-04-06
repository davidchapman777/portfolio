import styled from "styled-components"

const Info = () => {
  return (
    <Wrapper>
        <div className="container">
        <div className="b">Bio</div>    
            <div className="p">
                Hey there! My name is David and I'm a self taught front-end developer. Formerly, I was a paratrooper in the U.S. Army and currently work full time as a nurse. When Im not saving lives in the ICU I wake up at 4 am on my off days and start coding a new project. Creating anything out of nothing, coding makes me feel like a super hero. In order to pursue my passion I am seeking the opportunity of becoming a full-time developer. Feel free to contact me if you are interested in helping me attain this opportunity.
            </div>
            <div className="background"></div>
        <div className="div1">
      <div className="react">BIO </div>
          <div className="react">/</div>
        <div className="react">BIO </div>
          <div className="react">/</div>
        <div className="react">BIO </div>
          <div className="react">/</div>
        <div className="react">BIO </div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        </div>
      <div className="div2">
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
        <div className="react">BIO</div>
          <div className="react">/</div>
      </div>
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
z-index: 4;
}
.p{
  z-index: 4;
  border: 0.1vw solid;
  width: 30vh;
  height: 37vh;
  margin: auto;
  position: absolute;
  font-size: 2vh;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding: 1vh;
  background: #00006a;
  display: none;
  text-align:justify;
}
.b:hover + .p{
  display: block;
}
.background{
  z-index: 0;
  width: 32vh;
  height: 39vh;
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
.div1{
  position: absolute;
  animation: my-move1 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  width: 99.9%;
  display:none;
  top: 4.5vh;
  z-index: 0;
  margin: auto;
}
.b:hover + .p + .background +.div1{

  display: flex;

}
.div2{
  position: absolute;
  left: -200vh;
  animation: my-move 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  display:none;
  width: 99.9%;
  top: 4.5vh;
  z-index: 0;
  margin: auto;
}
.b:hover + .p + .background +.div1 + .div2{

display: flex;

}
.react{
  margin: auto;
  font-size: ;
}

@media only screen and (min-width: 600px) {
height: 30vh;
width: 100%;
.react{
  margin: auto;
  font-size:4vh;
}
.b{
  position: relative;
  left: -11vh;
}
.p{

}
.b:hover + .p + .background{
  left: 3vh;
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
@media only screen and (max-width: 850px) and (orientation: landscape) {
  left: -10vh;
  top: 25vh;
  
  .b{
border: 0.1vw solid;
padding-top: 1vh;
width: 40vh;
height: 6vh;
margin: auto;
border-radius: 5px;
margin-bottom: 2vh;
z-index: 4;
}
.p{
  border: 0.1vw solid;
  width: 110vh;
  height: 37vh;
  padding:2vh;
  font-size: 3.7vh;
  left: 30vh;
  right: 0;
  top: 13vh;
}
.b:hover + .p{
  display: block;
}
.background{
  width: 112vh;
  height: 40vh;
  border: .1vw solid ;
  left: 30vh;
  right: 0;
  top: 8vh;
}
.b:hover + .p + .background{
  left: 37vh;
  top: 17vh;
  opacity: 1;
}
.div1{
  top: 8vh;
}
.div2{
  top: 8vh;
}
}
@media only screen and (min-width: 992px) {
  position: relative;
  width: 99%;
  height: 10vh;
  left: 0;
  z-index: 1;
  .react{
  margin: auto;
  font-size: 4vw;
}
.div1{
  top: 5vh;
}
.div2{
  top: 5vh;
}
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
  height: 25vh;
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
  height: 27vh;
  margin-left: 47vh;
}
.b:hover + .p + .background{
  opacity: 1;
  top: 2vh;
  margin-left: 46vh;
}
}
@media only screen and (min-width: 1200px) {
  .p{
  position: absolute;
  margin-left: 47vh;
  width: 75vh;
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
  top: 1vh;
  width: 77vh;
  height: 22vh;
  margin-left: 47vh;
}
.b:hover + .p + .background{
  opacity: 1;
  top: 2vh;
  margin-left: 46vh;
}
}
.react{
  margin: auto;
  font-size: 2.2vw;
}


`