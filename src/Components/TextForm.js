import React, { useState } from 'react'

function TextForm(props) {
    // let countFirst = true;
    let countWords = /\w+/g;
    let countChar = /\w/g;
    const [text,SetText] = useState("");
    const handleOnChange = (event)=>{
SetText(event.target.value);
    };
    const clearText = ()=>{
        SetText("");
        props.showAlert("Text Cleared","success");
    };
    // const clearTextArea = ()=>{
    //     if(countFirst){
    //         SetText("");
    //         countFirst=false;
    //         console.log(countFirst);
    //     }
    // };

    const toUpper = ()=>{
        SetText(text.toUpperCase());
    
            props.showAlert("Converted to upper case","success");
          
    };
    const toLower = ()=>{
        SetText(text.toLowerCase());
        if(text.length!==0){
            props.showAlert("Converted to lower case","success");
        }
    };

    const copyText = ()=>{
        
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard","success");
    
    };

const handleSpacing = ()=>{
    let newText = text.split(/[ ]+/); //regex for spaces
    SetText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
};

    const TotalwordCount = ()=>{   
        if(text.length===0){
return 0;
        }
        else{
            let result = text.match(countWords);
            if(result!==null)
            return result.length;   
            else
            return 0;
        }
    };
    const totalCharCount = ()=>{
       let result = text.match(countChar);
       if(text.length===0){
        return 0 ;
       }
       else{
        result = text.match(countChar);
        if(result!==null)
        return result.length; 
        else 
        return 0;
       }
    };
    return (
        <div>
            <div className="mb-3 my-3">
                <h2 className={`text-${(props.mode==='light')?'dark':'light'}`}>{props.heading}</h2>
                <textarea className="form-control rounded my-3" id="exampleFormControlTextarea1" rows="10"
                value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode==="light")?"white":"#0e2d4a",color:(props.mode==="light")?"black":"white"}}></textarea>
            </div>
            <button className='my-2 mx-1 bg-primary btn btn-primary border rounded' onClick={toUpper} disabled={text.length===0}>
                Upper
            </button>

            <button className='my-2 mx-1 bg-primary btn btn-primary border rounded' onClick={toLower} disabled={text.length===0}>
                Lower
            </button>

            <button className='my-2 mx-1 bg-primary btn btn-primary border rounded' onClick={handleSpacing} disabled={text.length===0}>
                Spacing
            </button>

            <button className='my-2 mx-1 bg-primary btn btn-primary border rounded' onClick={copyText} disabled={text.length===0}>
                Copy
            </button>

            <button className='my-2 mx-1 bg-danger btn btn-primary border rounded' onClick={clearText} disabled={text.length===0}>
                Clear
            </button>

       <div className={`container text-${(props.mode==="light")?"dark":"light"}`}>
        <h3>Preview :</h3>
        {/* <p>{text.length>0?text:"Enter someting in the above textbox to preview it here :)"}</p> */}
        <p>{text.length===0?"Nothing to preview":text}</p>
        <p>WordCount : {TotalwordCount()}</p>
        <p>CharacterCount : {totalCharCount()}</p>
       </div>
        </div>
    )
}  

export default TextForm
