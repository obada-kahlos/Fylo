import React from 'react'
import { ourTeam , ourClint} from './model'
import Slider from './Slider'
import styledComponents from 'styled-components'
function Client() {
  return <div className='team py-20 md:px-20 px-4 relative bg-bg-light-color dark:bg-bg-dark-box-color' id='Team'>
  <h1 className='text-text-light-color dark:text-text-dark-color md:text-[40px] text-[28px] font-bold text-center mb-20'> What our client say </h1>
  <Slider 
      slidesToShow={1}
      infinite={true}
      dots={true}
      speed={1000}
      slidesToScroll={1}
      autoplay={false}
      arrows={false}
      fade={true}
  >

      {ourClint.map((item,key)=>(
          <div className=''key={key}>
              <div className='flex flex-col justify-center items-center md:w-8/12 w-full mx-auto text-center'>
                    <Image className='w-[70px] h-[70px] object-cover rounded-full mb-5 cursor-pointer' src={item.src} alt="" />
                  <h1 className='text-[#222] dark:text-text-dark-color md:text-[22px] text-[20] font-bold mb-3' > {item.name} </h1>
                  <p className='text-slate-800 dark:text-slate-200 md:text-[16px] text-[14px] mb-10'> {item.disc} </p>
              </div>
          </div>
      ))}

  </Slider>


</div>
}

export default Client


const Image = styledComponents.img`
    object-fit: cover;
    object-position: 20% 10%;
`