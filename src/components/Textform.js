import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const handleDownClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    
    const handleCapitalClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);;
        setText(newText);
        props.showAlert("Converted to Capitalise!", "success")
    }
    
    const handleCopyClick = ()=> {
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert("Copied to Clipboard!", "success")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed!", "success")
    }
    
    const handleClearClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }


    const [text, setText] = useState("Enter Text Here")

  return (
    <>
    <div className="container my-3" style={{ color: props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitalized Case</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy </button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space </button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-4" style={{ color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
</>
  )
}
