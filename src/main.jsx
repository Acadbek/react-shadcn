import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './router'
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { DialogProvider } from './context/dialog-context'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DialogProvider>
      <TooltipProvider>
        <Routers />
        <Toaster />
      </TooltipProvider>
    </DialogProvider>
  </BrowserRouter>
)
