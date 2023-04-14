import React, { useContext } from 'react';
import './Result.css';
import { TransactionContext } from "../context/TransactionContext";
import { MdVerifiedUser } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

export default function Result () {

    const { scannedId, transactions } = useContext(TransactionContext);
    console.log(transactions);
    let result = "false";
    
    function check(){ 
        transactions.map( (transaction) => { 
            if(transaction.keyword === scannedId)
            {
                result = "true";
            }
        })
    }

    return(
    <div className='result'>
    <p>{scannedId}</p>
    <MdVerifiedUser/>
    <CgDanger/>
    <p>{result}</p>
    </div>
    );
}