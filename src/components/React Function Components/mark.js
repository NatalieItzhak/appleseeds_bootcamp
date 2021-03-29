import React, { useState } from 'react';


function MarkAndDelete() {
    const data = ["one", "two", "three", "four", "five"];
    const [state, setState] = useState(data.map(str => ({ value: str, checked: false })));

    const onDeleteClick = () => {
        const arr = state.filter(str => !str.checked);
        setState(arr);
    }

    const onBoxChange = (index) => {
        const arr = [...state];
        arr[index].checked = !arr[index].checked;
        setState(arr);
    }
    const onResetClick = () => {
        setState(data.map(str => (
            { value: str, checked: false }
        )));

    }


    return (
        <div>
            <div>
                <ul>
                    {
                        state.map((str, index) => (
                            <li
                                key={index}
                            >
                                <input
                                    type="checkbox"
                                    name={str.value}
                                    checked={str.checked}
                                    onChange={() => onBoxChange(index)}
                                />
                                {str.value}
                            </li>
                        ))
                    }
                      <button onClick={onDeleteClick}>Delete</button>
                    <button onClick={onResetClick}>Reset</button>
                </ul>
                <div>
                  
                </div>
            </div>
        </div>
    )
}

export default MarkAndDelete
