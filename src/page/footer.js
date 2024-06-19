import React from 'react'
import '../../src/page/component/style/footer.css'
function footer() {
  return (
    <div className='footer'>
    <div className='top'>
        <div className='top-left'>
            <h1>Health +</h1>
            <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
         <p style={{fontWeight:"bold",marginTop:"20px"}}>Stay Update to our Newsletter</p>
         <input type='email' placeholder='Enter Your Email Address' />
         <br/>
         <button>Subsicribe</button>
        </div>
        <div className='top-right'>
            <div className='first'>
                <div className='seconed'>
                <p style={{color:"white",fontSize:"35px"}}>Services</p>
                <p>Emergency Care</p>
                <p>Heart Disease</p>
                <p>Dental Care</p>
                <p>Prescription</p>
                <p>Prescription</p>



                </div>
                <div className='seconed'>
                <p style={{color:"white",fontSize:"35px"}}>Legal</p>
                <p>General Info</p>
                <p>Privacy Policy</p>
                <p>Terms of Services
                </p>
                <p>Consultations</p>
                <p>How it Works</p>



                </div>
               
            </div>
            
            
        </div>

    </div>
    <div className='bottom'></div>
    </div>
  )
}

export default footer