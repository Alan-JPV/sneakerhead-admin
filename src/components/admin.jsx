import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Adm() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = (isHovered) => ({
    width: '200px', // Adjusted width
    height: '40px', // Adjusted height
    marginTop: '50px',
    marginBottom: '15px',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: isHovered ? 'darkblue' : 'transparent', // Color change on hover
    color: isHovered ? 'white' : 'black', // Text color change on hover
    transitionDuration: '0.4s',
    cursor: 'pointer',
    fontSize : '18px',
    fontFamily: "Sans-Serif"
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(133, 191, 220)',
      height: '100vh',
      width: '250px',
      padding: '20px',
      boxSizing: 'border-box',
      position:'fixed',
      borderRadius: '20px',
      border: '1px solid #000',
      background: '#75A9CF',
      backdropFilter: 'blur(20px)',
      display:'flex',
      justifyContent: 'space-between',
      fontSize: '30px',
      color:'black',
      padding: '10px',
      position:'fixed',
      top: '0',
      left: '0',
      width: '15%',
      zIndex: '1000',
    }}>
      <Link to='/'>
      <button
        style={buttonStyle(hoveredButton === 'dashboard')}
        onMouseEnter={() => setHoveredButton('dashboard')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        
        Dashboard

      </button>
      </Link>
      <Link to='/pll'>
      <button
        style={buttonStyle(hoveredButton === 'product')}
        onMouseEnter={() => setHoveredButton('product')}
        onMouseLeave={() => setHoveredButton(null)}
      >
      Product
      </button>
      </Link>
      <Link to ='/order'>
      <button
        style={buttonStyle(hoveredButton === 'purchases')}
        onMouseEnter={() => setHoveredButton('purchases')}
        onMouseLeave={() => setHoveredButton(null)}
      >
      orders
      </button>
      </Link>
      <button
        style={buttonStyle(hoveredButton === 'reviews')}
        onMouseEnter={() => setHoveredButton('reviews')}
        onMouseLeave={() => setHoveredButton(null)}
      >
      Reviews
      </button>
    </div>
  );
}

export default Adm;
