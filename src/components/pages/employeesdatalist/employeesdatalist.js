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
                {employeelist.map(data =>
                    <tr className="td-contaner2">
                        <td><label>{data.fname}</label></td>
                        <td><label>{data.lname}</label></td>
                        <td><label>{data.job}</label></td>
                        <td><label>{data.city}</label></td>
                        <td><label>{data.country}</label></td>
                        <td><label>{data.born}</label></td>
                        <td><img alt="" src={data.image} /></td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}
export default EmployeesDataList