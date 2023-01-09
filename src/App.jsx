import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App
