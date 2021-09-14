import React, { useState } from 'react'

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#06091a';
      showAlert("Dark Mode Enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enable", "success");
    }
  }
  const [mode, setMode] = useState('light');
  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter Your Text here" mode={mode} />
            {/* <About/> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
