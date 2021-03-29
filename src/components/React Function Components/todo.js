import React, { useState } from 'react';

const data = [
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
];


function TodoLIst() {
    const [Todo, setTodo] = useState(data);

    const onTodoClick = (index) => {
        const newTodo = [...Todo];
        newTodo[index].completed = !newTodo[index].completed;
        setTodo(newTodo);
    }

    return (
        <div className='container'>
            <h1 >Todo list</h1>
            {Todo.map((task, index) => (
                <div className='tasks'
                    onClick={() => onTodoClick(index)} >

                    <div
                        style={{
                            textDecoration: task.completed ? "line-through" : "none"
                        }}>
                        {task.name}
                    </div>
                  <button>{task.completed ? 'V' : 'X'}</button>  
                </div>
            ))}
        </div>
    )
}
export default TodoLIst;