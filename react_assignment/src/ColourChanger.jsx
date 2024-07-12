import React, { useState } from 'react';

function ColourChange() {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', transition: 'background-color 0.5s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              cursor: 'pointer',
              margin: '0 5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColourChange;
