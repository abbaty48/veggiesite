import { createRoot } from 'react-dom/client'
import { msw } from '@msw/server'
import App from '@layouts/app.tsx'
import { StrictMode } from 'react'
import '@src/styles/index.css'

msw().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>
    )
})
