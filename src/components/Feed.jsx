import React, { useContext } from 'react'
import About from './About'
import Client from './Client'
import Footer from './Footer'
import Header from './Header'
import Join from './Join'
import Navbar from './Navbar'
import Services from './Services'
import Team from './Team'

function Feed() {


  return <div>
        <Header />
        <Services />
        <About />
        <Client />
        <Join />
  </div>
}

export default Feed