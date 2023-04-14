import React, { useState, useContext } from 'react';
import QrReader from 'react-qr-reader';
import './QrContainer.css';
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

export default function QrContainer () {
    const [webcamResult, setWebcamResult] = useState();
    const { handlescannedId, scannedId } = useContext(TransactionContext);
    const navigate = useNavigate();

    const WebcamError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const NavigateToResult = () => {
        setTimeout(() => {
            navigate('/result', { replace: true });
        }, 2000);
    }

    const WebcamScan = (result) => {
        if(result) { 
            setWebcamResult(result);
            handlescannedId(webcamResult);
            if(scannedId) { 
                NavigateToResult();
            } else {
                alert("Error Occurred While Scanning. Please Try Again!");
            }
        } 
    }

    return(
    <div className='qrcontainer'>
        <p className='title'>Hold QR Code Steady and Clear to Scan</p>
        <div className='qr-scan'>
        <QrReader
        delay={300}
        onError={WebcamError}
        onScan={WebcamScan}
        legacyMode={false}
        facingMode={"user"}
        />
        </div>
    </div>
    );
}