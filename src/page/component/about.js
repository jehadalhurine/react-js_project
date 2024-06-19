import React from 'react'
import '../component/style/about2.css'
import Doctor2 from '../../assets/doctor-group.png'
function about() {
  return (
    <div className='x' id='about'>
      <div className='imgsource'>
        <img  src={Doctor2}  alt='' />
      </div>
      <div className='contenttext'>
        <h3>About Us</h3>
        <h5>Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.

</h5>
      <div className='about1'>
        <p><i class="bi bi-arrow-down-circle-fill" style={{color:"red"}}></i> Choose a Specialist</p>
      </div>
      <div className='about1'>
        <p><i class="bi bi-arrow-down-circle-fill" style={{color:"red"}}></i> Make a Schedule</p>
      </div>
      <div className='about1'>
        <p><i class="bi bi-arrow-down-circle-fill" style={{color:"red"}}></i> Get Your Solutions</p>
      </div>
     

      </div>
    
    </div>
  
  )
}

export default about