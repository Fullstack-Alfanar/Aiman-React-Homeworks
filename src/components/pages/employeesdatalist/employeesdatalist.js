import React from "react";
import { useState, useEffect } from "react";
import "../employeesdatalist/employeesdatalist.css"

function EmployeesDataList() {
    const [employeelist, setEmployeesList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("employees")) {
            setEmployeesList(JSON.parse(localStorage.getItem("employees")));
        }
    }, []);
    return (
        <table>
            <thead>
                <tr className="td-contaner1">
                    <td><label>First Name</label></td>
                    <td><label>Last Name</label></td>
                    <td><label>Jop Title</label></td>
                    <td><label>City</label></td>
                    <td><label>Country</label></td>
                    <td><label>Birth Date</label></td>
                    <td><label>Image</label></td>
                </tr>
            </thead>
            <tbody>
                {employeelist.map(employeedata =>
                    <tr className="td-contaner2">
                        <td><label>{employeedata.fname}</label></td>
                        <td><label>{employeedata.lname}</label></td>
                        <td><label>{employeedata.job}</label></td>
                        <td><label>{employeedata.city}</label></td>
                        <td><label>{employeedata.country}</label></td>
                        <td><label>{employeedata.born}</label></td>
                        <td><img alt="" src={employeedata.image} /></td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}
export default EmployeesDataList