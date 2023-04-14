import React, { useContext } from 'react';
import './Result.css';
import { TransactionContext } from "../context/TransactionContext";
import { MdVerifiedUser } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

export default function Result () {

    const { scannedId, transactions } = useContext(TransactionContext);
    console.log(transactions);

    const result = transactions.some( (transaction) => { 
        if(transaction.keyword === scannedId) {
            return true;
        }
        return false;
    });

    return(
    <div className='result-container'>

    { result && <div className='result'><div className='correct-icon'><MdVerifiedUser style={{ color: 'green', fontSize: '11.5em' }}/></div><h1 className='real'>REAL</h1></div>}

    { !result && <div className='result'><div className='wrong-icon '><CgDanger style={{ color: 'red', fontSize: '11.5em' }}/></div><h1 className='fake'>FAKE</h1></div>}

    </div>
    );
}