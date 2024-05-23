import React, { useContext } from 'react';
import ThemeContext from './ThemeBtn4';

const Bt4: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Button must be used within a ThemeProvider');
  }

  const { color, toggleColor } = themeContext;

  return (
    <>
      <button
        onClick={toggleColor}
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Click me
      </button>
      <p>Màu nền hiện tại là: {color}</p>
    </>
  );
};

export default Bt4;
