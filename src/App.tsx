import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Particle} from "./components/particle/Particle.tsx";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header />
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App