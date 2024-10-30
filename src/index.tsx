import { createRoot } from 'react-dom/client'
import App from '@layouts/app.tsx'
import { StrictMode } from 'react'
import '@src/styles/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
