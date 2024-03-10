import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForms from './component/TextForms';
import About from './component/About';


// import LinearGradient from 'react-native-linear-gradient';
// import './styles.css';


function App() {
  const [mode,setMode] = useState('light')

  const toggleblueMode = () =>{
    if(mode === "light")
    {
      setMode('dark');
      document.body.style.backgroundColor =  'grey' ;
      ;
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const togglegreenMode = () =>{
    if(mode === "light")
    {
      setMode('dark');
      document.body.style.backgroundColor =  'green' ;
      ;
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  
  return (
    <>
    
        <Navbar title="textutils" mode={mode} toggleblueMode={toggleblueMode} togglegreenMode={togglegreenMode}/>
        <div className='container my-3'>
          <TextForms heading="Enter Details" mode={mode} />
          <About />
        </div>
    </>
  );
}

export default App;
