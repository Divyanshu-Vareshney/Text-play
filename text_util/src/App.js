
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from "react";
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
    <div>
    <Navbar title="FunWithText" mode={Mode} toggleMode={toggleMode} Print={modee}/>
    <Alert alert={alert}/>
    <TextArea heading="Enter The Text to play" mode={Mode} sendAlert={sendAlert}/>
    {/* <About mode={Mode} /> */}
    </div>
   
  );
}

export default App;
