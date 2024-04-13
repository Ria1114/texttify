import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode'
      showAlert("Dark mode has been enabled" , "success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
      document.title = 'TextUtils - Light Mode'
      showAlert("light mode has been enabled" , "success");
    }
  }
  return (
    <>
      <div >
        <Navbar title="Texttify" text="About" mode={mode} toggleMode={ toggleMode }/>
        <Alert alert={alert}/>
        <div className="container my-3" >
        
            
              
                  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            
                  </div>
        </div>

    </>
  );
}

export default App;
