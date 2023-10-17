import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Form from './components/Form';
// import './components/Form.css';



const images = [
  'https://thumbs.dreamstime.com/z/top-view-working-desk-computer-laptop-smart-phone-coffee-mug-glasses-notebooks-white-background-copyspace-top-view-157685274.jpg',
  'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1612120898251-e7ccaa0b67cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
];

const textContent = [
  {
    paragraph1: 'WELCOME TO',
    paragraph2: 'IT WORLD',
  },
  {
    paragraph1: 'second',
    paragraph2: 'second',
  },
  {
    paragraph1: 'third',
    paragraph2: 'third',
  },
  {
    paragraph1: 'fourth',
    paragraph2: 'fourth',
  }
];

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);


  return(
    <div className="App">
    
        <Router> 
          <Header />
          <Routes>
            <Route path="/Form" element={<Form />} />
          </Routes>
        </Router>
    
      {/* First section with a black background */}
      <div className="slideshow-container"> 
      <div className="black-section">
        <div className='frame'>
          <h1 className="paragraph1">{textContent[currentIndex].paragraph1}</h1>
          <h1 className="paragraph2">{textContent[currentIndex].paragraph2}</h1>
          <p className="paragraph3" >{textContent[currentIndex].paragraph3}
            <span style={{ color: 'Green' }}>Web Design</span>,{' '}
            <span style={{ color: '#FF6600' }}>Development</span> &{' '}
            <span style={{ color: 'blue' }}>Branding</span>
          </p>
          <button className="center-button">GET STARTED</button>
          <h1 className='mouse'>🖱️</h1>
        </div>
      </div>
      <div className="background" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      </div>

      {/* Second section with a black background */}
      <div className="white-section">
        <div className="image-with-text">
          <div className="centered-image-container">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/842/229/220/apple-computer-cup-desk-wallpaper-thumb.jpg"
              alt=""
              className="centered-image"
            />
          </div>
          <div className="text-container">
            <h1>What we do?</h1>
            <h3>About Us</h3>
            <p>Additional text or description goes here.</p>
            <button className="center-button"> GET STARTED</button>
          </div>
        </div>
      </div>

      {/* Third section with a gray background */}
      <div className="gray-section">
        <div className="section-header">
          <h1>Our Services</h1>
          <p>write some text here</p>
        </div>
        <div className="grid-container">
          <div className="grid-item">
              <img src="https://w7.pngwing.com/pngs/635/128/png-transparent-assorted-brush-and-pencils-web-development-graphic-designer-web-design-web-design-pencil-user-interface-design-logo.png" alt="" />
              <h4>Web Desgin</h4>
            </div>
            <div className="grid-item">
              <img src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              <h4>Web Development</h4>
            </div>
            <div className="grid-item">
              <img src="data:image/png;base64,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" alt="" />
              <h4>Android App</h4>
            </div>
            <div className="grid-item">
              <img src="data:image/png;base64,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" alt="" />
              <h4>Branding</h4>
            </div>
            <div className="grid-item">
              <img src="https://cdn3.vectorstock.com/i/1000x1000/16/02/search-engine-optimization-flat-icons-vector-11341602.jpg" alt="" />
              <h4>SEO Optimization</h4>
            </div>
            <div className="grid-item">
              <img src="https://cdn-icons-png.flaticon.com/512/8764/8764182.png" alt="" />
              <h4>Ecommerce</h4>
            </div>
          </div>
      </div>
    </div>
  );
}
export default App;
