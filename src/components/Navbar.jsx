import React, { useContext, useEffect ,useState } from 'react'
import { NavLink } from 'react-router-dom';
import styledComponents from 'styled-components';
import styled from 'styled-components';
import Logo from '../accets/logo.svg'
import { navbar } from './model'
function Navbar() {
    
    
    const [open , setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }
    
    // const handleOnClick = (index) => {
    //     handleActive(index)
    //     setOpen(false)
    // }

    
  return <Container className='navbar bg-main-color dark:bg-main-color shadow-2xl shadow-[#21293C]/50 fixed top-0 left-0 z-50 w-full md:px-10 px-4 py-6 md:flex md:flex-2 md:items-center md:justify-between  flex items-center justify-between block'>
        <div className='w-4/12'>
            <NavLink to='/Fylo'>
                <img src={Logo} alt=''className='ml-6 md:w-[140px] w-[90px]'/>
            </NavLink>
        </div>

        <div className='md:hidden blcok mr-5 text-white text-2xl z-50' onClick={handleOpen}>
            <i className={open===false ?'fa fa-align-right cursor-pointer' : 'fa fa-close cursor-pointer' } aria-hidden="true"></i>
        </div>
            <Ul showNav={open} className='text-white md:flex md:justify-evenly md:items-center md:flex-row md:bg-transparent md:relative md:w-6/12 md:top-0 md:p-0 p-5 block  fixed left-0 top-[96px] z-20 h-full  w-[300px]'>
                <NavLink className='md:min-w-fit min-w-[40px] px-[10px]' to='/'> 
                    <Li onClick={handleOpen}>
                        Fyle
                    </Li>
                </NavLink>
                <NavLink className='md:min-w-fit min-w-[40px] px-[10px]' to='about'>
                    <Li onClick={handleOpen}>
                        About 
                    </Li>
                </NavLink>
                <NavLink className='md:min-w-fit min-w-[40px] px-[10px]' to='OurTeam'>
                    <Li onClick={handleOpen}>
                        Team 
                    </Li>
                </NavLink>
                <NavLink className='md:min-w-fit min-w-[40px] px-[10px]' to='signUp'>
                    <Li onClick={handleOpen}>
                        Sign Up 
                    </Li>
                </NavLink>
                <NavLink className='md:min-w-fit min-w-[40px] px-[10px]' to='login'>
                    <Li onClick={handleOpen}>
                        Sign In 
                    </Li>
                </NavLink>
            </Ul>
  </Container>    
}

export default Navbar

const Container = styled.div`
    height : 60px;
`
const Ul = styled.ul`
    position: relative;
    width: 50%;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    background-color: transparent;
    padding : 0;
    transition: 0.4s ease;
    @media (max-width : 768px){
      padding : 15px;
      position: fixed;
      display : block;
      top: 60px;
      z-index: 999;
      height: 100%;
      width : 300px;
      background-color: #1C2230;
        transform : ${(props)=> props.showNav ? "translateX(0)" : "translateX(-400px)" }
    }
    @media (min-width : 768px){
        a.active{
            position:  relative;
            &:after{
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #1e39a1;
            }
        }
    }
`
const Li = styled.li`
    width : 100%;
    margin-bottom : 10px;
    position : relative;
    margin-bottom : 5px;
    transition : 0.4 ease;
    @media (max-width : 768px){
        width : 100%;
        margin-top : 0;
        padding : 15px ;
        &:hover{
            color : #fff
        }
        &:after {
            position : absolute;
            content: "";
            top : 0;
            left : 0;
            width : ${(props)=> props.activeLink ? "100%" : "0"};
            height : 100%;
            background : #4ba4ae;
            z-index : -1;
            transition : 0.4s ease;
        }
        &:hover&:after{
            width : 100%;
            color : #fff;
        }
    }
`
const NavBar = styledComponents.nav`
    

`