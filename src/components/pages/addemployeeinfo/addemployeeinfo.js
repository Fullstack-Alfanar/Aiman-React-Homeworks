import { useState } from "react"
import React from 'react';
import "../addemployeeinfo/addemployeeinfo.css"

function AddEmployeeInfo() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [birthday, setBirthday] = useState(0);
    const [img, setImg] = useState("");

    let employeeobj = {
        fname: firstname,
        lname: lastname,
        job: jobtitle,
        city: city,
        country: country,
        born: birthday,
        image: img
    };

    const employeearr = (localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];

    function validationFunction() {
        if (firstname.length < 2 || firstname.length > 30) {
            alert("Invalid Name");
        } else {
            if (lastname.length < 2 || lastname.length > 30) {
                alert("Invalid Family Name")
            } else {
                if (jobtitle < 5 || jobtitle.length > 20) {
                    alert("Invalid Job Title ");
                } else {
                    if (city.length < 2 || city.length > 30) {
                        alert("Invalid City Name");
                    } else {
                        if (country.length < 3 || country.length > 30) {
                            alert("Invalid Country");
                        } else {
                            setLocalSrorage()
                        }
                    }
                }
            }
        }
    }

    function setLocalSrorage() {
        employeearr.push(employeeobj);
        localStorage.setItem("employees", JSON.stringify(employeearr));
    }

    return (
        <div className="emp-container">
            <h4>Employee Information</h4>
            <form>
                <ul>
                    <li>
                        <label>First Name : </label>
                        <input className="fname" placeholder="First Name" type="text" onChange={(a) => setFirstname(a.target.value)} ></input>
                    </li>
                    <li>
                        <label>Last Name : </label>
                        <input className="lname" placeholder="Last Name" type="text" onChange={(a) => setLastname(a.target.value)} ></input>
                    </li>
                    <li>
                        <label>Job Title : </label>
                        <input className="jtitle" placeholder="Jop Title" type="text" onChange={(a) => setJobtitle(a.target.value)}></input>
                    </li>
                    <li>
                        <label>City : </label>
                        <input className="city" placeholder="City" type="text" onChange={(a) => setCity(a.target.value)}></input>
                    </li>
                    <li>
                        <label>Country : </label>
                        <input className="country" placeholder="Country" type="text" onChange={(a) => setCountry(a.target.value)} ></input>
                    </li>
                    <li>
                        <label>Employe Birthday : </label>
                        <input className="price" placeholder="Birthday" type="date" onChange={(a) => setBirthday(a.target.value)}></input>
                    </li>
                    <li>
                        <label>Employee Image : </label>
                        <input className="empimg" placeholder="IMG link" type="text" onChange={(a) => setImg(a.target.value)}></input>
                    </li>
                    <div className="button-div">
                        <button onClick={validationFunction}>Save data</button>
                    </div>

                </ul>
            </form>
        </div >
    )
}
export default AddEmployeeInfo




