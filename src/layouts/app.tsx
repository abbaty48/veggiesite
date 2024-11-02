import Hero from "@sections/hero/hero"
import Us from "@sections/about/about"
import Veggies from "@sections/veggies/veggies"
import Contact from "@sections/contact/contact"
import Specials from "@sections/specials/specials"
import Jumbotron from "@sections/jumbotron/jumbotron"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <>
                <Hero />
                <Jumbotron />
                <Specials />
                <Us />
                <Veggies />
                <Contact />
            </>
        </QueryClientProvider>
    )
}

export default App
