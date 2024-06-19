import React from 'react'
import '../component/style/content.css'
import Doctor from "../../assets/doctor-picture.png";
import { Navigate, useNavigate } from 'react-router-dom';
function Content1() {
    const x=useNavigate();
    const changepage=(e)=>{
        
        x("/appointment");

    }
  return (
    <div className='content'>
        <div className='textcontent'>
            <h3>❤️ Health comes first</h3>
            <h1>Find your Doctor and make an Appointments
            </h1>
            <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
            <button onClick={changepage}>Book Appointment Online</button>
            <div className='numberscontent'>
                <div className='contentnumbercontent'>
                    <h5>145k+</h5>
                    <p>Receive Patients</p>
                </div>
                <div className='contentnumbercontent'>
                    <h5>50+</h5>
                    <p>Expert Doctors</p>
                </div>
                <div className='contentnumbercontent'>
                    <h5>10+</h5>
                    <p>Years of Experience</p>
                </div>
            </div>
        </div>
        <div className='contentpng'>
        <img class="hero-image1" src={Doctor} alt="Doctor"/>
        </div>
    </div>
  )
}

export default Content1