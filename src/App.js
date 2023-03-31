import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import QrContainer from './components/QrContainer';
import QrGenerator from './components/QrGenerator';
import Web3 from 'web3';
import './App.css';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/qrgenerator" component={QrGenerator}/>
        <Route exact path="/qrcontainor" component={QrContainer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
