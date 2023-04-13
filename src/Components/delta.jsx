import React from "react";

const Delta = (props) => {
    return (
        <div>
            <h2>Delta</h2>
            <input placeholder="What's Your Name?" onChange={props.changeName}/>
        </div>
    )
}

export default Delta