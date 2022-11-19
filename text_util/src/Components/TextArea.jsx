import React,{useState} from 'react'

export default function TextArea(props) {
    const[Text,setText]=useState("");
    const handleUpperCase=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
    }
    const handleOnClick=(e)=>{
        setText(e.target.value)
    }
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <h1 className='my-2'>{props.heading}</h1>
  <textarea className="form-control" id="box" value={Text} onChange={handleOnClick} rows="8" placeholder='enter text'></textarea>
  <button type="button" className="btn btn-outline-primary my-3 mx-2 "
  onClick={handleUpperCase}
  >Convert To Uppercase</button>
  <button type="button" className="btn btn-outline-primary my-3 mx-2"
   onClick={handleLowerCase}
  >Convert To lowercase</button>
  <button type="button" className="btn btn-outline-primary my-3 mx-2">Convert To AlTeRnAtIvE tExT</button>
</div>
    </div>
    <div className='container'>
        <h2>Text Summary</h2>
        <p>This Paragraph Contains {Text.split(" ").length} Words and {Text.length} Characters</p>
    </div>
    </>
  )
}