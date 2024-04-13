import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ( )=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase( );
    setText(newText);
    props.showAlert("converted to UpperCase" , "success")
  }

  const handleDnClick = ( )=>{
    console.log("Lowercase was clicked" + text);
    setText(text.toLowerCase( ));
    props.showAlert("converted to LowerCase" , "success")
  }
  const handleExtraSpaces = ( )=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed" , "success")
  }
  const clearText = ( )=>{
    let newText = " ";
    setText(newText);
  }
  const InverseText = ( )=>{
    console.log("inverse" + text);
    let newText = " ";
    for(let i = text.length-1 ; i>=0 ; i-- ){
      newText += text[i] ;
    }
    setText(newText);
  }
  const ReverseText = ( )=>{
    console.log("reverse" + text);
    let newText = " ";
    for(let i = text.length-1 ; i>=0 ; i-- ){
      newText += text[i] ;
    }
    setText(newText);
  }
  const CopyText = () => {
    var text = document.getElementById('myBox');
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  }


  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text , setText ] = useState(' ');

  return (
    <>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  style={{color: 'black'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" >
                </textarea>
            </div>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={handleDnClick}>Convert to lowercase</button>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={InverseText}>Inverse Text</button>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={ReverseText}>Reverse Text</button>
            <button disabled={text.length===0}  className='btn btn-success mx-2 my-1' onClick={CopyText}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-success mx-2 my-1' onClick={handleExtraSpaces}>Remove Extraf Spaces</button>
        </div>
        <div className="container my-2">
            <h1> Your text summery </h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==  0}).length} words and {text.length} characters </p>
            <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==  0}).length } Minutes read</p>
            <h2>Preview</h2>
            <p>{ text.length>0?text:"Enter something in the textbox about preview it here" }</p>
          
        </div>
    </>
  )
}
