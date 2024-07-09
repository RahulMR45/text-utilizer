import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import About from './components/About';
//import { useState } from 'react';

function App() {
  /*const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnText, setBtnText] = useState("Dark Mode");

  const handleDarkMode = () => {
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: '#add8e6cc'
      });
      setBtnText("Light Mode");
    } else {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Dark Mode");
    }
  }*/

  return (
    <>
      <div className="App" >
        <header>
          <Navbar />
        </header>
        <Home />
        <div >
          <TextForm  />
        </div>
        <div>
          <About id="about" />
        </div>
        <footer id="contact">
          <div>
            <h3>Developed by Rahul</h3>
            <h3>Contact:<br /><strong>codekaliber@gmail.com</strong></h3>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
