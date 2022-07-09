import Toggler from "./Toggler"

export default function Display({ volume, changeVolume, changeBank, toggleOnOff, bank, isOn}){

    return(
        <div className="display--container">
            <Toggler toggleFn={toggleOnOff} state={isOn} text="Power"/>
            <div id="display" className="display--sound"></div>
            <div>
                <div>Volume: {volume * 100}%</div>
                <input  
                    id="volume-control"
                    max={1}  
                    min={0}  
                    step={0.1}   
                    type="range"  
                    onChange={changeVolume}  
                    value={volume}   
                    disabled={!isOn}
                />
            </div>
            <Toggler toggleFn={() => isOn && changeBank()} state={bank} text="Bank"/>
        </div>
    )
}