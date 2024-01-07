import React, { useState, useContext, useRef, useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import './QrContainer.css';
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

export default function QrContainer () {
    const qrRef = useRef(null);
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
            setWebcamResult(result.text);
            handlescannedId(result.text);
            NavigateToResult(); 
        } 
    }

    useEffect(() => {
        return () => {
          if (qrRef.current && qrRef.current.closeImage) {
            qrRef.current.closeImage();
          }
        };
    }, []);      

    return(
    <div className='qrcontainer'>
        <p className='title'>Hold QR Steady and Clear to Scan</p>
        <div className='qr-scan'>
        <QrReader
        ref={qrRef}
        delay={500}
        onError={WebcamError}
        onScan={WebcamScan}
        legacyMode={false}
        facingMode="environment"
        />
        </div>
        <p className='qr-result'>{webcamResult}</p>
        <br></br>
        {webcamResult && <p className='loader'>Please wait...</p>}
    </div>
    );
}