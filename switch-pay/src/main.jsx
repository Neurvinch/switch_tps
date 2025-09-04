import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WagmiProvider} from "wagmi"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { http } from 'wagmi'
import {RainbowKitProvider, darkTheme,getDefaultConfig} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css "
import './index.css'
import App from './App.jsx'


 const projectId = ""

 const queryClient = new  QueryClient()

  const theme = darkTheme({
      accentColor: '#7b3fe4',
  accentColorForeground: "white",
  fontStack : "system",
  overlayBlur: "small",
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider>
      <QueryClientProvider>
        <RainbowKitProvider>
          <App/>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    
  </StrictMode>,
)
