import { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App;