
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from "react";

function App() {
  const [DarkMode, setDarkMode] = useState("false")
  return (
    <div>
    <Navbar title="FunWithText" mode={DarkMode}/>
    
    <TextArea heading="Enter The Text to play"/>
    {/* <About/> */}
    </div>
   
  );
}

export default App;
