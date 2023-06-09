import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { useState, useEffect } from 'react';



export const EmailForm = () => {
  const [message, setMessage]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY)
      setMessage(true)
      setTimeout(() => {
          setMessage(false)
      },3000)
      form.current.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

    return (
    <Wrapper>
    {message? <div>Submitted!</div>:null}        
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label>Name</label>
      <br/>          
      <input type="text" name="from" className='input'/>
      <br />
      <label>Phone</label>
      <br/>
      <input type='tel' name='phone' className='input'/>
          <br />
          <br className='br'/>
          <label>Your Email</label>
          <br className='br1'/>
      <br className='br'/>          
      <input type="email" name="from" className='input'/>
      <br/>          
      <label>Message</label>
      <br/>          
      <textarea name="message" className='input'/>
      <br/>          
      <br/>                
          <button type="submit" value="Send" className='submit-btn'>submit</button>
          <br/>
    </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
text-align: left;
padding: 1.5vh;
position: absolute;
font-size: 1.9vh;
height: 30vh;
.br{
  display: none;
}

.form{
  height: 100%;
}
.input{
  background: none;
  border: 0.1vw solid #04fdf9;
  color: #04fdf9;
  border-radius: 10px;
  font-size: 1.9vh;
}

.submit-btn{
border-radius: 10px;
background: none;
border: 0.1vw solid #04fdf9;
color: #04fdf9;
position: absolute;
height: 3vh;
width: 20.5vh;
bottom: 1vh;
&:hover{
  background: white;
}
}
@media only screen and (max-width: 850px) and (orientation: landscape) {
  columns: 2;
  column-gap: 17vh;
  font-size: 3vh;
  .br{
    display: block;
  }
  .br1{
    display: none;
  }
  .submit-btn{
    width: 40vh;
    height: 4vh;
    position: absolute;
    bottom: 5vh;
    margin: auto;
    left: 0;
    right: 0;
  }
  .input{
  width: 40vh;
  height: 5vh;
}

}
@media only screen and (min-width: 992px) {
  .submit-btn{
    width: 15vh;
    height: 3vh;
    position: relative;
  }
}
@media only screen and (min-width: 1200px) {
  columns: 2;
  line-height: 3vh;
  width: 96%;
  height: 80%;
  .input{
    margin: auto;
    left: 0;
    right: 0;
  }
}
`