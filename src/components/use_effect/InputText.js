import react, { useState, useEffect } from 'react';

const InputText = () => {
    const input = react.useRef()

    react.useEffect(() => {
        input.current.focus()
    }, [])


    return <>

        <input ref={input} type={'text'}/>
    </>
}

export default InputText;