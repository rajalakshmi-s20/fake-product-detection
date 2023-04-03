import React, { useState, useRef } from 'react';
import './Homepage.css';
import QrReader from "react-qr-reader";

export default function Homepage () {
    const qrRef = useRef(null);
    const [fileResult, setFileResult] = useState();

    const openDialog = () => {
        qrRef.current.openImageDialog();
    }

    const fileError = (error) => {
        if(error){
            console.log(error);
        }
    }

    const fileScan = (result) => {
        if(result){
            setFileResult(result);
        }
    }

    return(
    <div className='homepage'>
        <div className='header'>
            <p>QR CODE FOR PRODUCT DETECTION <span>USING BLOCKCHAIN</span></p>
            <nav className='navbar'>
                <ul>
                    <li className="a1"><a href="#">HOME</a></li>
                    <li className="a1"><a href="#">ABOUT</a></li>
                    <li className="a1"><a href="#">INSTRUCTIONS</a></li>
                    <li className="a1"><a href="#">REGISTER</a></li>
                    <li className="a1"><a href="#">LOGIN</a></li>
                    <li className="a1"><a href="#">SIGNUP</a></li>
                </ul>
            </nav>
       </div>
       <br/>
        <div className='upload'>
            <button className='img-upload' onClick={openDialog}>Upload QR</button>
            <p className='or'>OR</p>
            <button className='scan'>Scan QR</button>
        </div>
        <div className='qrImage'>
            <QrReader
            ref={qrRef}
            delay={300}
            onError={fileError}
            onScan={fileScan}
            legacyMode={true}
            />
        </div>
    </div>
    );
}
