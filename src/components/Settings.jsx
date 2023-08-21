
import ReactSlider from "react-slider"

export const Settings = () => {

    return (
        <div style={{ textAlign: 'left' }}>

            <label>Session Length</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}></ReactSlider>
            <label>break Length</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}></ReactSlider>

        </div>
    )

}
