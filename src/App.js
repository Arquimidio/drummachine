import DrumMachine from "./components/DrumMachine";
import { useState, useEffect, useCallback } from "react";
import useToggle from "./hooks/useToggle"
import data from "./data/banks"

function App() {
  const {bankOne, bankTwo} = data
  const possibleKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
  const [pressedKey, setPressedKey] = useState('');
  const [volume, setVolume] = useState(0.5)
  const [bank, changeBank] = useToggle(false)
  const [selectedBank, setSelectedBank] = useState(() => bankOne)
  const [isOn, toggleOnOff] = useToggle()

  useEffect(() =>{
      setSelectedBank(bank? bankTwo : bankOne)
  }, [bank])

  function changeVolume(event){
    const { value } = event.target
    setVolume(value)
  } 
  
  const pressKey = useCallback(event =>{
    const { key } = event;

    if(isOn && possibleKeys.includes(key.toLowerCase())){
      const sound = document.getElementById(key.toUpperCase())
      const display = document.getElementById('display')
      display.innerText = event.id || selectedBank.find(elt => elt.keyTrigger === key.toUpperCase()).id
      sound.currentTime = 0
      sound.volume = volume
      sound.play()
      setPressedKey(key);
    }
  }, [isOn, volume, selectedBank])
  
  const release = () => {
    setPressedKey('');
  }

  useEffect(() => {
    window.addEventListener('keydown', pressKey);
    window.addEventListener('keyup', release)

    return () => {
      window.removeEventListener('keydown', pressKey);
      window.removeEventListener('keyup', release)
    }
  }, [pressKey])

  return (
    <DrumMachine 
      volume={volume} 
      changeVolume={changeVolume} 
      pressKey={pressKey} 
      pressedKey={pressedKey} 
      release={release}
      bank={bank}
      selectedBank={selectedBank}
      changeBank={changeBank}
      isOn={isOn}
      toggleOnOff={toggleOnOff}
    />
  );
}

export default App;
