import styled from "styled-components"
import { EmailForm } from "./EmailForm"

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">Contact</div>
      <div className="form1">
      <EmailForm/>
      </div>
      <div className="outline2"></div>
    </Wrapper>
  )
}
export default Contact
const Wrapper = styled.div`
left: 0;
right: 0;
margin: auto;
width: 99.9%;
text-align: center;
position: absolute;
top: 45.2vh;

.title{
width: 10vh;
margin: auto;
left: 0;
right: 0;
border: 0.1vw solid;
border-radius: 5px;
position: absolute;
}
.form1{
  display:;
  top: 2vh;
  width: 29vh;
  height: 28vh;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 1vh;
  transition: .5s;
  z-index: 1;
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
  height: 28vh;
  top: 3vh;
  border: 0.1vw solid;
  position: absolute;
  margin: auto;
  left: 0vh;
  right: 0;
  border-radius: 10px;
  transition: .5s;
  background: none;
  opacity: 1;
}
.title:hover + .form1 + .outline2{
  left: 3vh;
  top: 5vh;
  box-shadow: 10px 10px 10px;
  opacity: 1;
}
.form1:hover + .outline2{
  opacity: 1;
  left: 3vh;
  top: 5vh;
  box-shadow: 10px 10px 10px;
}

@media only screen and (min-width: 1000px) {
  top: 12vh;
}
`