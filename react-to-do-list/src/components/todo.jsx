import React, { useState } from 'react';

export default function Todo() {
    const [text, setText] = useState('');
    const [todolist, setTodolist] = useState(['this is khizar', 'learn React']);

    const handleDelete = (indexToRemove) => {
        setTodolist(todolist.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => {
                    if (text.trim()) {
                        setTodolist([...todolist, text.trim()]);
                        setText('');
                    }
                }}>add me</button>
            </div>
            <ul style={{ width: '10%' }}>
                {todolist.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
