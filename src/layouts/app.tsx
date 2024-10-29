import Hero from "./sections/hero/hero"
import Us from "./sections/about/about"
import Recipes from "./sections/recipes/recipes"
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
        </main>
    )
}

export default App
