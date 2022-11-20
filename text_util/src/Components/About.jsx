import React from 'react'
import { useState } from 'react'

export default function About() {
    const [BtnText, setBtnText] = useState("Enable Dark Mode")
    const [mystyle, setmystyle] = useState({
        color:"black",
        backgroundColor:"white",
        border:"2px solid black"
    })
    let ToggleBtn=()=>{
        if(mystyle.color==="white"){
            setmystyle({
                color:"black",
                backgroundColor:"white",
                border:"2px solid black"
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setmystyle({
                color:"white",
                backgroundColor:"black",
                border:"2px solid white"
            })
            setBtnText("Enable Light Mode");
        }
    }
  return (
    <div className='my-5 container'style={mystyle}>
        <h1>About Us </h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About This Website
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This is just a fun with text where you can play with text convert it into various different text format and get some text summary
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Different Functionality
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        UPPERCASE-It converts the input text into uppercase.<br/>
        LOWERCASE-It converts the input into lowercase.<br/>
        CLEARCASE-It clears the text.<br/>
        ALTERNATIVE TEXT-It converts the input into alternative text<br/>

      </div>
    </div>
  </div>
</div>
<button className='my-3 btn btn-outline-primary'onClick={ToggleBtn}>{BtnText}</button>
    </div>
  )
}
