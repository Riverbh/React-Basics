import React, { useState } from "react";

const Form = (props) => {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTask(userInput)
        setUserInput('')
    }

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <form className="card" onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Add Task</button>
        </form>
    )
}

export default Form