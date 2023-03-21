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

.title{
  position: relative;
  border: .1vw solid;
  width: 15vh;
  height: 3vh;
  margin: auto;
  border-radius: 5px;
  z-index: 1;
}
.projects{
  display:none;
  width: 23vh;
  height: 40vh;
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  top: -5vh;
  z-index: 2;
  border: .1vw solid;
  padding: 4vh;
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
  padding: 4vh;
  top: -5vh;
  border-radius: 10px;
  height: 40vh;
  opacity: 0;
  transition: .5s;
  z-index: 0;
  box-shadow: 5px 5px 5px;

}
.title:hover +.projects + .container3{
  left: 3vh;
  top: -3vh;
  opacity: 1;
}
.projects:hover +.container3{
  left: 3vh;
  top: -3vh;
  opacity: 1;
}

@media only screen and (min-width: 1000px) {
 top: 15vh;
 .projects{
  display: flex;
 }
}
`