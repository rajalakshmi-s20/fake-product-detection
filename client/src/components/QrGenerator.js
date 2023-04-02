import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './QrGenerator.css';

const QrGenerator = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const qrRef = useRef();

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
    setId("");
    setName("");
    setDescription("");
    setManufacturer("");
    setCompany("");
    setDate("");
    setLocation("");
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleManufacturer = (e) => {
    setManufacturer(e.target.value);
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
      value={id}
      size={200}
      level={"H"}
    />
  );

  return (
    <div className="qrcode_container">
      <div className="qrcode">
      <div ref={qrRef}>{qrcode}</div>
      </div>
      <div className="input_group">
        <form onSubmit={downloadQRCode}>
          <div>
          <label>Product ID</label>
          <input
            type="text"
            value={id}
            onChange={handleId}
          />
          </div>
          <div>
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={handleName}
          />
          </div>
          <div>
          <label>Product Description</label>
          <input
            type="text"
            value={description}
            onChange={handleDescription}
          />
          </div>
          <div>
          <label>Registered By</label>
          <input
            type="text"
            value={manufacturer}
            onChange={handleManufacturer}
          />
          </div>
          <div>
          <label>Manufactured Company</label>
          <input
            type="text"
            value={company}
            onChange={handleCompany}
          />
          </div>
          <div>
          <label>Company Location</label>
          <input
            type="text"
            value={location}
            onChange={handleLocation}
          />
          </div>
          <div>
          <label>Manufactured date</label>
          <input
            type="text"
            value={date}
            onChange={handleDate}
          />
          </div>
          <button type="submit" disabled={!id}> 
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrGenerator;