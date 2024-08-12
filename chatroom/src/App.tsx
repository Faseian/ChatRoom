import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="bg-blue-400 text-white font-mono">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
