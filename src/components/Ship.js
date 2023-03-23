import styled from "styled-components"
import { GiSpaceship } from 'react-icons/gi'
import { GiScoutShip } from 'react-icons/gi'
import{GiInterceptorShip} from 'react-icons/gi'

const Ship = () => {
    return (
        <Wrapper>
            
            <div className="ship1">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship2">
                {/* <div className="laser1">-</div>
                <div className="laser2">-</div> */}
                <div>
                <GiInterceptorShip/>
                </div>   
            </div>
            <div className="ship-container">
            <div className="ship3">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship4">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship5">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship6">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship7">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship8">
                <div className="laser5">-</div>
                <div>
                <GiScoutShip />
                </div>   
            </div>
            <div className="ship9">
                <div className="laser1">-</div>
                <div className="laser2">-</div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
            <div className="ship10">
                <div className="laser-container">
                <div className="laser3">-</div>
                <div className="laser4">=</div>
                <div className="laser3">-</div>
                </div>
                <div>
                <GiSpaceship />
                </div>   
            </div>
        </div>
            
      </Wrapper>
  )
}
export default Ship

const Wrapper = styled.div`
.laser1{
    transform: rotate(90deg);
    left: 1vh;
    right: 0;
    bottom: 0;
    position: absolute;
    color: #ffee00;
    animation-name:laser;
    animation-duration: .1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    font-size: 2.2vh;
}

.laser2{
    transform: rotate(90deg);
    left: 1vh;
    right: 0;
    bottom: 0;
    position: absolute;
    color: #5bff5b;
    animation-name:laser;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes laser{
    from{bottom:3vh;}
    to{bottom:20vh}
}
.laser-container{
    position: relative;
    transform: rotate(90deg);
    line-height: 2vh;
}
.laser3{
    position: relative;
    color: #03fa03;
    animation-name:laser3;
    animation-duration: .1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    font-size: 4vh;
    display: none;
}
@keyframes laser3{
    from{right:-2vh;}
    to{right:20vh}
}
.laser4{
    color: #02e3fc;
    position: relative;
    animation-name:laser4;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    font-size: 4vh;
    display: none;
}
@keyframes laser4{
    from{right:-2vh;}
    to{right:20vh}
}
.laser5{
    position: relative;
    transform: rotate(90deg);
    left: 1vh;
    color: red;
    animation-name:laser5;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes laser5{
    from{top:0vh;}
    to{top:-20vh}
}
.ship1{
    width: 5vh;
    position: absolute;
    bottom: 5vh;
    left: 3vh;
    font-size: 5vh;
    transform: rotate(90deg);
    animation-name: ship1;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 0.7s;
}
@keyframes ship1 {
    0%{left:-10%;bottom:40%;}
     25%{transform:rotate(90deg);left:50%; bottom:-15%}
     50%{transform:rotate(0deg);left:110%;bottom:40%}
     75%{transform:rotate(-90deg);left:60%;bottom:105%}
     100%{transform:rotate(-130deg);left:-10%;bottom:50%;}
}
.ship2{
    width: 5vh;
    position: absolute;
    bottom: 11vh;
    left: 5vh;
    font-size: 5vh;
    transform: rotate(90deg);
    animation-name: ship2;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: #03fa03;
}
@keyframes ship2 {
    0%{left:-10%;bottom:50%;}
    25%{transform:rotate(90deg);left:50%; bottom:-10%}
    50%{transform:rotate(0deg);left:110%;bottom:50%}
    75%{transform:rotate(-90deg);left:50%;bottom:110%}
    100%{transform:rotate(-130deg);left:-10%;bottom:50%;}
}
.ship-container{
    display: none;
}

@media only screen and (min-width: 992px) {
    .ship-container{
        display: block;
    }
    .laser1{
    transform: rotate(90deg);
    left: -2vh;
    right: 0;
    bottom: 0;
    position: absolute;
    color: #ffee00;
    animation-name:laser;
    animation-duration: .1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    font-size: 2.2vh;
}

.laser2{
    transform: rotate(90deg);
    left: -2vh;
    right: 0;
    bottom: 0;
    position: absolute;
    color: #5bff5b;
    animation-name:laser;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes laser{
    from{bottom:-2vh;}
    to{bottom:15vh}
}
.laser3{
    display: block;
}
.laser4{
    display: block;
}
.laser5{

}
.ship1{
    animation-duration: 15s;
    animation-delay: .4s;
    font-size: 3vh;
    .laser1{

    }
    .laser2{
        
    }
}
@keyframes ship1 {
    0%{left:-10%;bottom:40%;}
     25%{transform:rotate(90deg);left:50%; bottom:-15%}
     50%{transform:rotate(0deg);left:110%;bottom:40%}
     75%{transform:rotate(-90deg);left:60%;bottom:105%}
     100%{transform:rotate(-130deg);left:-10%;bottom:50%;}
}
.ship2{
    width: 5vh;
    position: absolute;
    bottom: 11vh;
    left: 5vh;
    font-size: 3vh;
    transform: rotate(90deg);
    animation-name: ship2;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship2 {
    0%{left:-10%;bottom:50%;}
    25%{transform:rotate(90deg);left:50%; bottom:-10%}
    50%{transform:rotate(0deg);left:110%;bottom:50%}
    75%{transform:rotate(-90deg);left:50%;bottom:110%}
    100%{transform:rotate(-130deg);left:-10%;bottom:50%;}
}
.ship3{
    width: 5vh;
    position: absolute;
    bottom: -1vh;
    left: 5vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship3;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: block;
}
@keyframes ship3 {
  0%{left:40%;bottom:10%;}
  25%{left:45%; bottom:10%}
  50%{left:40%;bottom:10%;}
  75%{left:45%;bottom:10%}
  100%{left:40%;bottom:10%;}
}
.ship4{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 17vh;
    left: 5vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship4;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship4 {
    0%{left:55%;bottom:10%;}
  25%{left:60%; bottom:10%}
  50%{left:55%;bottom:10%;}
  75%{left:60%;bottom:10%}
  100%{left:55%;bottom:10%;}
}
.ship5{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 23vh;
    left: 5vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship5;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship5 {
    0%{left:70%;bottom:10%;}
  25%{left:75%; bottom:10%}
  50%{left:70%;bottom:10%;}
  75%{left:75%;bottom:10%}
  100%{left:70%;bottom:10%;}
}
.ship6{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 5vh;
    left: 5vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship6;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship6 {
    0%{left:85%;bottom:10%;}
  25%{left:90%; bottom:10%}
  50%{left:85%;bottom:10%;}
  75%{left:90%;bottom:10%}
  100%{left:85%;bottom:10%;}
}
.ship7{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 11vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship7;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship7 {
    0%{left:48%;bottom:15%;}
  25%{left:53%; bottom:15%}
  50%{left:48%;bottom:15%;}
  75%{left:53%;bottom:15%}
  100%{left:48%;bottom:15%;}
}
.ship8{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: -1vh;
    right: 5vh;
    font-size: 6vh;
    transform: rotate(180deg);
    animation-name: ship8;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    color: #03fa03;
}
@keyframes ship8 {
    0%{left:45%;bottom:60%;}
  25%{left:60%; bottom:70%}
  50%{left:70%;bottom:60%;}
  75%{left:80%;bottom:70%}
  100%{left:85%;bottom:60%;}
}
.ship9{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 17vh;
    right: 5vh;
    font-size: 3vh;
    transform: rotate(0deg);
    animation-name: ship9;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes ship9 {
    0%{left:77%;bottom:15%;}
  25%{left:82%; bottom:15%}
  50%{left:77%;bottom:15%;}
  75%{left:82%;bottom:15%}
  100%{left:77%;bottom:15%;}
}
.ship10{
    display: block;
    width: 5vh;
    position: absolute;
    bottom: 23vh;
    right: 5vh;
    font-size: 5vh;
    transform: rotate(0deg);
    animation-name: ship10;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: #fa9703;
}
@keyframes ship10 {
    0%{left:62%;bottom:20%;}
  25%{left:67%; bottom:20%}
  50%{left:62%;bottom:20%;}
  75%{left:67%;bottom:20%}
  100%{left:62%;bottom:20%;}
}
}
`