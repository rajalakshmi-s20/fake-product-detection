import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumcontract = () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState();
    const [formData, setFormData] = useState({addressTo: '0x671598d3b4176Aba68A3E24089666eaFF7BceCbd', amount: "0.000000001" , keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    function handleKeyword (value) {
        setFormData((prevState) => ({ ...prevState, keyword: value }));
    }

    function handleMessage (value) {
        setFormData((prevState) => ({ ...prevState, message: value }));
    }

    const checkIfWalletIsConnected = async () => {
        try{ 
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if(accounts.length){ 
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No Accounts found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }
    
    const connectWallet = async () => {
        try{
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }

    const sendTransaction = async () => {
        try{
            if(!ethereum) return alert("Please install metamask");

            const { addressTo, amount, keyword, message } = formData;

            const transactionContract = getEthereumcontract();
            
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //21000 GWEI
                    value: parsedAmount._hex,
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            await transactionHash.wait();
            setIsLoading(false);
            
            const transactionCount = await transactionContract.setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return(
        <TransactionContext.Provider value={{ connectWallet, formData, handleKeyword, handleMessage, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}