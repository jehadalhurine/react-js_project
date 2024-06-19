import React from 'react'
import '../component/style/add.css'
import Doctor2 from '../../../src/assets/doctor-book-appointment.png'
import { useNavigate } from 'react-router-dom'
function Choose() {
  const f=useNavigate();
  const add=(e)=>{
    f("/appointment");
  }
  return (
    <div className='choose'>
      <div className='imgsource'>
        <img  src={Doctor2}  alt='' />
      </div>
      <div className='contenttext'>
        <h3>Why Choose Health</h3>
        <h5>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
</h5>
      <div className='contentchoose'>
        <p><i class="bi bi-1-circle-fill"></i> Best Professional Doctors</p>
      </div>
      <div className='contentchoose'>
        <p><i class="bi bi-2-circle-fill"></i> Emergency Care</p>
      </div>
      <div className='contentchoose'>
        <p><i class="bi bi-3-circle-fill"></i> 24/7 Support Live Chat</p>
      </div>
      <div className='contentchoose'>
        <p><i class="bi bi-4-circle-fill"></i> Enrollment Easy and Quick </p>
        <button onClick={add} >Book Appointment Online</button>
     
      </div>

      </div>
    
    </div>
  )
}

export default Choose