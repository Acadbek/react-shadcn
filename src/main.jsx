import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './router'
import { TooltipProvider } from "@/components/ui/tooltip"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider>
        <Routers />
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>,
)
