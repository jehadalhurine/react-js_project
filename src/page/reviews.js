import React, { useEffect, useState } from 'react'
import './component/style/reviews.css'
function Reviews() {
    const [count,setcount]=useState(0);
    const [data,adddata]=useState([]);
   
    const increase=(e)=>{
        setcount((prevCount) => (prevCount + 1) % data.length);


    }
    const decrease=(e)=>{

        setcount((prevCount) => (prevCount - 1 + data.length) % data.length);


    }
    
    useEffect(()=>{
        const initialData = [
            "Health Plus transformed my healthcare experience! The online consultations were so convenient, and the doctors were knowledgeable and caring.",
            "I found the perfect specialist for my condition through Health Plus. The personalized treatment plan made all the difference. Thank you for prioritizing my health!",
            "Booking appointments was a breeze, and the service exceeded my expectations. The doctors truly listen and provide effective solutions. 5 stars!",
            "Health Plus is a game-changer! The emergency care saved me during a critical situation. Grateful for their quick and efficient support."
          ];
    adddata(initialData);

    },[])
    return (
    <div className='reviews'>
    <p>More over <span>1500+ Customers</span></p>
    <h2>Don't believe us, Check clients word</h2>
    { 
        data.map((item, index) => (
            index === count && (
              <p key={index} style={{width:"100%",fontSize:"22px"}}>{item}</p>
            )
          ))
    
    
    }
    <div className='oneone'>
       
        <button onClick={increase}><i class="bi bi-arrow-left"></i></button>
        <button onClick={decrease}><i class="bi bi-arrow-right"></i></button>
        
       

    </div>
    </div>
  )
}

export default Reviews