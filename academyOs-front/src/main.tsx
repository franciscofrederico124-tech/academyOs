import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRoute from './routes/mainRoute'
import "bootstrap-icons/font/bootstrap-icons.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>,
)
