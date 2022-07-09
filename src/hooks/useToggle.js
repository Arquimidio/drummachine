import { useState } from "react"

export default function useToggle(startingState = true){
    const [isOn, setIsOn] = useState(startingState)

    function toggle(){
        setIsOn(prevIsOn => !prevIsOn)
    }

    return [isOn, toggle]
}