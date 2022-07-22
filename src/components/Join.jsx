import React from 'react'

function Join() {
  return <div className=' bg-bg-light-color dark:bg-bg-dark-box-color text-center'>
      <div className='md:w-6/12 w-full mx-auto bg-bg-light-color dark:bg-bg-dark p-10'>
        <h1 className='text-text-light-color dark:text-text-dark-color md:text-3xl text-xl mb-4'> Get early access today </h1>
        <p className=' md:text-lg text-sm text-text-light-color dark:text-text-dark-color'> It only takes a minute to sgin up amd our free starter tire is extremely generous, if you have any questions, our support team would be happy to help you </p>
        <div className='grid grid-cols-3 gap-2 mt-10'>
            <input className='md:col-span-2 col-span-3 md:py-[8px] py-2 md:pl-6 pl-3 rounded-full text-slate-400 md:text-lg text-sm border-2 ' type='email' placeholder='email@gmail.com' />
            <button className='transtion duration-300 hover:bg-btn-hover md:col-span-1 col-span-3 md:py-[5px] py-[8px] px-1 rounded-full text-white text-center md:text-[16px] text-[12px] bg-main-color'> Get Started For Free </button>
        </div>
      </div>
  </div>
}

export default Join