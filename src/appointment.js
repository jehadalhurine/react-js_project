import React from 'react'
import '../src/page/component/style/appointment.css'
import Bookapp from './page/component/bookapp'
import { Navigate,useNavigate } from 'react-router-dom'
function Appointment() {
  const z=useNavigate();
  const reverse=(e)=>{
    z("/");
  }
  return (
    <div className='appointment'>
       <div className='navbar'>
       <a href="#" className='firstancher' onClick={reverse}>Health <span>+</span></a>
       </div>
       <Bookapp/>
    </div>
  )
}

export default Appointment