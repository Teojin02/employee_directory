import React from "react";

function Employee(props) {
    return (
        <div style={{width: 200, border: "solid"}}>
            <p>Name: {props.name}</p>
            <p>Position: {props.position}</p>
        </div>
    )
}
export default Employee;