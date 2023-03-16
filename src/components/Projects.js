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
            {isLoading ? (<Loading />) : (
              <a href='https://shitmywifelikes.netlify.app/' >
                <img src={pic1} className='pic' alt="project pic" />
              </a>
            )}
            <span>Shit My Wife Likes App</span>
          </div>
          <div  className="link">
            {isLoading ? (<Loading />) : (
              
              <a href='https://dc1499110-starwars-app.netlify.app/' >
            <img src={pic2} className='pic'alt="project pic"/>
            </a>
            ) }
            <span>Star Wars App</span>
          </div>
          <div className="link">
            {isLoading ? (<Loading />) : (
              
              <a href='https://catchoftheday.onrender.com' >
            <img src={pic3} className='pic'alt="project pic"/>
            </a>
              ) }
            <span>Catch Of The Day App</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Projects

const Wrapper = styled.div`
top: 10vh;
left: 0;
right: 0;
margin: auto;
width: 80%;
text-align: center;
position: relative;
height: 30vh;

.title{
  position: relative;
  margin: 2vh;
}
.projects{
  display: flex;
  justify-content: space-between;
  .link{
  margin: auto;
  left: 0;
  right: 0;
  height: 20vh;
  width: 22%;
  transition: .5s;
  border-radius: 10px;
  
  .pic{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 0.1vw solid #04fdf9;
  }
}
}
.title:hover + .projects{
  display: flex;
}




.link:hover{
  transform: scale(1.1);
}
`