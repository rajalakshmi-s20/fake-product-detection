import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import QrContainer from './components/QrContainer';
import QrGenerator from './components/QrGenerator';
import Result  from './components/Result';
import './App.css';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/qrgenerator" element={<QrGenerator/>}/>
          <Route exact path="/qrcontainer" element={<QrContainer/>}/>
          <Route exact path="/result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
