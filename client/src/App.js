import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import QrContainer from './components/QrContainer';
import QrGenerator from './components/QrGenerator';
import Web3 from 'web3';
import './App.css';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/qrgenerator" element={<QrGenerator/>}/>
          <Route exact path="/qrcontainer" element={<QrContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
