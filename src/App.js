import React from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [modeState,setmodeState] = useState("Enable Dark Mode");
  const [myStyle,setmyStyle] = useState({
    color : "black",
    backgroundColor : "#F5F5F5"
  });
  // document.body.style.backgroundColor = "#F5F5F5";
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      setmodeState("Disable Dark Mode");
      setmyStyle({
        color : "white",
        backgroundColor : "#0e2d4a"
      }); 
      document.body.style.backgroundColor = "#0e2d4a";
      showAlert("Dark Mode Enabled!","success");
      // document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode("light");
      setmodeState("Enable Dark Mode");
      setmyStyle({
        color : "black",
        backgroundColor : "#F5F5F5"
    })
    document.body.style.backgroundColor = "#F5F5F5";
    showAlert("Light Mode Enabled!","success");
    // document.title = 'TextUtils - LightMode'
  };
}
const[alert,setAlert] = useState(null);
const showAlert=(message,type)=>{
setAlert(
  {
    msg : message,
    type : type
  }
);
// to vanish the alert box after 1.5 seconds
setTimeout(() => {
  setAlert(null);
  
}, 1500);

}
  return (
    <Router>
      <Navbar home="Home" about="About" toggleMode={toggleMode} myStyle={myStyle} modeState={modeState} mode={mode}></Navbar>
      <Alerts alert={alert}></Alerts>
      <div className='container'>
        {/* why use exact
        because : /users  --->component 1
                  /users/home --->component 2
                  react does partial matching when "exact" isn't used
                  therefore even when you try to go into component 2 it will led you to comp 1 therefore using exact is a good idea :)
        */}


      <Routes>
      <Route exact path="/" element={ <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} alert={alert} showAlert={showAlert}></TextForm>}>
      </Route>

      <Route exact path="/home" element={ <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} alert={alert} showAlert={showAlert}></TextForm>}>
      </Route>

          <Route exact path="/about" element={ <About  toggleMode={toggleMode} myStyle={myStyle} modeState={modeState}></About>}>
          </Route>
       
      </Routes>
      </div>
    </Router>
  );
}

export default App;
