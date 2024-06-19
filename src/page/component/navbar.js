import React from 'react'
import '../component/style/navbar.css';
function navbar() {
  return (
    <div className='navbar'>
    <div className='leftside'> 
    <a href="#" className='firstancher'>Health <span>+</span></a>
    </div>
    <div className='middleside'>
        <a href='/'>Home</a>
        <a href='#service'>service</a>
        <a href='#about'>about</a>
        <a href='#doctors'>doctors</a>

    </div>
    <div className='rigthside'>
    <button>sign in</button>
    </div>
    </div>
  )
}

export default navbar