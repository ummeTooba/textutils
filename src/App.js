import './App.css';
import React, { useState,useEffect } from 'react';
import TextForm from './MyComponents/TextForm';
import Navbar from './MyComponents/Navbar';
import Alert from './MyComponents/Alert';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [toggleText, setToggleText] = useState("Enable Dark Mode");// changing switch text
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  // const alertTypes = {
  //   success: 'Success',
  //   danger: 'Done',
  //   warning: 'Warning',
  //   info: 'Info',
  // };
  // const alertText = alertTypes[props.alert.type] || 'Unknown'; if dont use usestate this will be work same

  const [alertText, setAlertText] = useState('');

  useEffect(() => {
    const alertTypes = {
      success: 'Success',
      danger: 'Done',
      warning: 'Warning',
      info: 'Info',

    };

      if (alert) {
      setAlertText(alertTypes[alert.type] || '');
    }
  }, [alert]);


  
    
  //toggle in navbar
  const toggleMode = ()=>{
    if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#343a40';
    setToggleText('Enable Light Mode')
    showAlert("Dark Mode has been Enabled","success");
    document.title = "TextUtils - Dark mode";

  }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      setToggleText('Enable Dark  Mode')
      showAlert("Light Mode has been Enabled","success");
      document.title = "TextUtils - Home";

    }
  }
  //console is used for is func work properly or not
    // console.log('Current Mode:', alert);
  
  
  
  

  
  

  return (
    <>
    <Router>
        <div>
          <Navbar title="TextUtils" mode={mode} toggleText={toggleText} toggleMode={toggleMode} />
          <Alert alert={alert} alertText={alertText} />
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter your Text here for Analyze" mode={mode} showAlert={showAlert} alertText={alertText} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
