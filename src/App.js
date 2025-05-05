import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Booking from './routes/Booking'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} className="App" />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <About />
      <Footer />
    </div>
  )
}

export default App