import { useState } from 'react'

import Home from './pages/Home'
import AppRoutes from './Routes'

function App() {

  const [count, setCount] = useState(0)

  return (
      <AppRoutes />
  )
}

export default App
