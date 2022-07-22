import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
function SignUp() {
  const [values , setValues ] = useState({
    username : '',
    email : '',
    password : '',
    confirmPassword : '',
  });

  const InputsRegester = [
    {
        id: 1,
        name : 'username',
        type : 'text',
        placeholder : 'Username',
        label : 'Username',
        errorMssage : 'User name should be 6-16 characters and Should not incloude any special character',
        pattern : `^[A-Za-z0-9]{6,16}`,
        icon : <PersonIcon sx={{ color : '#2f8b95' , fontSize : '25px' }}/>, 
        required : false,
    },
    {
        id: 2,
        name : 'email',
        type : 'email',
        placeholder : 'Email',
        label : 'Email',
        errorMssage : 'It should be a valid email address!',
        icon : <ForwardToInboxIcon  sx={{ color : '#2f8b95' }}/>,
        required : true,
    },
    {
        id: 3,
        name : 'password',
        type : 'password',
        placeholder : 'Password',
        label : 'Password',
        errorMssage : 'Password sholud be 8-16 characters and include at least 1 letter, 1 number',
        pattern : `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
        icon : <HttpsIcon sx={{ color : '#2f8b95'  }}/>, 
        required : false,
    },
    {
        id: 4,
        name : 'confirmPassword',
        type : 'password',
        placeholder : 'confirmPassword',
        label : 'confirm Password',
        errorMssage : "Password dont't match!",
        pattern : values.password,
        icon : <HttpsIcon sx={{ color : '#2f8b95' }}/>, 
        required : false,
    },
]


 

  const [activeButtom , setActiveButtom] = useState(false)

  useEffect(() => {

    if(values['email'] && values['username'] && values['password'].length >= 8 && values['confirmPassword'].length >= 8 && (values['password'].value === values['confirmPassword'].value) ){
      setActiveButtom(true)
    }else{
      setActiveButtom(false)
    }

  }, [values['email'],values['password'],values['username'],values['confirmPassword']])
  
  
  const handleSummit = (e) =>{
    e.preventDefault();
  } 
  const handleChange = (e) =>{
    setValues({...values , [e.target.name]: e.target.value})
  }



  return <div className='md:py-20 py-5 bg-bg-light-color dark:bg-bg-dark-box-color md:px-20 px-2 relative font-sans  '>
  
  <div className='lg:w-[40%] md:mx-auto  mx-4 my-[100px] w-[90%] p-[30px] bg-[white] dark:bg-bg-dark-box rounded-[10px] shadow-2xl'>

    <h1 className='text-text-light-color dark:text-text-dark-color md:text-[28px] text-[20px] mb-[20px] font-[bold]'> Log In To Fylo. </h1>
    <p className='text-text-light-color dark:text-slate-200 md:text-[22px] text-[18px] my-[15px] '> Fylo is the place where you can store your files and to return to them at any time </p>

    <form action="" onSubmit={handleSummit} className='w-full'>

      {InputsRegester.map((item,key)=>(
        <div>
          <div className='flex items-center'>
            <span className=''> {item.icon} </span>
            <label key={item.id} for={item.id} className='ml-[10px] cursor-pointer text-text-light-color dark:text-text-dark-color  text-[16px]'> {item.label} </label>
          </div>
          <div className='relative'>
            <input onChange={handleChange}
              placeholder={item.placeholder}
              name={item.name}
              id={item.id} type={item.type}
              required={item.required}
              pattern={item.pattern}
              className='w-full mb-[10px] py-[8px] mt-[15px] px-[10px] text-[#333] border-[1px] border-[#111] dark:border-0 rounded-[6px]' />
              {/* <P className=''> {item.icon} </P>  */}
              <span className='error md:text-[16px] text-[14px]'> {item.errorMssage} </span>
          </div>
        </div>
      ))}




      <div className='flex justify-between items-center my-[12px] text-[white]'>
          <p className='text-[14px] cursor-pointer text-text-light-color dark:text-text-dark-color'> have an account! <Link to='/login'> <span className='text-[#2f8b95] ml-[20px] cursor-pointer'> LogIn </span> </Link> </p>
      </div>

      <Button active={activeButtom} className='text-white px-4 py-2 rounded-[5px] cursor-pointer w-[40%]  mt-[10px]'> Login </Button>



    </form>
    


  </div>
  
 
</div>
}

export default SignUp


const Button = styled.button`
  background-color: ${(props) => props.active ? '#2f8b95'  : 'gray'};
  transition: 1s;
  cursor: ${(props) => props.active ? 'pointer'  : 'no-drop'} ;
  pointer-events: ${(props) => props.active ? 'auto'  : 'none'} ;
  &:hover{
      background-color: ${(props) => props.active ? '#4ba4ae'  : ''} ;
      box-shadow: ${(props) => props.active ? ' 0 10px 20px rgba(255,255,255,0.10)'  : ''} ;
      transform: ${(props) => props.active ? 'translateY(-3px)'  : 'translateY(0)'} ;
      animation-timing-function: ${(props) => props.active ? 'cubic-bezier(0.2, 0.8, 0.2, 1)'  : ''};
  }

`
const P = styled.p`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
`