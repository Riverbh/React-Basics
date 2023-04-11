import React from "react";

const Charlie = (props) => {

    if(props.num === undefined) return <h2>No Number :(</h2>
    return (
        <h2>{props.num > 50 ? 'Thats a Big Number' : 'Thats a Small Number'}</h2>
    )
}

export default Charlie