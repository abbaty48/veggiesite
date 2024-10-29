import Hero from "./sections/hero/hero"
import Us from "./sections/about/about"
import Recipes from "./sections/recipes/recipes"
import Contact from "./sections/contact/contact"
import Specials from "./sections/specials/specials"
import Jumbotron from "./sections/jumbotron/jumbotron"

function App() {
    return (
        <main>
            <Hero />
            <Jumbotron />
            <Specials />
            <Us />
            <Recipes />
            <Contact />
        </main>
    )
}

export default App
