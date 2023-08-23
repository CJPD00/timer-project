import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ButtonPlay } from './ButtonPlay';
import { ButtonPause } from './ButtonPause';
import { ButtonSettings } from './ButtonSettings';
import { useContext } from "react"
import { SettingsContext } from "../contexts/SettingsContext"
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ButtonReset } from './ButtonReset';

const red = '#E13737'
const green = '#28EB25 '

export const Timer = (props) => {

    const sInfo = useContext(SettingsContext)

    const [seconds, setseconds] = useState(sInfo.session * 60)
    const [mode, setmode] = useState('session')

    const { settings, setsettings } = useContext(SettingsContext)
    const { setScreen } = props

    const [isPause, setisPause] = useState(true)

    const secondsRef = useRef(seconds)
    const isPauseRef = useRef(isPause)
    const modeRef = useRef(mode)

    useEffect(() => {

        setScreen(settings)

    }, [settings])

    const play = () => {

        setseconds(sInfo.session * 60)

    }

    const take = () => {

        secondsRef.current--

        setseconds(secondsRef.current)

    }

    const changeMode = () => {

        const nMode = modeRef.current === 'session' ? 'break' : 'session'
        const nSeconds = nMode === 'session' ? sInfo.session * 60 : sInfo.breakLength * 60

        setmode(nMode)
        modeRef.current = nMode

        setseconds(nSeconds)
        secondsRef.current = nSeconds

    }

    useEffect(() => {

        play()

        const interval = setInterval(() => {

            if (isPauseRef.current) return
            if (secondsRef.current === 0) {changeMode(); document.getElementById('beep').play();}
            take()

        }, 1000);

        return () => clearInterval(interval)

    }, [sInfo])

    const totalSeconds = mode === 'session' ? sInfo.session * 60 : sInfo.breakLength * 60
    const percentage = Math.round(seconds / totalSeconds * 100)

    const minutes = Math.floor(seconds / 60)
    let secondsScreen = seconds % 60

    if (secondsScreen < 10) secondsScreen = `0${secondsScreen}`


    return (
        <div>
            <audio src='/public/beep-09.mp3' id='beep'></audio>
            <CircularProgressbar value={percentage} text={`${minutes}:${secondsScreen}`} styles={buildStyles({
                textColor: '#fff',
                pathColor: mode === 'session' ? red : green,
                trailColor: '#D6DBDF'
            })}></CircularProgressbar>

            <div style={{ marginTop: '20px' }}>
                {isPause ? <ButtonPlay onClick={() => { setisPause(false); isPauseRef.current = false }}></ButtonPlay> : <ButtonPause onClick={() => { setisPause(true); isPauseRef.current = true }}></ButtonPause>}
                <ButtonReset onClick={() => {
                    const neSeconds = mode === 'session' ? sInfo.session * 60 : sInfo.breakLength * 60;
                    setseconds(neSeconds);
                    secondsRef.current = neSeconds;
                }}></ButtonReset>
                <ButtonSettings onClick={() => setsettings(true)}></ButtonSettings>
            </div>


        </div>
    )

}
