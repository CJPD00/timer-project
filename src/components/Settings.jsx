
import ReactSlider from "react-slider"
import { useContext } from "react"
import { SettingsContext } from "../contexts/SettingsContext"
import { ButtonBack } from "./ButtonBack"
import { useEffect } from "react"

export const Settings = (props) => {

    const { session, breakLength } = useContext(SettingsContext)
    const { setsession, setbreakLength,settings,setsettings } = useContext(SettingsContext)

    const {setScreen}=props

    useEffect(() => {

        setScreen(settings)
    
    }, [settings])

    return (
        <div style={{ textAlign: 'left' }}>

            <label>Session Length : {session}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={session}
                min={1}
                max={120}
                onChange={val => setsession(val)}></ReactSlider>

            <label>break Length : {breakLength}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={breakLength}
                min={1}
                max={120}
                onChange={val => setbreakLength(val)}></ReactSlider>

            <div style={{marginTop:'25px'}}>
                <ButtonBack className='back' onClick={()=>setsettings(false)}></ButtonBack>
            </div>

        </div>
    )

}
