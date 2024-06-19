import React from 'react'
import '../component/style/bookapp.css'
function bookapp() {
  return (
    <div className='bookapp'>
        <h3>Book Appointment <span>Online</span> </h3>
        <form>
       <div> <label> <span style={{fontSize:"1.5rem",color:"red"}}>*</span>Patient Full Name:</label>
        <br/>
    <input  /></div>
    <div>
    <label> <span style={{fontSize:"1.5rem",color:"red"}}>*</span>Patient Phone Number:</label>
        <br/>
    <input  />
    
    </div>
    <div>
    <label> <span style={{fontSize:"1.5rem",color:"red"}}>*</span>Patient Gender:</label>
      <br/>
      <select >
    <optgroup>
        <option>male</option>
        <option>female</option>
    </optgroup>

      </select>
    </div>
    <div>
    <label> <span style={{fontSize:"1.5rem",color:"red"}}>*</span>Preferred Mode:</label>
      <br/>
      <select >
    <optgroup>
        <option>voice call</option>
        <option>video call</option>
    </optgroup> 

      </select>
    </div>
        </form>
        <button>confirm appointment</button>
    </div>
  )
}

export default bookapp