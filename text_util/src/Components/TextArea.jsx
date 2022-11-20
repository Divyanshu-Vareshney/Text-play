import React,{useState} from 'react'

export default function TextArea(props) {
    const[Text,setText]=useState("");
    const handleUpperCase=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
        props.sendAlert("Converted to UpperCase","success");
    }
    const handleLowerCase=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
        props.sendAlert("Converted to lowerCase","success");
    }
    const handleOnClick=(e)=>{
        setText(e.target.value)
    }
    const handleClearClick=(e)=>{
        setText("");
        props.sendAlert("TextArea Cleared","success");
    }
    const copyText=()=>{
        var text=document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.sendAlert("Text Copied successfully","success");
    }
    const extraSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.sendAlert("Extra Space Removed","success");
    }
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <h1 className={`my-2 text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1>
  <textarea className={`form-control bg-${props.mode==="dark"?"dark":"light"} text-${props.mode==="light"?"dark":"light"}`} id="box" value={Text} onChange={handleOnClick} rows="8" placeholder='enter text'></textarea>
  <button type="button" className="btn btn-outline-primary my-3 mx-2 "
  onClick={handleUpperCase}
  >Convert To Uppercase</button>
  <button type="button" className="btn btn-outline-primary my-3 mx-2"
   onClick={handleLowerCase}
  >Convert To lowercase</button>
    <button type="button" className="btn btn-outline-primary my-3 mx-2"
   onClick={handleClearClick}
  >Clear Text</button>
    <button type="button" className="btn btn-outline-primary my-3 mx-2"
   onClick={copyText}
  >Copy Text</button>
    <button type="button" className="btn btn-outline-primary my-3 mx-2"
   onClick={extraSpace}
  >Remove Extra Space</button>

</div>
    </div>
    <div className='container'>
        <h2 className={` text-${props.mode==="light"?"dark":"light"}`}>Text Summary</h2>
        <p className={` text-${props.mode==="light"?"dark":"light"}`}>This Paragraph Contains {Text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {Text.length} Characters</p>
        <h2 className={` text-${props.mode==="light"?"dark":"light"}`}>preview</h2>
        <p className={` text-${props.mode==="light"?"dark":"light"}`}>{Text.length>0?Text:"Enter text here to preview"}</p>
    </div>
    </>
  )
}
