import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ButtonPlay } from './ButtonPlay';
import { ButtonPause } from './ButtonPause';
import { ButtonSettings } from './ButtonSettings';

const red = '#E13737'

export const Timer = () => {

    return (
        <div>

            <CircularProgressbar value={60} text={'60%'} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor: '#D6DBDF '
            })}></CircularProgressbar>

            <div style={{ marginTop: '20px' }}>
                <ButtonPlay></ButtonPlay>
                <ButtonPause></ButtonPause>
                <ButtonSettings></ButtonSettings>
            </div>
                

        </div>
    )

}
