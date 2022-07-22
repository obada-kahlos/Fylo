import React from 'react'
import descrption from '../accets/descrption.png'
import iconarrow from '../accets/icon-arrow.svg'
import styled from "styled-components";
function About() {
  return <Container className='md:py-10 py-2 bg-bg-light-color md:px-16 px-3 dark:bg-bg-dark-box-color mx-auto lg:grid grid-cols-2 w-full gap-8 flex flex-col items-center justify-center'>

        <div className='col-span-1'>
            <img src={descrption} alt="" />
        </div>

        <div className='col-span-1 text-white md:mt-10 txet-left'>
            <h1 className='mb-2 text-3xl font-bold text-text-light-color dark:text-text-dark-color ' > Stay productive, </h1>
            <h1 className='mb-4 text-3xl font-bold text-text-light-color dark:text-text-dark-color '> wherever you are </h1>
            <p className='mb-6 text-text-light-color dark:text-text-dark-color '> never let location ba an issue when accessing your filesm Fylo has you covered for all of your file storage need. </p>
            <p className='mb-6 text-text-light-color dark:text-text-dark-color '> Securely share files and folders with friends, family and colleagues for live collaboration, no email attachment required.  </p>
            <a className='transition duration-300 hover:text-btn-hover hover:border-btn-hover border-b-2 pb-2 text-text-light-color dark:text-text-dark-color ' href='/'> See how Fylo works <img className='' src={iconarrow} alt="" />  </a>
        </div>

  </Container>
}

export default About

const Container=styled.div`
    a img{
        display : inline;
        transition : 0.3s ease
    }
    a:hover img{
        transform : translateX(4px);
    }
`
