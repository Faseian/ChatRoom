import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-400 text-white font-mono">
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/sign-up-screen" element = {<Signup/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
