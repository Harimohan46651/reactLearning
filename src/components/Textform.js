import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("enter the text")
    const handleUpClick = ()=>{
        console.log("on change clicked")
        let convertedText = text.toUpperCase()
        setText(convertedText) 
    }
    const handleOnChange = (event)=>{
        console.log("on change clicked")
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">Change to Uppercase</button>


    </div>
  )
}
