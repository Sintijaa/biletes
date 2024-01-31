import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/home.css';


function Home() {
  return (
     <div className='header'>
      <a href="#default" class="logo">CompanyLogo</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>    
  );
};

export default Home
