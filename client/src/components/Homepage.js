import React from 'react';
import './Homepage.css';

export default function Homepage () {
  
    return(
    <div className='home'>
        <div className='header'>
            <p>QR CODE FOR PRODUCT DETECTION <span>USING BLOCKCHAIN</span></p>
            <nav className='navbar'>
                <ul>
                    <li><a href="#" className="a1">HOME</a></li>
                    <li><a href="#" className="a1">ABOUT</a></li>
                    <li><a href="#" className="a1">INSTRUCTIONS</a></li>
                    <li><a href="#" className="a1">REGISTER</a></li>
                    <li><button><a href="#" className="a1">LOGIN</a></button></li>
                    <li><button><a href="#" className="a1">SIGN UP</a></button></li>
                </ul>
            </nav>
       </div>
       <br/>
        <div className='upload'>
            <form>
                <label>Upload</label><br/>
                <input type="file" accept="image/png, image/jpeg"/>
                <p>or</p>
                <button>Scan QR</button>
            </form>
        </div>
    </div>
    );
}
