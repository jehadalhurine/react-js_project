import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import Home from './page/home';
import Appointment from './appointment';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='Health-Plus'>
        <Routes >
          <Route path='/' element={<Home/>} />
         <Route path='/appointment' element={<Appointment/>} />

        </Routes>
      </BrowserRouter>

    </div>
     
     )
}

export default App;
