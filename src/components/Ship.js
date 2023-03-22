import styled from "styled-components"
import {GiSpaceship} from 'react-icons/gi'

const Ship = () => {
    return (
        <Wrapper>
            
            <div className="ship">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>
                
            </div>
      </Wrapper>
  )
}
export default Ship

const Wrapper = styled.div`
.laser1{
    transform: rotate(90deg);
    left: .5vh;
    right: 0;
    bottom: 0;
    position: relative;
    color: red;
    animation-name:laser;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.laser2{
    transform: rotate(90deg);
    left: .5vh;
    right: 0;
    bottom: 0;
    position: relative;
    color: #5bff5b;
    animation-name:laser;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes laser{
    from{bottom:-5vh;}
    to{bottom:15vh}
}
.ship{
    width: 5vh;
    position: absolute;
    bottom: 5vh;
    left: 5vh;
    font-size: 5vh;
    transform: rotate(90deg);
    animation-name: ship;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship {
  0%{left:10%;bottom:10%;}
  25%{transform:rotate(0deg);left:80%; bottom:10%}
  50%{transform:rotate(-90deg);left:80%;bottom:80%;}
  75%{transform:rotate(-180deg);left:10%;bottom:80%}
  100%{transform:rotate(-270deg);left:10%;bottom:10%;}
}
`