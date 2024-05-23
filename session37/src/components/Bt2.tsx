import { useContext } from 'react';
import Bt1 from './Bt1';

const Bt2 = () => {
  const theme = useContext(Bt1);

  return (
    <div style={{ color: theme }}>
      <p>The current theme color is: {theme}</p>
    </div>
  );
};

export default Bt2;
