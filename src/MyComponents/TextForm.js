import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (e) => {
    //console.log("text fot chnge")
    setText(e.target.value);
  };

  const handleOnUpclick = () => {
    //console.log('upper case was clicked ');
    let newText = text.toUpperCase();
    setText(newText);
    if (newText.trim() !== "") {
      props.showAlert('Converted to UpperCase', 'success');     }
      else{
        props.showAlert('Please Enter text to edit', 'info');
      }
  };

  const handleOnlowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (newText.trim() !== "") {
    props.showAlert('Converted to LowerCase', 'success'); }
    else{
      props.showAlert('Please Enter text to edit', 'info');
    }
  };

  const handleOnClearclick = () => {
    let newText = "";
    setText(newText);
    if (newText.trim() === text) {
    props.showAlert('Please Enter text to clear', 'info');  }
    else{
      props.showAlert('Cleared', 'danger');
    }
  };

  const handleOnCap = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
     if (newText.trim() !== ""){
     props.showAlert('Converted to Capitalized', 'success');  }
     else{
      props.showAlert('Please Enter text to edit', 'info');
    }
  };
  const handleOnExspace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    if (newText.trim() !== ""){
    props.showAlert('Extra spaces removed', 'danger'); }
    else{
      props.showAlert(' Enter text', 'info');
    }
  };
  const handleOnCopy = () => {
    if (text.trim() !== "") {
      const textarea = document.createElement("textarea");
      textarea.value = text;

      // Append the textarea element to the document
      document.body.appendChild(textarea); // Append the 'textarea' element

      // Select the text inside the textarea
      textarea.select();

      // Execute the copy command
      document.execCommand("copy");

      // Remove the textarea element
      document.body.removeChild(textarea);
      
      props.showAlert('Copied to the clipboard: ', 'success'); }
    else{
      props.showAlert('Please Enter text to copy', 'info');
    }
    };
    
  

  // const handleTextareaSelect = (e) => {
  //   const selected = e.target.value.substring(
  //     e.target.selectionStart,
  //     e.target.selectionEnd
  //   );
  //   setSelectedText(selected);

  // };

  // const [selectedText, setSelectedText] = useState('');

  return (
    <>
      <div>
        <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
          <h4>{props.heading}</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              name="myBox"
              cols="30"
              rows="10"
              value={text}
              onChange={handleOnchange}
              style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'}}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success mx-2 my-1"
            onClick={handleOnUpclick}
          >
            {" "}
            Convert to UpperCase
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-2 my-1"
            onClick={handleOnlowclick}
          >
            Convert to Lower Case
          </button>
          <button
            type="submit"
            className="btn  mx-2 my-1"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={handleOnCap}
          >
            Capitalize Text
          </button>

          <button
            type="submit"
            className="btn btn-danger mx-2 my-1 "
            onClick={handleOnClearclick}
          >
            Clear Text
          </button>

          <button
            type="submit"
            className="btn  mx-2 my-1"
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={handleOnCopy}
          >
            Copy Text
          </button>
          <button
            type="submit"
            className="btn  mx-2 my-1"
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={handleOnExspace}
          >
            Remove spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{color: props.mode==='dark'?'white':'black'}}
      >
        <h4>Your Text Summary</h4>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} number of characters
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter text to preview it here."}</p>
      </div>
    </>
  );
}
