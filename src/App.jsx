import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [timerId, setTimerId] = useState(null)
    const [watch, setWatch] = useState(0)
  
    const start = ()=>{
        if(!timerId) {
            let id = setInterval(()=>{
                setWatch((prev)=>prev+1);
            },1000);
            setTimerId(id);
        }

    }
    const pause =()=>{
        clearInterval(timerId)
        setTimerId(null)


    }

    const reset =()=>{
        clearInterval(timerId);
        setWatch(0)
    }

  return (
    <div >
    <h1>Stopwatch</h1> 
    <h1>{watch}</h1>
    <div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Stop</button>
        <button onClick={pause}> Pause</button>
    </div>




</div>
)
}

export default App
