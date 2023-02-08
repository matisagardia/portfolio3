import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

import "./style.css";
import { DarkModeProvider } from "./components/contexts/ThemeContext";

function App() {


  return (
    <>
    <DarkModeProvider>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </DarkModeProvider>
    </>
  )
}

export default App
