
import { useState } from "react"
import { SettingsContext } from "./SettingsContext"

export const SettingsContextProvider = ({ children }) => {

    const [session, setsession] = useState(25)
    const [breakLength, setbreakLength] = useState(5)
    const [settings, setsettings] = useState(false)

    return (
        <SettingsContext.Provider value={{session,breakLength,settings,setsession,setbreakLength,setsettings}}>
            {children}
        </SettingsContext.Provider>
    )

}
