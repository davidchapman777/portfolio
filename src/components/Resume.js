import styled from "styled-components"
import resume from '../images/resume.jpeg'
const Resume = () => {
    return (
      <Wrapper>
        <div className="resume-cnt">
        <img src={resume} alt='resume' className="resume1"/>        
        </div>
      </Wrapper>
  )
}
export default Resume
const Wrapper = styled.div`
.resume-cnt{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
    .resume1{
        position: absolute;
        height: 100%;
        width: 100%;
    }
}
@media only screen and (min-width: 600px) {
    .resume-cnt{
    width: 60vh;
    height: 80vh;
    .resume1{
        border-radius:10px;
        box-shadow:10px 10px 10px
    }
    }
}
@media only screen and (min-width: 992px) {
    .resume-cnt{
    width: 70vh;
    height: 90vh;
    }
}
`