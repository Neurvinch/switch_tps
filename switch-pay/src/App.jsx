
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
      
        try {
          const res = await withdraw(streamID);
          alert(`Withdraw successful! Tx Hash: ${res.data.txHash}`);

          
        } catch (error) {
          console.error("Error withdrawing from stream:", error);
        }
  }
  

  return (
    <>
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">🎥 Sonic StreamPay</h1>
          <p className="mb-4">Real-time micropayments for streaming 🚀</p>

          <div className="mb-4">
            <ConnectButton />
          </div>

          <div className="mb-4">
            <input
              className="border p-2 rounded w-64 mb-2"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <input
              className="border p-2 rounded w-64 mb-2"
              placeholder="Rate Per Second (wei)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <input
              className="border p-2 rounded w-64 mb-2"
              placeholder="Duration (seconds)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleCreateStream}
            >
              Start Stream
            </button>
          </div>

          <div>
            <input
              className="border p-2 rounded w-64 mb-2"
              placeholder="Stream ID"
              value={streamID}
              onChange={(e) => setStreamID(e.target.value)}
            />
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={handleWithdraww}
            >
              Withdraw Earnings
            </button>
          </div>
        </div>
    </>
  )
}

export default App
