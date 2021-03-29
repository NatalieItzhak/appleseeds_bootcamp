import React, { useState } from 'react';


function WhatsTheTime() {
    const [state, setState] = useState({
        seconds: ''
      })
    

    const handleChange=(e)=>{

        if(e.target.name === "seconds"){
            setState(e.target.value)
        }
        else if(e.target.name === "minutes"){
            setState(e.target.value * 60)
        }
        else if(e.target.name === "hours"){
            setState(e.target.value * 3600)
        }
    


    }

    return (
        <div>
            seconds <input name='seconds' type='number'  value={state/1} onChange={handleChange}></input>
               minutes <input name='minutes' type='number' value={state/60} onChange={handleChange}></input>
               hours<input name='hours' type='number' value={state/3600}  onChange={handleChange}></input>

        </div>
    )
}
export default WhatsTheTime
