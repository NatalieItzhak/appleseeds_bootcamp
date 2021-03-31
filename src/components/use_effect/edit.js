import react, { useState } from 'react';
import InputText from './InputText';


const Editing = () => {
    const [btn, setBtn] = useState('edit')
    const [input, setInput] = useState('')


    const onBtnClick =()=>{
        if(btn === 'edit'){
            setBtn('save')
            setInput(<InputText />)
        }
        else{
            setBtn('edit')
            setInput('')
        }

    }


    return <>

        <div>{input}</div>
        <button onClick={onBtnClick}>{btn}</button>

    </>
}

export default Editing;