import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("")
    const handleUpClick = ()=>{
        let convertedText = text.toUpperCase()
        setText(convertedText) 
        props.showAlert("Success","changed to upperCase")
    }
    const handleLoClick = ()=>{
        let convertedText = text.toLowerCase()
        setText(convertedText) 
        props.showAlert("Success","changed to lowerCase")
    }
    const clearText = ()=>{
        let convertedText = ''
        setText(convertedText) 
        props.showAlert("Success","cleared text")
    }
    const copyText = ()=>{

        navigator.clipboard.writeText(text) 
        document.getSelection().removeAllRanges()
        props.showAlert("Success","copied to clipboard")
    }
    const handleOnChange = (event)=>{
        console.log("on change clicked")
        setText(event.target.value)
        // props.showAlert("Success","changed")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Success","removed extra spaces")
    }
  return (
    <>
        <div className='container' style={{color:props.mode==='dark' ? 'white':'#052645'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color:props.mode==='dark'?'white':'#052645'}} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Change to Uppercase</button>
            <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Change to lowercase</button>
            <button disabled={text.length===0} onClick={clearText} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button disabled={text.length===0} onClick={copyText} className="btn btn-primary mx-2 my-2">Copy Text</button>
            <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Handle extra spaces</button>

        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#052645'}}>
        <h1>Your Text summary</h1>
        <p>you have entered {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters </p>
        <p> estimated time to read: {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:'Nothing to preview'}</p>
        </div>
    </>
  )
}
