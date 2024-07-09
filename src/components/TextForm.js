import React, { useState } from 'react';
import './text.css';

export default function TextForm() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  const handleFind = () => {
    let t = prompt("Enter the word to find");
    if (text.includes(t)) {
      let m = prompt("Enter the string to replace");
      let x = text.replace(RegExp(t, 'g'), m);
      setText(x);
    } else {
      alert("Word not found");
    }
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleClear = () => {
    setText("");
  }

  return (
    <div>
      <br /><br /><br />
      <div>
        <textarea className='textarea' rows={10} cols={100} value={text} onChange={handleOnChange} placeholder='Enter the text here'></textarea>
      </div>
      <br /><br /><br />
      <div>
        <button className='btn1' onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className='btn1' onClick={handleDownClick}>Convert to lowercase</button>
        <button className='btn1' onClick={handleFind}>Find and replace</button>
        <button className='btn1' onClick={handleSpeak}>Speak</button>
        <button className='btn1' onClick={handleClear}>Clear Text</button>
      </div>
      <br />
      <div>
        <h3>Text data</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
