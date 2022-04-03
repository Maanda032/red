import React,{useState} from 'react'


export default function Textform(props) {
  const handletoclear=()=>
  {
    let artext=text.toLowerCase();
    settext(artext);
  }
  const handlelowchange=()=>{
    let mytext=text.toLowerCase();
    settext(mytext);
  }
  const handleupclick =()=>{
    //console.log("uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    settext(newtext);
   // settext("you have clicked on uppercase");
  }
  const handleOnchange =(event)=>{
    console.log("on change");
    settext(event.target.value);
  }  
  
  const [text ,settext]=useState("Enter your text here");
  //text("change text");//unvalid
  //settext('this is me');//this is valid
   return(
     <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#2f3d50'}}>
      <h1>
      {props.heading}
      </h1>
      <div className="mb-3">
    <textarea className="form-control" 
    value={text}
    
    onChange={handleOnchange
    }
    
    style={{backgroundColor:props.mode==='dark'?'#a16c6c':'white', color:props.mode==="dark"?"white":"#2f3d50"}}
     id="mybox" rows="3"></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-3" onClick={handleupclick}>To Uppercase</button>
  <button type="button" className="btn btn-primary mx-3" onClick={handlelowchange}>To LowerChange</button>
  <button button type="button" className="btn btn-primary mx-2" onClick={handletoclear}>change to clear</button> 
  

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#2f3d50'}}>
     
    <h1>your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} charachters</p>
    <p> you will read this in {0.008 * text.split(" ").length}</p>
    <h2 className='container'>preview</h2>
    <p>{text.length>0?text:"Enter something to write"}</p>

    </div>

    </>










    )
}
 