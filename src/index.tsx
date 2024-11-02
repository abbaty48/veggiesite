import { createRoot } from 'react-dom/client'
import App from '@layouts/app.tsx'
import { StrictMode } from 'react'
import '@src/styles/index.css'

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') { return; }
    const { worker } = await import('@mocks/browser')
    return await worker.start();
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>
    )
})
