export default function Toggler({ state, toggleFn, text}){
    return(
        <div className="toggler--container">
            <div>{text}</div>
            <div onClick={toggleFn} className={`togglerBox ${state? 'toggler--on' : 'toggler--off'}`}></div>
        </div>
    )
}