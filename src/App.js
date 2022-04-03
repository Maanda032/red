
import './App.css';
//import * as ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
//import Amout from './components/Amout';
import Navbar from './components/Navbar'; 
import Textform from './components/Textform';
import React,{useState} from 'react';
//import Alert from './components/Alert';
import Amout from './components/Amout';

//import {
  //BrowserRouter as Router,
  //Routes,
  //Route
//} from "react-router-dom";
//ReactDOM.render(
  //<Router>
    
    //<Routes>
    //<Route path='/' element={<Amout/>}/>
  //</Routes>
     
    //  </Router>,
  //document.getElementById("root")
//);
//ReactDOM.render(
 // <Router>
    
    
   // <Routes>
    //<Route path='/' element={<Textform />}/>   </Routes>
     
     // </Router>,
  //document.getElementById("root")
//);






function App(props) {
   const [mode, setmode] = useState('light')
   const [alert, setAlert] = useState(null)
   const showAlert=(message,type)=>{
     setAlert={
       msg:message,
       type:type
     }

   }
   const  togglemode=()=>{
     if(mode==='light'){
       setmode("dark");
       document.body.style.backgroundColor="black"
       document.title="Struggle";
     
       showAlert("SuccessDark mode has been Enabled","success")
     }
     else{
       setmode("light");
       document.body.style.backgroundColor="white"
       document.title="Hustle";
       showAlert("light mode has been enabled , Success")
     }
   }
  return (
<>


  
   <Navbar  title="Malik Sahab" myhome="Home" mode={mode} togglemode={togglemode}/>
   <lert alert={"alert"}/>
   <div className='container my-3'>
          
  <Textform heading="Enter your Manjan here"style={{color:props.mode==='dark'?'white':'black'}} />
  
                
            
   </div>

     </>
  );
}


export default App;

