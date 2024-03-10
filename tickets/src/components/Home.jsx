import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/home.css';



function Home() {

  const navigateToLogin = () => {
    window.location.href = "/login"; 
  };
  const navigateToCalendar = () => {
    window.location.href = "/calendar"; 
  };
  const navigateToAbout = () => {
    window.location.href = "/about"; 
  };
  // const navigateToPievienot = () => {
  //   window.location.href = "/pievienot"; 
  // };
  
  return (
     <div className='linija'>
      <div class="header-right">
        <h1>TicektsBuy</h1>
        <button class="myButton" onClick={navigateToLogin}>Ieej portālā</button>
        <button class="myButton" onClick={navigateToCalendar}>Notikumu kalendārs</button>
        {/* <button class="myButton" onClick={navigateToPievienot}>Pievienot pasākumu</button> */}
        <button class="myButton" onClick={navigateToAbout}>About</button>

        {/* { <a href="#about">About</a> } */}
      </div>
    </div>    
  );
};

export default Home
 