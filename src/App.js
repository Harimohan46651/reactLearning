import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'dark')
    {
       setMode('light')
       document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#052645';
    }
}
  return (
    <>
    <Navbar title= "TextUtil" about="AboutTextUtils" mode= {mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <Textform heading="Enter your text here" mode= {mode}/>
    </div>
    {/* <About/> */}
    
    </>  
  );
}

export default App;
