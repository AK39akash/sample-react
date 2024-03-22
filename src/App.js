import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [btntext, setBtntext] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtntext('Enable Light Mode')
      document.body.style.backgroundColor = '#0c1a36';
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      setBtntext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
  <>
  {/* <Router> */}
  <Navbar title= "TEXTUTIL2" mode={mode} btntext={btntext} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
      {/* <Routes> */}
        {/* <Route path="/" element={<Textform heading= "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/> */}
        {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      <Textform heading= "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
  </div>
    {/* </Router> */}
  </>
  );
}

export default App;
