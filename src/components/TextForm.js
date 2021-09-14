import React, {useState} from 'react'

export default function TextForm(props) {
    const handelOnChange=(event)=>{
        console.log('On change');
        setText(event.target.value)
    }
    const handelUpClick=()=>{
        console.log('UpperCase Clicked');
        let newvalue=text.toUpperCase();
        setText(newvalue);
        props.showAlert("Text Converted into UpperCase","success");

    }
    const handelLowClick=()=>{
        console.log('UpperCase Clicked');
        let newvalue=text.toLowerCase();
        setText(newvalue);
        props.showAlert("Text Converted into LowerCase","success");
        

    }
    const handelCopy=()=>{
        let text=document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy in Clipboard","success");

    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Clear","success");
        
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Remove","success");

        
    }
    const [text, setText] = useState('');

    return (
        <>
          <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white'}} value={text} id="exampleFormControlTextarea1" rows="8" onChange={handelOnChange}></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={handelUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handelLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handelCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text Summery</h1>
                <p>{text===""?"0":text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minites to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
          </div>
        </>

    );

}
