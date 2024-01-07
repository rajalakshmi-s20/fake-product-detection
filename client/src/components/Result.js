import React, { useContext } from 'react';
import './Result.css';
import { TransactionContext } from "../context/TransactionContext";
import { MdVerifiedUser } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { useState, useEffect } from 'react';

export default function Result () {
    const API_URL="http://localhost:3001/";

    const [uid, setUid] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    const { scannedId, transactions } = useContext(TransactionContext);
    console.log(transactions);
    console.log(scannedId);

    const result = transactions.some( (transaction) => { 
        if(transaction.keyword === scannedId) {
            return true;
        }
        return false;
    });

    useEffect(() => {
        if(result){ 
        Get_details();
        }
    }, []);      

    async function Get_details(){
        fetch(API_URL+"api").then(response => response.json()).then(data => {
            const Object = data.find(item => item.uid === scannedId);
            setUid(Object.uid);
            setName(Object.name);
            setDescription(Object.description);
            setCompany(Object.company);
            setDate(Object.date);
            setLocation(Object.location);
        })
    }

    return(
    <div className='result-container'>
    <br></br>

    { result && <div className='result'>
        <div className='correct-icon'>
            <MdVerifiedUser style={{ color: 'green', fontSize: '8.5em' }}/>
        </div>
        <h1 className='real'>REAL</h1>
    </div>}

    { !result && <div className='result'>
        <div className='wrong-icon '>
            <CgDanger style={{ color: 'red', fontSize: '8.5em' }}/>
        </div>
        <h1 className='fake'>FAKE</h1>
    </div>}

    { result && <div className='product-details'>
        <p className='title'>PRODUCT DETAILS</p>
        <dl>
            <dt>uid</dt>
            <dd>: {uid}</dd>

            <dt>name</dt>
            <dd>: {name}</dd>

            <dt>description</dt>
            <dd>: {description}</dd>

            <dt>company</dt>
            <dd>: {company}</dd>

            <dt>location</dt>
            <dd>: {location}</dd>

            <dt>date</dt>
            <dd>: {date}</dd>
        </dl>
    </div>}
    <div className='home-btn'><a href='http://localhost:3000/'>Home</a></div>
    </div>
    );
}