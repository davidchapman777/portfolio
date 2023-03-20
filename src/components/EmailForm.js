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
      <br/>
      <label>Your Email</label>
      <br/>          
      <input type="email" name="from" className='input'/>
      <br/>          
      <label>Message</label>
      <br/>          
      <textarea name="message" className='input'/>
      <br/>          
      <button type="submit" value="Send" className='submit-btn'>submit</button>
    </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
text-align: left;
border: 0.1vw solid;
border-radius: 10px;
padding: 1.5vh;
background: #01014f;
height: 28vh;
width: 30vh;
position: relative;
margin: auto;
.input{
  background: none;
  border: 0.1vw solid #04fdf9;
  color: #04fdf9;
  border-radius: 10px;
}
.submit-btn{
  border-radius: 10px;
background: none;
border: 0.1vw solid #04fdf9;
color: #04fdf9;

}
`