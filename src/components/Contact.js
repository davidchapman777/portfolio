import styled from "styled-components"
import { EmailForm } from "./EmailForm"

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">Contact</div>
      <div className="form1">
      <EmailForm/>
      </div>
    </Wrapper>
  )
}
export default Contact
const Wrapper = styled.div`
border: 0.1vw solid ;
top: 0vh;
left: 0;
right: 0;
margin: auto;
width: 50%;
text-align: center;
position: relative;
.title{
width: 10vh;
margin: auto;
border: 0.1vw solid;
}
.form1{
  display: none;
}
.title:hover + .form1{
  display: block;
}
.form1:hover{
  display: block;
}

@media only screen and (min-width: 1000px) {
  top: 12vh;
}
`