import { useRef } from "react"

export default function DrumPad({ pad, pressedKey, isOn, release, pressKey}){
    const audioReference = useRef(null);
    const padWasTriggered = pressedKey.toLowerCase() === pad.keyTrigger.toLowerCase();
    
    return(
        <div 
            onMouseDown={() => pressKey({ key: pad.keyTrigger.toLowerCase()})} 
            onMouseUp={release}
            className={`drum-pad ${padWasTriggered && isOn? 'triggered' : ''}`}
            id={pad.id}
        >
            <div>{ pad.keyTrigger }</div>
            <audio preload="true" ref={audioReference} id={pad.keyTrigger} className="clip" src={pad.url}></audio>
        </div>
    )
}