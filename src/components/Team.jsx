import React from 'react'
import { ourTeam } from './model'
import quotes from '../accets/bg-quotes.png'
import styledComponents from 'styled-components'
function Team() {
  return <div className='team py-20 bg-bg-light-color dark:bg-bg-dark-box-color md:px-20 px-4  relative' id='Team'>

        <h1 className='text-text-light-color dark:text-text-dark-color  md:text-[40px] text-[28px] font-bold text-center mt-20 mb-20'> Meet our team </h1>

        <div className='our-team md:w-10/12 w-full mx-auto mb-10 grid lg:grid-cols-2 xl:grid-cols-3 flex items-center justify-center gap-6'>
            <Image src={quotes} className='absolute md:top-[23%] top-[15%] md:left-38 left:10 ' alt="" />
            {ourTeam.map((item,key)=>(
                <Container className='relative transition duration-300 dark:hover:bg-[#2a344c] hover:-translate-y-2 rounded-xl cursor-pointer bg-bg-light-box dark:bg-bg-dark-box text-white p-10 shadow-2xl shadow-lg dark:shadow-[#21293C]/50'>
                    <p className='mb-8 lg:text-lg text-sm text-slate-800 dark:text-white'>{item.note}</p>
                    <div className='mt-4 flex items-center gap-4'>
                        <img className='rounded-full w-14' src={item.src} alt="" />
                        <div>
                            <h6 className='text-slate-300'> {item.name} </h6>
                            <span className='text-slate-400'> {item.job} </span>
                        </div>
                    </div>
                </Container>
            ))}

        </div>

  </div>
}

export default Team

const Image = styledComponents.img`
    object-fit: cover;
    object-position: 20% 10%;
`
const Container = styledComponents.div`
    position : relative;
    &:after{
        position : absolute;
        content: "";
        top: 0;
        left : 50%;
        width : 0%;
        height : 3px;
        background : #4ba4ae;
        transition : 0.5s ease;
    }
    &:hover&:after{
        width : 45%;
    }
    &:before{
        position : absolute;
        content: "";
        top: 0;
        right : 50%;
        width : 0%;
        height : 3px;
        background : #4ba4ae;
        transition : 0.5s ease;
    }
    &:hover&:before{
        width : 45%;
    }
`

