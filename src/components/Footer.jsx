import React from 'react'
import Logo from '../accets/logo.svg'
import location from '../accets/location.svg'
import email from '../accets/email.svg'
import phone from '../accets/phone.svg'
import {about , contact} from './model'
import styled from "styled-components";


function Footer() {
  return <div className='footer md:px-32 md:py-20  p-5 bg-main-color dark:bg-main-color'>
        <img src={Logo} alt="" className='md:w-[180px]  w-[90px] block mb-6'/>
        <div className='grid grid-cols-4 gap-4 mt-10'>

            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                  <img src={location} alt="" className='inline mr-2 mb-2'/>
                  <p className='inline text-slate-200 text-sm w-full'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur fuga hic quos laboriosam minus, distinctio accusamus optio aliquid beatae harum minima ab odio porro </p>
            </div>


            <div className='coniction lg:col-span-1 md:col-span-2 col-span-4 md:ml-10 ml-0 md:mt-0 mt-5'>
                <div className='mb-5'>
                    <img src={email} alt='' className='inline mr-5'/>
                    <span className='text-white md:ml-4 ml-0'> +963 0997-741-497 </span>
                </div>
                <div>
                    <img src={phone} alt='' className='inline mr-5'/>
                    <span className='text-white md:ml-4 ml-0'> example@gmail.com </span>
                </div>
            </div>


            <div className='lg:col-span-1 md:col-span-2 col-span-4 md:mt-0 mt-5'>
              <div className='grid grid-cols-2'>
                  <div className='col-span-1'>
                    <h1 className='text-white inline font-bold md:mb-0 mb-4 text-xl'> About Us </h1>
                    {about.map((item,key)=>
                      <ul key={key}>
                        <li className='text-slate-300 mb-2 md:mt-0 mt-4'> {item} </li>
                      </ul>
                    )}
                  </div>
                  <div className='col-span-1'>
                    <h1 className='text-white inline font-bold md:mb-0 mb-4 text-xl'> Contact Us </h1>
                    {contact.map((item,key)=>(
                      <ul key={key}>
                          <li className='text-slate-300 mb-2 md:mt-0 mt-4'> {item}</li>
                      </ul>
                    ))}
                  </div>
              </div>

            </div>

            <Container className='contactwhitme lg:col-span-1  md:col-span-2  col-span-4 md:mt-0 mt-5'>
                  <div>
                      <ul>
                        <li>
                          <i className='fa fa-whatsapp'></i>
                        </li>
                        <li>
                          <i className='fa fa-facebook'></i>
                        </li>
                        <li>
                          <i className='fa fa-instagram'></i>
                        </li>
                      </ul>
                  </div>
            </Container>


        </div>
  </div>
}

export default Footer


const Container=styled.div`
  li{
    display : inline;
    margin-right : 50px;
    color : #fff;
    width : 60px;
    font-size: 20px;
    height : 60px;
    // padding : 10px;
    border-radius: 50%;
    // cursor : pointer;
    // border : 1px solid #fff;
  }
`
