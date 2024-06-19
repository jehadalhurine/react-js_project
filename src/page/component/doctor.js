import React from 'react'
import '../component/style/doctor.css'
import Doctor11 from '../../assets/profile-1.png'
import Doctor12 from '../../assets/profile-2.png'
import Doctor13 from '../../assets/profile-3.png'
import Doctor14 from '../../assets/profile-4.png'

function Doctor() {
  return (
    <div className='doctor' id='doctors'>
        <h3>Meet Our Doctors</h3>
        <p>Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.</p>
        <div className='picture'>
                <div className='page'>
                    <img src={Doctor11} alt=''  />
                    <h6>Dr. Kathryn Murphy</h6>
                    <h7>General Surgeons</h7>
                    <h8><i class="bi bi-star-fill"></i>4.9 (1800+ Reviews)</h8>
                </div>
                <div className='page'>
                    <img src={Doctor12} alt=''  />
                    <h6>Dr. Jacob Jones</h6>
                    <h7>Hematologists</h7>
                    <h8><i class="bi bi-star-fill"></i>4.8 (700+ Reviews)</h8>
                </div>
                <div className='page'>
                    <img src={Doctor13} alt=''  />
                    <h6>Dr. Jenny Wilson</h6>
                    <h7>Endocrinologists</h7>
                    <h8><i class="bi bi-star-fill"></i>4.7 (450+ Reviews)</h8>
                </div>
                <div className='page'>
                    <img src={Doctor14} alt=''  />
                    <h6>Dr. Albert Flores</h6>
                    <h7>Hematologists</h7>
                    <h8><i class="bi bi-star-fill"></i>4.8 (500+ Reviews)</h8>
                </div>

        </div>
    </div>
  )
}

export default Doctor