import React, { useState } from 'react'
import header from '../accets/header.png'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import PopupLogin from './PopupLogin'
function Header() {

  const [open , setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

    // const ChangeNavTop = () => {
    //   if(window.scrollY) {
    //       setNav(true)
    //   }else{
    //       setNav(false)
    //   }
    // } 
    // window.addEventListener('scroll' , ChangeNavTop);


  return <div className='relative bg-bg-light-color w-full dark:bg-bg-dark-box-color p-[20px] pb-20 mt-[60px]'> 

      <div className='grid grid-cols-12 gap-4 w-[90%] mx-auto mt-[40px]'>
        <ImageStyle src={header} alt='' className='lg:col-span-5 col-span-12'/>

        <Container className='flex relative z-10 items-center md:mt-0 justify-center flex-col w-full lg:col-span-7 col-span-12' blur={open}>
            <h1 className='text-text-light-color dark:text-text-dark-color  mt-4 lg:text-[36px] md:text-[26px] text-center'> All your files <br /> in one secure location  </h1>
            <p className='text-text-light-color dark:text-text-dark-color lg:text-[36px] md:text-[26px]'> accessible anywhere. </p>
            <p className='text-text-light-color dark:text-text-dark-color mt-4 lg:w-10/12 md:w-10/12 sm:w-12/12 text-center lg:text-lg md-text-sm'> Fylo stores all your most important  files in one secure Location. Access them wherever you need, share and collaborate with friends family, and co-workers </p>
            <Button className='transition duration-300 ease hover:-translate-y-1 hover:scale-110 hover:bg-btn-hover mt-3 bg-main-color text-lg text-white text-center py-[10px] px-[15px] rounded-full w-[180px]' toggle={open}  onClick={handleOpen}> Get Started </Button>
        </Container>
      </div>

      {/* <img src={headerwwave} alt='' className='absolute w-full bottom-0 left-0'/> */}

      {open && <PopupLogin handleOpen={handleOpen} open={open}/> }
      

  </div>
}

export default Header


const AnimationHero = keyframes`
    0%{
      opacity: 0;
      transform: translateY(20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
`
const Container = styled.div`
  opacity: 0;
  animation: ${AnimationHero};
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards; 
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);   
  filter: ${(props) => props.blur ? 'blur(5px)' : 'blur(0)'} ;
`

const Button = styled.button`
  opacity: 0;
  animation: ${AnimationHero};
  animation-duration: 3s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards; 
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);   
  filter: ${(props) => props.blur ? 'blur(5px)' : 'blur(0)' } ;
`
const imganimation = keyframes`
    0%{
      transform: translateY(20px);
    }
    100%{
      transform: translateY(0);
    }
`
const ImageStyle = styled.img`

    animation: ${imganimation} 2s ease-in infinite alternate ;

`
  






const LoginAnimation = keyframes`

`
const LoginHide = keyframes`

`
