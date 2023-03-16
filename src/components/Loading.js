import styled from "styled-components"



const Loading = () => {
    return (
      <Wrapper>
      <div className="spinner"></div>
      </Wrapper>
  )
}
export default Loading

const Wrapper = styled.div`
.spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
}
@keyframes spin-anim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`