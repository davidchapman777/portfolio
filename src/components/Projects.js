import styled from "styled-components"
import pic1 from '../images/project1.png'
import pic2 from '../images/project2.png'
import pic3 from '../images/project3.png'
import { useState, useEffect} from "react"
import Loading from "./Loading"
const Projects = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (isLoading) {
      setIsLoading(true)
    }
  },[])
  return (
    <Wrapper>
      <div className="projects-container">
        <div className="title">Projects</div>
          <div className="projects">
            <div className="link">
              <span>Shit My Wife Likes App</span>
              {isLoading ? (<Loading />) : (
              <a href='https://shitmywifelikes.netlify.app/' >
                <img src={pic1} className='pic' alt="project pic" />
              </a>
              )}
            </div>
            <div  className="link">
             <span>Star Wars App</span>
              {isLoading ? (<Loading />) : (
              <a href='https://dc1499110-starwars-app.netlify.app/' >
                <img src={pic2} className='pic' alt="project pic"/>
              </a>
              )}
            </div>
            <div className="link">
              <span>Catch Of The Day App</span>
              {isLoading ? (<Loading />) : ( 
              <a href='https://catchoftheday.onrender.com' >
              <img src={pic3} className='pic'alt="project pic"/>
              </a>
              )}
            </div>
          </div>
          <div className="container3"></div>
        <div className="div3">
          <div className="react1">PROJECTS </div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS </div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS </div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS </div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
        </div>
          <div className="div4">
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          <div className="react1">PROJECTS</div>
          <div className="react1">/</div>
          </div>
      </div>
    </Wrapper>
  )
}
export default Projects

const Wrapper = styled.div`
top: 8vh;
left: 0;
right: 0;
margin: auto;
text-align: center;
position: relative;
.outline{
  display: none;
}
.title{
  position: relative;
  width: 15vh;
  height: 3vh;
  margin: auto;
  border-radius: 5px;
  z-index: 2;
  border: 0.4vw solid;
  padding-top: 0.5vh;
}
.projects{
  display:none;
  width: 23vh;
  height: 40vh;
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  top: -4vh;
  z-index: 3;
  border: .1vw solid;
  padding: 2vh;
  background: #00006a;
  border-radius: 10px;
  .link{
  margin: auto;
  background: #00006a;
  left: 0;
  right: 0;
  width: 22vh;
  margin-bottom: 1vh;
  border: .1vw solid;
  transition: .5s;
  border-radius: 10px;
  .pic{
    width: 18vh;
    height: 10vh;
    border-radius: 10px;
    border: 0.1vw solid #04fdf9;
  }
 
}
}
.title:hover + .projects{
  display: block;
}
.projects:hover{
  display: block;
}
.link:hover{
  transform: scale(1.1);
}
.container3{
  position: absolute;
  margin: auto;
  left: 0vh;
  right: 0;
  border: .1vw solid;
  width:23vh;
  padding: 2vh;
  top: -4vh;
  border-radius: 10px;
  height: 40vh;
  opacity: 0;
  transition: .5s;
  z-index: 0;
  box-shadow: 5px 5px 5px;
}
.title:hover +.projects + .container3{
  left: 3vh;
  top: -2vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: -2vh;
  opacity: 1;
}
.div3{
  position: absolute;
  animation: my-move3 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  width: 99.9%;
  display:none;
  top: 4.5vh;
  z-index: 0;
  margin: auto;
}
.title:hover +.projects + .container3 + .div3{
  display: flex;
}
.projects:hover +.container3 +.div3{
  display: flex;
}
@keyframes my-move3{
  0%{left:0%};
  100%{left:100%}
}
.div4{
  position: absolute;
  left: -200vh;
  animation: my-move4 25s infinite;
  animation-direction: normal;
  animation-timing-function:linear;
  text-align: center;
  display:none;
  width: 99.9%;
  top: 4.5vh;
  z-index: 0;
  margin: auto;
}
.title:hover +.projects + .container3 + .div3 +.div4{
  display: flex;
}
.projects:hover +.container3 +.div3 +.div4{
  display: flex;
}
@keyframes my-move4{
  0%{left:-100%};
  100%{left:0%}
}
.react1{
  margin: auto;
  font-size: 2.5vw;
}

@media only screen and (min-width: 600px) {
  height: 30vh;
  position: absolute;
  top: 35.9vh;
  .projects-container{
    position: relative;
    left: 15%;
  }
  .div3{
    margin-top: -3vh;
  }
  
  .div4{ 
    margin-top: -3vh;
  }

  .title{
    top: -4vh;
  }
  .projects{
    display: none;
    top: 0vh;
    position: absolute;
    width: 22vh;
  }
  .container3{
  left: 0vh;
  right: 0;
  width:22vh;
  padding: 2vh;
  top: 0vh;
  height: 40vh;
  opacity: 0;
}
.title:hover +.projects + .container3{
  left: 3vh;
  top: 2vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: 2vh;
  opacity: 1;
}
}
@media only screen and (min-width: 768px) {
  
  .title{
    border: 0.3vw solid;
  }
  .div3{
  top: 6vh;
}

.div4{
  top: 6vh;
}

}
@media only screen and (max-width: 850px) and (orientation: landscape) {
  left: 10vh;
  top: 31vh;
  .title{
  width: 40vh;
  height: 6vh;
  border: 0.1vw solid;
  padding-top: 1vh;
}
.projects{
  width: 110vh;
  height: 30vh;
  left: -50vh;
  right: 0;
  top: 11vh;
  padding: 2vh;
  .link{
  left: 0;
  right: 0;
  height: 30vh;
  width: 35vh;
  margin-bottom: 1vh;
  border: none;
  font-size: 3vh;
  padding: 1vh;
  .pic{
    height: 20vh;
    width: 30vh;
    margin-top: 1vh;
  }
}
}
.title:hover + .projects{
  display: flex;
}
.projects:hover{
  display: flex;
}
.link:hover{
  transform: scale(1.1);
}
.container3{
  left: -50vh;
  right: 0;
  width:110vh;
  padding: 2vh;
  top: -4vh;
  height: 30vh;
}
.title:hover +.projects + .container3{
  left: -44vh;
  top: 14vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: 0vh;
  opacity: 1;
}
.div3{
    margin-top: 0vh;
  }
  
  .div4{ 
    margin-top: 0vh;
  }
}
@media only screen and (min-width: 992px) { 
  position: relative;
  margin: auto;
  left: 0;
  top: 0;
  width: 99%;
  height: 10vh;
.title{
    position: absolute;
    left: 18.5vh;
    top: 0;
    border: .2vw solid;
  }
  .div3{
    margin-top:1vh;
  }
  .div4{
    margin-top: 1vh;
  }
 
.projects-container{
  left: 0%;
  margin-left: 11.4vh;
}
  
.projects{
    position: absolute;
    top: 0;
    width: 61vh;
    display: none;
    height: 20vh;
    margin-left: 34vh;
    padding: 0vh;
    
  .link{
   position: relative;
   height: 16vh;
   width: 20vh;
   margin: auto;
   border: none;
   background: none;
  .pic{
    width: 16vh;
    height: 12vh;
    border-radius: 10px;
    border: 0.1vw solid #04fdf9;
    bottom: 0vh;
    position: relative;
  }
  }}
  .projects:hover{
    display: flex;
  }
.title:hover + .projects{
  display: flex;
}
.container3{
  opacity: 0;
  padding: 2vh;
  top: 0vh;
  height: 16vh;
  width: 57vh;
  margin-left: 34vh;
}
.title:hover +.projects + .container3{
  margin-left: 33vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
.projects:hover +.container3{
  margin-left: 33vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
}

@media only screen and (min-width: 1200px) {
  .projects{
    position: absolute;
    top: 0;
    width: 80vh;
    display: none;
    height: 22vh;
    margin-left: 34vh;
    padding: 0vh;
  .link{
   position: relative;
   height: 20vh;
   width: 22vh;
   margin: auto;
   left: 0;
   right: 0;
   border: none;
  .pic{
    width: 20vh;
    height: 15vh;
    border-radius: 10px;
    border: 0.1vw solid #04fdf9;
    bottom: 0vh;
    position: relative;
  }
  }}
  .projects:hover{
    display: flex;
  }
.title:hover + .projects{
  display: flex;
}
.container3{
  opacity: 0;
  padding: 2vh;
  top: 0vh;
  height: 18vh;
  width: 76vh;
  margin-left: 34vh;
}
.title:hover +.projects + .container3{
  margin-left: 33vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
.projects:hover +.container3{
  margin-left: 33vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
}
.div3{
  top: 4vh;
}
.div4{
  top: 4vh;
}


`