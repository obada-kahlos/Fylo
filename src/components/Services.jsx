import React from 'react'
import {ourServisec} from './model'
function Services() {
  return <div className='bg-bg-light-color dark:bg-bg-dark-box-color py-10'>
     <h1 className=' text-[#333] dark:text-white dark:text-white md:text-[40px] text-[28px] font-bold text-center mb-6'>  Our Services  </h1>
     <div className='mt-10  lg:w-8/12 sm:w-11/12 mx-auto grid md:grid-cols-2' id='Features'>
          {ourServisec.map((item,key)=>(
               <div key={key} className='flex items-center justify-center p-5 mt-5 flex-col text-center'>
                    <img src={item.src} alt="" className='mb-4 w-28'/>
                    <h1 className=' text-[#333] dark:text-white text-xl font-bold mb-2'> {item.heading} </h1>
                    <p className=' text-[#333] dark:text-white text-lg mt-5'> {item.descption} </p>
               </div>
          ))} 
     </div>
  </div> 
}
export default Services