import styled from "styled-components"
import { EmailForm } from "./EmailForm"

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">Contact</div>
      <div className="form1">
      <EmailForm/>
      </div>
      <div className="outline"></div>
    </Wrapper>
  )
}
export default Contact
const Wrapper = styled.div`
left: 0;
right: 0;
margin: auto;
width: 50%;
text-align: center;
position: absolute;
top: 59vh;

.title{
width: 10vh;
margin: auto;
border: 0.1vw solid;
border-radius: 5px;
position: relative;
z-index: 1;
}
.form1{
  display: none;
  top: -5vh;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 1vh;
  transition: .5s;
  z-index: 1;
  
}
.title:hover + .form1{
  display: block;
}
.form1:hover{
  display: block;
}
.outline{
  width:33vh;
  height: 31vh;
  top: -4vh;
  border: 0.1vw solid;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  border-radius: 10px;
  transition: .5s;
  background: none;
  opacity: 0;
}
.title:hover + .form1 + .outline{
  left: 3vh;
  top: -2vh;
  box-shadow: 10px 10px 10px;
  opacity: 1;
}
.form1:hover + .outline{
  opacity: 1;
  left: 3vh;
  top: -2vh;
  box-shadow: 10px 10px 10px;
}

@media only screen and (min-width: 1000px) {
  top: 12vh;
}
`