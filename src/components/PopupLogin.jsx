import React from 'react'
import styled from 'styled-components'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HttpsIcon from '@mui/icons-material/Https';
import { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { style } from '@mui/system';
function PopupLogin({open , handleOpen}) {

    

  return <LoginContianer className='text-white bg-[rgba(255,255,255,50%)] dark:bg-[rgba(58,84,143,70%)]' disabeld={open}>
    <style>{'body { overflow : hidden }'}</style>

  <h1 className='text-[35px] font-bold mb-4 text-[#333] dark:text-white'> Sign in </h1>
  <div className='login  flex items-left justify-center flex-col w-full'>
        <label className='text-[#333] dark:text-white txet-[sm] text-left'> Email address </label>
        <div className='input w-full relative'>
            <Input type='text' placeholder='Email Or Phone Number...' className='bg-[white] border-[1px] text-[#333] dark:text-[white] border-[#333] dark:border-0 dark:bg-[#1C2230]'/>
            <Span className=''> <ForwardToInboxIcon sx={{ color : '#2f8b95' }}/> </Span>
        </div>
        <label className='text-[#333] dark:text-white txet-[sm] text-left   '> Password </label>
        <div className='input w-full relative'>
            <Input type='password' placeholder='Password...'  className='bg-[white] border-[1px] text-[#333] dark:text-[white] border-[#333] dark:border-0 dark:bg-[#1C2230]' />
            <Span className=''> <HttpsIcon sx={{ color : '#2f8b95' }}/> </Span>
        </div>
        <Button> Sign in  </Button>
  </div>
  <Close className='' onClick={handleOpen} toggle={open}> <span> X </span> </Close>
</LoginContianer>

}
// background : rgb(58 84 143 / 70%);

export default PopupLogin

const AnimationHero = keyframes`
    0%{
      opacity: 0;
      transform: translateY(-40px) rotate(-1deg);
    }
    100%{
      opacity: 1;
      transform: translateY(0) rotate(0);
    }
`
const LoginContianer = styled.div`
    position : fixed;
    top : 30% ;
    left : 30% ;  
    transform : translate(-50% , -50%);
    width : 40%;
    height : 400px;
    padding  : 20px;
    z-index : 9999;
    border-radius : 20px;
    transition : 0.4s ;
    opacity: 0;
    animation: ${AnimationHero};
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards; 
    /* overflow: hidden; */
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);   
    display : ${(props) => props.disabeld ? 'block' : 'none'};
    @media (max-width : 992px){
            width : 80%;
            top : 10% ;
            left : 10% ;  
            transform : translate(-50% , -50%);
        }
        @media (max-width : 768px){
            width : 80%;
            top : 10% ;
            left : 10% ;  
            transform : translate(-50% , -50%);
        }
`
const Input = styled.input`
    width : 100%;
    margin : 20px 0 ; 
    padding : 13px 0 13px 35px;
    border-radius : 10px;
    display : block;
`
const Button = styled.button`
    width : 60%;
    border-radius : 20px;
    // background-color : red;
    margin: 0 auto;
    padding : 12px;
    background-image: linear-gradient(to right, #4ba4ae , #1e39a1);
    font-size : 18px;
`
const Close = styled.div`
    position : absolute;
    right : -12px;
    top : -12px;
    color : #fff;
    background : rgb(58 84 143 / 70%);
    width : 30px; 
    height : 30px;
    border-radius : 50%;
    display : flex;
    align-items: center;
    justify-content: center;
    cursor : pointer;
`
const Span = styled.span`

  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

`
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.disabeld ? 'auto' : 'hidden'};
  }
`


