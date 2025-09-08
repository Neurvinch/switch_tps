import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WagmiProvider} from "wagmi"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { http } from 'wagmi'
import {sonicBlazeTestnet,sonicTestnet} from "viem/chains"
import {RainbowKitProvider, darkTheme,getDefaultConfig} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import './index.css'
import App from './App.jsx'




 const projectId = "8f701441da6e625d8a8be7f9e002437e"
 

 const sonic_Testnet ={
  id:14601 ,
  name: "Sonic Testnet",
  nativeCurrency: {name: "Sonic Testnet", symbol:"S", decimals : 18},
  rpcUrls: {
     default : {http : ["https://rpc.testnet.soniclabs.com"]},
     public: { http :["https://rpc.testnet.soniclabs.com"]}

  },

  testnet : true
}

 const queryClient = new  QueryClient()

 const config = getDefaultConfig({
   appName : "SwitchPay",
  projectId,
  chains:[sonic_Testnet],
  
 })

  const theme = darkTheme({
      accentColor: '#7b3fe4',
  accentColorForeground: "white",
  fontStack : "system",
  overlayBlur: "small",
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client = {queryClient}>
        <RainbowKitProvider theme={theme} chains={[sonic_Testnet]}>
          <App/>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    
  </StrictMode>,
)
