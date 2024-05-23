import React, { useContext } from 'react';
import ThemeBtn from './ThemeBtn3';

const Bt3: React.FC = () => {
  const theme = useContext(ThemeBtn);

  return (
    <button
      style={{
        backgroundColor: theme,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Click me
    </button>
  );
};

export default Bt3;
