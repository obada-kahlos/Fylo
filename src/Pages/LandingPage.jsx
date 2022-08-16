import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styledComponents from 'styled-components';
import { Outlet } from 'react-router-dom';
import Feed from '../components/Feed';
function LandingPage() {


  return <div>
      <Outlet />
  </div>
}

export default LandingPage


const Container = styledComponents.div`
  position: fixed;
  bottom : 20px;
  right : 20px;
  width : 60px;
  height : 60px;
  background : #1C2230;
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius : 50%;
  color : #fff;
  cursor: pointer;
  z-index : 999;
  box-shadow: 0 5px 10px 0 rgb(75 164 174 / 40%), 0 8px 20px 0 rgb(75 164 174 / 60%);
`