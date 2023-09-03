import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    <Navbar title= "TextUtil" about="AboutTextUtils"/>
    <div className='container my-3'>
    <Textform heading="Enter your text here"/>
    </div>
    </>  
  );
}

export default App;
