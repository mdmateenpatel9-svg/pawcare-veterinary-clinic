import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
