import { useState, useRef, useContext } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './QrGenerator.css';
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from 'react-router-dom';

const QrGenerator = () => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const qrRef = useRef();

  const { connectWallet, formData, handleKeyword, handleMessage, sendTransaction } = useContext(TransactionContext);

  const API_URL="http://localhost:3001/";

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    handleSubmit();
    Add_details();
    setUid("");
    setName("");
    setDescription("");
    setCompany("");
    setDate("");
    setLocation("");
  };

  const handleSubmit = () => {   
    connectWallet();
    
    const { addressTo, amount, keyword, message } = formData;

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
    NavigateToResult();
  }

  const NavigateToResult = () => {
    setTimeout(() => {
        navigate('/', { replace: true });
    }, 5000);
  }

  async function Add_details(){
    const data = new FormData();
    data.append("uid",uid);
    data.append("name",name);
    data.append("description",description);
    data.append("company",company);
    data.append("location",location);
    data.append("date",date);

    fetch(API_URL+"api",{
      method:"POST",
      body:data
    }).then(res => res.json())
    .then((result) => {
      alert(result);
    })
  }

  const handleId = (e) => {
    setUid(e.target.value);
    handleKeyword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
    handleMessage(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={uid}
      size={200}
      level={"H"}
    />
  );

  return (
    <div className="qrcode_container">
      <div className="qrcode">
      <div ref={qrRef}>{qrcode}</div>
      <p>Product QR Code</p>
      </div>
      <div className="input_group">
        <form onSubmit={downloadQRCode}>
          <p>Product Details</p>
          <div>
          <label>Product ID</label>
          <input
            name="keyword"
            id="keyword"
            type="text"
            value={uid}
            onChange={handleId}
          />
          </div>
          <div>
          <label>Product Name</label>
          <input
            name="message"
            id="message"
            type="text"
            value={name}
            onChange={handleName}
          />
          </div>
          <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={handleDescription}
          />
          </div>
          <div>
          <label>Manufactured By</label>
          <input
            type="text"
            value={company}
            onChange={handleCompany}
          />
          </div>
          <div>
          <label>Manufactured Location</label>
          <input
            type="text"
            value={location}
            onChange={handleLocation}
          />
          </div>
          <div>
          <label>Manufactured Date</label>
          <input
            type="text"
            value={date}
            onChange={handleDate}
          />
          </div>
          <button type="submit" disabled={!uid}> 
          <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrGenerator;