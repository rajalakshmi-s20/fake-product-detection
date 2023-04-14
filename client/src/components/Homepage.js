import React, { useState, useRef, useContext } from 'react';
import './Homepage.css';
import QrReader from "react-qr-reader";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

export default function Homepage () {
    const qrRef = useRef(null);
    const [fileResult, setFileResult] = useState();
    const { handlescannedId, scannedId } = useContext(TransactionContext);
    const navigate = useNavigate();

    const openDialog = () => {
        qrRef.current.openImageDialog();
    }

    const FileError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const NavigateToResult = () => {
        setTimeout(() => {
            navigate('/result', { replace: true });
        }, 1000);
    }

    const FileScan = (result) => {
        if(result) { 
            setFileResult(result);
            handlescannedId(fileResult);
            if(scannedId) { 
                NavigateToResult();
            } else {
                alert("Error Occurred While Scanning. Please Try Again!");
            }
        } 
    }

    return(
    <div className='homepage'>
        <div className='header'>
            <p>QR CODE FOR PRODUCT DETECTION <span>USING BLOCKCHAIN</span></p>
            <nav className='navbar'>
                <ul>
                    <li className="a1"><a href="http://localhost:3000/">HOME</a></li>
                    <li className="a1"><a href="http://localhost:3000/">ABOUT</a></li>
                    <li className="a1"><a href="http://localhost:3000/">INSTRUCTIONS</a></li>
                    <li className="a1"><a href="http://localhost:3000/qrgenerator/">REGISTER</a></li>
                    <li className="a1"><a href="http://localhost:3000/login">LOGIN</a></li>
                    <li className="a1"><a href="http://localhost:3000/login">SIGNUP</a></li>
                </ul>
            </nav>
       </div>
       <br/>
        <div className='upload'>
            <button className='img-upload' onClick={openDialog}>Upload QR</button>
            <p className='or'>OR</p>
            <button className='scan'><a href="http://localhost:3000/qrcontainer/">Scan QR</a></button>
        </div>
        <div className='qrImage'>
            <QrReader
            ref={qrRef}
            delay={300}
            onError={FileError}
            onScan={FileScan}
            legacyMode={true}
            />
        </div>
    </div>
    );
}
