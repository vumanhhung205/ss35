import { useContext } from 'react';
import './App.css';
import Bt1 from './components/Bt1';
import Bt2 from './components/Bt2';
import Bt3 from './components/Bt3';
import Bt4 from './components/Bt4';
import ThemeBtn from './components/ThemeBtn3';
import { ThemeProvider } from './components/ThemeBtn4';

function App() {
  const theme = useContext(Bt1);
  return (
    <>
    <h1>bt1</h1>
      <p>theme hiện tại là {theme}</p>

      <Bt1.Provider value="blue">
      <div>
        <h1>Bt2</h1>
        <Bt2 />
      </div>
    </Bt1.Provider>
    <ThemeBtn.Provider value="blue">
        <div>
          <p>Giá trị khởi tạo là blue:</p>
          <Bt3 />
        </div>
      </ThemeBtn.Provider>

      <ThemeProvider>
      <div>
        <p>bt4</p>
        <Bt4 />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
