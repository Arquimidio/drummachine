import DrumPad from "./DrumPad"
import Display from "./Display";



export default function DrumMachine(
    {
        bank, 
        selectedBank, 
        changeBank, 
        pressedKey, 
        pressKey, 
        release, 
        volume, 
        changeVolume,
        isOn,
        toggleOnOff
    }
){
    return(
        <div id="drum-machine">
            <div className="drum-pad--container">
                {selectedBank.map(pad => (
                    <DrumPad 
                        key={pad.id}
                        pad={pad} 
                        pressedKey={pressedKey}
                        isOn={isOn}
                        release={release}
                        pressKey={pressKey}
                    />
                ))}      
            </div>
            <Display 
                toggleOnOff={toggleOnOff}
                volume={volume}
                changeVolume={changeVolume}
                changeBank={changeBank}
                bank={bank}
                isOn={isOn}
            />
        </div>
    )
}