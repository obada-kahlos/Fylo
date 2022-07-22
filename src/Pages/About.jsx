import React from 'react'
import styled from 'styled-components'
import header from '../accets/header.png'
function About() {
  return <div className='py-20 bg-bg-light-color xl:flex xl:justify-between xl:items-center dark:bg-bg-dark-box-color md:px-20 px-4 relative'>

      <div className=''> 
            <H2 className='text-text-light-color dark:text-text-dark-color pb-[4px] md:text-[40px] text-[18px]'> What does Fylo offer? </H2>
            <p className='text-text-light-color dark:text-text-dark-color mb-[10px] md:text-[22px] text-[14]'> The user can store files of all kinds and share them easily with other users </p>
            <H2 className='text-text-light-color dark:text-text-dark-color pb-[4px] md:text-[26px] text-[18]'> What does Fylo provide? </H2>
            <ul className='list-disc ml-[15px]'>
              <li className='text-text-light-color dark:text-slate-300 md:text-[16px] text-[13px] mb-[10px] mt-[10px]'> Ease of use, Using Filo is easy; Its buttons and options are clearly and directly visible through it. </li>
              <li className='text-text-light-color dark:text-slate-300 md:text-[16px] text-[13px] mb-[10px] mt-[10px]'> Support many file formats, Fylo supports many different file formats, regardless of their extension. </li>
              <li className='text-text-light-color dark:text-slate-300 md:text-[16px] text-[13px] mb-[10px] mt-[10px]'> Large storage capacity, Fylo provides its users with a free large storage capacity of 15 GB </li>
              <li className='text-text-light-color dark:text-slate-300 md:text-[16px] text-[13px] mb-[10px] mt-[10px]'> Searchability, You can easily search for files on Fylo through many options </li>
              <li className='text-text-light-color dark:text-slate-300 md:text-[16px] text-[13px] mb-[10px] mt-[10px]'> Download files, user can download other users' files </li>
            </ul>
      </div>

      <div>
          <img src={header} alt=''/>
      </div>

  </div>
}

export default About

const H2 = styled.h2`
  position : relative;
  width: fit-content;
  margin-bottom: 10px;
  &:after{
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    width: 80%;
    height: 3px;
    background-color: #4ba4ae;
  }
`