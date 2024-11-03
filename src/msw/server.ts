import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)

export async function msw() {
    // switch the PROD to DEV be use in development mode and vice-verser for production mode.
    if (import.meta.env.PROD) {
        //  and comment this import in DEV mode
        await import('./mockServiceWorker.js?worker')
        return worker.start();
    }
}
