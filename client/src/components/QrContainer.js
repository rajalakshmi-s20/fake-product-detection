import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';
import './QrContainer.css';

export default function QrContainer () {
    const qrRef = useRef(null);
    const [webcamResult, setWebcamResult] = useState();

    const webcamError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const webscan = (result) => {
        if(result){
            setWebcamResult(result);
        }
    }

    return(
    <div className='qrcontainer'>
        <p className='title'>Hold QR Code Steady and Clear to scan</p>
        <div className='qr-scan'>
        <QrReader
        ref={qrRef}
        delay={300}
        onError={webcamError}
        onScan={webscan}
        legacyMode={false}
        />
        </div>
    </div>
    );
}