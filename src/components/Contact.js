import styled from "styled-components"
import { EmailForm } from "./EmailForm"

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">Contact</div>
      <div className="form1">
        <span>Contact me</span>
      <EmailForm/>
      </div>
      <div className="outline2"></div>
      <div className="div1">
        <div className="react">CONTACT </div>
          <div className="react">/</div>
        <div className="react"> CONTACT</div>
          <div className="react">/</div>
        <div className="react">CONTACT </div>
          <div className="react">/</div>
        <div className="react">CONTACT </div>
          <div className="react">/</div>
        <div className="react">CONTACT</div>
          <div className="react">/</div>
        <div className="react">CONTACT</div>
          <div className="react">/</div>
        
        
        </div>
      <div className="div2">
        <div className="react"> CONTACT</div>
          <div className="react">/</div>
        <div className="react">CONTACT </div>
          <div className="react">/</div>
        <div className="react"> CONTACT</div>
          <div className="react">/</div>
        <div className="react">CONTACT </div>
          <div className="react">/</div>
        <div className="react"> CONTACT</div>
          <div className="react">/</div>
        <div className="react"> CONTACT</div>
          <div className="react">/</div>
        
        
      </div>
    </Wrapper>
  )
}
export default Contact
const Wrapper = styled.div`
left: 0;
right: 0;
margin: auto;
text-align: center;
position: relative;
width: 99%;
top: 10.5vh;
span{
text-decoration: underline;
}
.title{
width: 15vh;
height: 3vh;
margin: auto;
left: 0;
right: 0;
border: 0.4vw solid;
padding-top: 0.5vh;
border-radius: 5px;
position: absolute;
z-index: 1;
}
.form1{
  display:none;
  top: -10vh;
  width: 29vh;
  height: 35vh;
  position: relative;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 1vh;
  transition: .5s;
  z-index: 2;
  border: 0.1vw solid;
  border-radius: 10px;
  background: #00006a;
}
.title:hover + .form1{
  display: block;
}
.form1:hover{
  display: block;
}
.outline2{
  width:29vh;
  height: 35vh;
  top: -9vh;
  border: 0.1vw solid;
  position: absolute;
  margin: auto;
  left: 0vh;
  right: 0;
  border-radius: 10px;
  transition: .5s;
  background: none;
  opacity: 0;
  z-index: 0;
}
.title:hover + .form1 + .outline2{
  left: 3vh;
  top: -8vh;
  box-shadow: 10px 10px 10px;
  opacity: 1;
}
.form1:hover + .outline2{
  opacity: 1;
  left: 3vh;
  top: -8vh;
  box-shadow: 10px 10px 10px;
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
.title:hover + .form1 + .outline2 + .div1{
  display: flex;
}
.form1:hover + .outline2 +.div1{
  display: flex;
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
.title:hover + .form1 + .outline2 + .div1 + .div2{
  display: flex;
}
.form1:hover + .outline2 +.div1 + .div2{
  display: flex;
}

@keyframes my-move{
  0%{left:-100%};
  100%{left:0%}
}
.react{
  margin: auto;
  font-size: 2.5vw;
}

@media only screen and (min-width: 600px) {
  position: absolute;
  top: 40vh;
  border: .1vw solid green;
  .title{
    left: 30%;
  }
  .form1{
    top: 3vh;
    left: 15%;
    
  }
  .outline2{
  top: 4vh;
  left: 30%;
  right: 0;
}
.title:hover + .form1 + .outline2{
  left: 33%;
  top: 5.5vh;
}
.form1:hover + .outline2{
  opacity: 1;
  left: 33%;
  top: 5.5vh;
  
}
}
@media only screen and (min-width: 768px) {
.title{
border: 0.3vw solid;
}
}
@media only screen and (min-width: 992px) {
  position: relative;
  top: 0;
  width: 99%;
  height: 10vh;
  left: 0;
  .title{
    position: absolute;
    left: 0%;
    margin-left: 30vh;
    border: .2vw solid;
  }
.form1{
  display:none;
  top: 0vh;
  width: 56vh;
  height: 20vh;
  left: 0%;
  margin-top: -.1vh;
  margin-left: 46vh;
  position: absolute;
}
.outline2{
  top: 0vh;
  opacity: 0;
  margin-left: 46vh;
  width: 56vh;
  height: 20vh;
  left: 0%;
}
.title:hover + .form1 + .outline2{
  left: 2vh;
  top:2vh;
}
.form1:hover + .outline2{
  opacity: 1;
  left: 2vh;
  top: 2vh;
}
}
@media only screen and (min-width: 1200px) {
  .form1{
  display:none;
  top: 0vh;
  width: 80vh;
  height: 25vh;
  margin-top: -.1vh;
  margin-left: 45.5vh;
  position: absolute;
}
.outline2{
  top: 0vh;
  opacity: 0;
  margin-left: 45.5vh;
  width: 80vh;
  height: 25vh;
}
.title:hover + .form1 + .outline2{
  left:2vh;
  top:2vh;
}
.form1:hover + .outline2{
  opacity: 1;
  left: 2vh;
  top: 2vh;
}
}
`