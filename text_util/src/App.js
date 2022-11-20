
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Alert from './Components/Alert';

function App() {
  const [modee, setmodee] = useState("Enable")
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let sendAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  let toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      setmodee("Disable");
      document.body.style.backgroundColor="black"
      sendAlert("Dark mode enabled","success");
      document.title="Fun With Text-Dark Mode";
    }
    else{
      setMode("light");
      setmodee("Enable")
      document.body.style.backgroundColor="white";
      sendAlert("Light mode enabled","success");
      document.title="Fun With Text-Light Mode";
    }
  }
  return (
    <>
      <Router>
    <Navbar title="FunWithText" mode={Mode} toggleMode={toggleMode} Print={modee}/>
    <Alert alert={alert}/>
    <Routes>
          <Route path="/about" element={<About mode={Mode} />}/>
          <Route path="/" element={<TextArea heading="Enter The Text to play" mode={Mode} sendAlert={sendAlert}/>}/>
        </Routes>
    </Router>
    </>
   
  );
}

export default App;
