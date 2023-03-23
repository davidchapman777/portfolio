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
      <div>
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
width: 80%;
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
  z-index: 1;
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
  top: -3vh;
  z-index: 2;
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
  top: -3vh;
  border-radius: 10px;
  height: 40vh;
  opacity: 0;
  transition: .5s;
  z-index: 0;
  box-shadow: 5px 5px 5px;
}
.title:hover +.projects + .container3{
  left: 3vh;
  top: -1vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: -1vh;
  opacity: 1;
}

@media only screen and (min-width: 600px) {
  height: 30vh;
  width: 30vh;
  position: absolute;
  top: 30.1vh;
  left: 30%;
  .title{
    top: 2vh;
  }
  .projects{
    top: 6vh;
    width: 22vh;
  }
  .container3{
  left: 0vh;
  right: 0;
  width:22vh;
  padding: 2vh;
  top: 6vh;
  height: 40vh;
}
.title:hover +.projects + .container3{
  left: 3vh;
  top: 7.5vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: 7.5vh;
  opacity: 1;
}
}
@media only screen and (min-width: 768px) {
  .title{
    border: 0.3vw solid;
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
    left: 30vh;
    top: 0;
    border: .2vw solid;
  }
  
.projects{
    position: absolute;
    top: 0;
    width: 55vh;
    display: none;
    height: 15vh;
    margin-left: 46vh;
    padding: 0vh;
  .link{
   position: relative;
   height: 14vh;
   width: 17vh;
   margin: .5vh;
  .pic{
    width: 16vh;
    height: 10vh;
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
  height: 11.1vh;
  width: 51vh;
  margin-left: 46vh;
}
.title:hover +.projects + .container3{
  margin-left: 45vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
.projects:hover +.container3{
  margin-left: 45vh;
  top: 2vh;
  opacity: 1;
  display: flex;
}
}

@media only screen and (min-width: 1200px) {
}

`