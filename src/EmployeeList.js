import React from 'react';
import Employee from "./Employee"

function EmployeeList(props) {
    let employees = props.filteredEmployees.map((employee, i ) => {
        return <Employee key={i}  name={employee.name} position={employee.position} />
    })
    return (
        <div>
            {employees}
        </div>
    )
}

export default EmployeeList;