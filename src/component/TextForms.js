import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () => {
        setText(" ");
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // const handlePaste =() =>{
    //     let text = document.getElementById('myBox');
    //     setText(text.value);
    // }
    const onChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#14183D', color: props.mode === 'light' ? 'black' : 'yellow' }} value={text} onChange={onChange} id="myBox" rows="15"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-3" onClick={handleUpperCase} >CONVERT TO UPPER CASE</button>
                    <button className="btn btn-primary mx-3" onClick={handleLowerCase}>CONVERT TO LOWER CASE</button>
                    <button className="btn btn-primary mx-3" onClick={handleClearText}>CLEAR TEXT</button>
                    <button className="btn btn-primary mx-3" onClick={handleCopy}>COPY TEXT</button>
                    {/* <button className="btn btn-primary mx-3" onClick={handlePaste}>PASTE TEXT</button> */}

                </div>
                <div>
                    <p><b>number of words :- {text.split(" ").length - 1} </b> </p>
                    <p><b>characters :- {text.length - 1}</b></p>
                    <h2>Preview</h2>
                    {text}
                </div>
            </div>
        </>
    )
}
