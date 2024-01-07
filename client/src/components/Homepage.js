import React, { useState, useRef, useContext } from 'react';
import './Homepage.css';
import QrReader from "react-qr-reader";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

export default function Homepage () {
    const qrRef = useRef(null);
    const [fileResult, setFileResult] = useState("");
    const { handlescannedId } = useContext(TransactionContext);
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
        }, 3000);
    }

    const FileScan = (result) => {
        if(result) { 
            setFileResult(result);
            handlescannedId(result);
            NavigateToResult();
        } else {
            alert("Error Occurred While Scanning. Please Try Again!");
        }
    }

    return(
    <div className='homepage'>
        <div className='header'>
            <nav className='navbar'>
                <ul>
                    <li className='logo'><a href="http://localhost:3000/">VERIFY</a></li>
                    <li className="a1"><a href="http://localhost:3000/login">LOGIN/SIGNUP</a></li>
                    <li className="a1"><a href="http://localhost:3000/qrgenerator/">REGISTER PRODUCT</a></li>
                    <li className="a1"><a href="http://localhost:3000/">CONTACT</a></li>
                    <li className="a1"><a href="http://localhost:3000/">HELP</a></li>
                    <li className="a1"><a href="http://localhost:3000/">FAQs</a></li>
                    <li className="a1"><a href="http://localhost:3000/">ABOUT US</a></li>
                    <li className="a1"><a href="http://localhost:3000/">HOME</a></li>
                </ul>
            </nav>
            <p>FAKE PRODUCT DETECTION <span>USING BLOCKCHAIN</span></p>
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
            <p>{fileResult}</p>
        </div>
        <br/>
        <div className="footer">
            <p>copyright &copy; 2024 verify</p>
        </div>
    </div>
    );
}
