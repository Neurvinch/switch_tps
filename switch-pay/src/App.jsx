
import { ConnectButton } from '@rainbow-me/rainbowkit'
import './App.css'
import {createStream, withdraw} from "./api"
import { useState } from 'react';

function App() {
  const [recipient, setRecipient] =  useState("");
  const [rate, setRate] = useState("");
  const [duration , setDuration] = useState("");
  const [streamID, setStreamID] = useState("");

  const handleCreateStream = async () => {

      try {

        const res = await createStream(recipient, rate, duration);
        alert(`Stream created! Tx Hash: ${res.data.txHash}`);
        setStreamID(1)
        
      } catch (error) {
        
        console.error("Error creating stream:", error);
        alert("Failed to create stream");
      }
  }


  const handleWithdraww = async () => {
    
  }
  

  return (
    <>
      <ConnectButton/>
    </>
  )
}

export default App
