import React, { useState, useContext } from 'react';
import QrReader from 'react-qr-reader';
import './QrContainer.css';
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

export default function QrContainer () {
    const [webcamResult, setWebcamResult] = useState();
    const { handlescannedId } = useContext(TransactionContext);
    const navigate = useNavigate();

    const WebcamError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const NavigateToResult = () => {
        setTimeout(() => {
            navigate('/result', { replace: true });
        }, 3000);
    }

    const WebcamScan = (result) => {
        if(result) { 
            setWebcamResult(result);
            handlescannedId(result);
            NavigateToResult(); 
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
        <p className='qr-result'>{webcamResult}</p>
    </div>
    );
}