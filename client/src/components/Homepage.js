import React from 'react';
import './Homepage.css';

export default function Homepage () {
  
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
                    <li className="a1"><a href="#">SIGN UP</a></li>
                </ul>
            </nav>
       </div>
       <br/>
        <div className='upload'>
            <form>
                <div className='img-upload'>
                <label for="image">Upload QR Code</label><br/>
                <input type="file" accept="image/png, image/jpeg" name="image" className='image' id="image"/>
                </div>
                <p className='or'>OR</p>
                <button className='scan'>Scan QR</button>
            </form>
        </div>
    </div>
    );
}
