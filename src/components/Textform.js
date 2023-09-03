import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("enter the text")
    const handleUpClick = ()=>{
        let convertedText = text.toUpperCase()
        setText(convertedText) 
    }
    const handleLoClick = ()=>{
        let convertedText = text.toLowerCase()
        setText(convertedText) 
    }
    const clearText = ()=>{
        let convertedText = ''
        setText(convertedText) 
    }
    const copyText = ()=>{
        let copiedText = document.getElementById("myBox")
        copiedText.select()
        navigator.clipboard.writeText(copiedText.value) 
    }
    const handleOnChange = (event)=>{
        console.log("on change clicked")
        setText(event.target.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Change to Uppercase</button>
            <button onClick={handleLoClick} className="btn btn-primary mx-2">Change to lowercase</button>
            <button onClick={clearText} className="btn btn-primary mx-2">Clear Text</button>
            <button onClick={copyText} className="btn btn-primary mx-2">Copy Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">Handle extra spaces</button>

        </div>
        <div className='container my-3'>
        <h1>Your Text summary</h1>
        <p>you have entered {text.split(' ').length} word and {text.length} characters </p>
        <p> estimated time to read: {0.008*text.split(' ').length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  )
}
