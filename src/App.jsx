
import { SettingsContextProvider } from './contexts/SettingsContextProvider'
import { Timer } from './components/timer'
import { Settings } from './components/Settings'
import { useState } from 'react'

function App() {

  const [settings, setScreen] = useState(false)

  return (

    <main>
      <SettingsContextProvider>
        {settings ? <Settings setScreen={setScreen}></Settings> : <Timer setScreen={setScreen}></Timer>}
      </SettingsContextProvider>

    </main>
  )
}

export default App
