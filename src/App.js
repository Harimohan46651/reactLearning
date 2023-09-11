import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Routes } from "react-router"
function App() {
  const[mode, setMode] = useState('light')
  const[alert,setAlert] = useState(null)
  const showAlert= (type,message)=>{
    setAlert({type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'dark')
    {
       setMode('light')
       document.body.style.backgroundColor='white'
       showAlert('success','light mode enabled')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('success','dark mode enabled')
    }
}
  return (
    <>
    <Router>
    <Navbar title= "TextUtil" about="AboutTextUtils" mode= {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}>
      
    </Route>
    <Route exact path="/" element = {<Textform heading="Enter your text here" mode= {mode} showAlert={showAlert}/>}>
      
    </Route>
   
  </Routes>
      
    </div>
    {/* <About/> */}
    </Router>
    </>  
  );
}

export default App;
