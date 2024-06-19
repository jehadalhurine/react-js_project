import React from 'react'
import Navbar from './component/navbar'
import Content1 from './component/content1'
import Choose from './component/choose'
import About from './component/about'
import Doctor from './component/doctor'
import Reviews from './reviews'
import Footer from './footer'
function home() {
  return (
    <div className='homepage'>
    <Navbar/>
    <Content1/>
    <Choose/>
    <About/>
    <Doctor/>
    <Reviews/>
    <Footer/>
    </div>
  )
}

export default home