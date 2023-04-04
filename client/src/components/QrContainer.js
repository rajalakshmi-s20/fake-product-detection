import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import './QrContainer.css';

export default function QrContainer () {
    const [webcamResult, setWebcamResult] = useState();

    const webcamError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const webcamScan = (result) => {
        if(result){
            setWebcamResult(result);
        }
    }

    return(
    <div className='qrcontainer'>
        <p className='title'>Hold QR Code Steady and Clear to Scan</p>
        <div className='qr-scan'>
        <QrReader
        delay={300}
        onError={webcamError}
        onScan={webcamScan}
        legacyMode={false}
        facingMode={"user"}
        />
        </div>
    </div>
    );
}