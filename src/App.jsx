import { useState } from 'react'
import { Timer } from './components/timer'
import { Settings } from './components/Settings'

function App() {

  const [settings, setsettings] = useState(true)

  return (

    <main>
      {settings ? <Settings></Settings> : <Timer></Timer>}
    </main>
  )
}

export default App
