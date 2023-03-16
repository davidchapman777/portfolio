import styled from "styled-components"
import pic from '../images/profilepic.jpeg'
const Header = () => {
    return (
      <Wrapper>    
        <div>
          <img src={pic} className='pic'/>
        </div>
      </Wrapper>
  )
}
export default Header

const Wrapper = styled.div`
border: 0.1vw solid ;
position: relative;
top: 2vh;
left: 0;
right: 0;
margin: auto;
width: 50%;
height: 20vh;
text-align: center;
.pic{
  width: 15vh;
  border-radius: 5%;
  border: 0.1vw solid;
}
`