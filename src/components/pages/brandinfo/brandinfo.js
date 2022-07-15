import { useState } from "react"
import React from 'react';
import "../brandinfo/brandinfo.css"

function BrandInfo() {
    const [brandname, setBrandName] = useState("shose")
    const [brandsize, setBrandSize] = useState(0)
    const [brandcost, setBrandCost] = useState(0)
    const [brandimg, setBrandImg] = useState("img")

    let brandarr = [];
    let brandobj = {
        bname: brandname,
        bsize: brandsize,
        bprice: brandcost,
        bimg: brandimg
    };

    if (localStorage.getItem("brand")) {
        brandarr = JSON.parse(localStorage.getItem("brand"))
    }

    function setLocalSrorage1() {
        brandarr.push(brandobj);
        localStorage.setItem("brand", JSON.stringify(brandobj));
    }

    return (
        <div className="bri-container">
            <h4>Brand Information</h4>
            <ul>
                <li className="li-comtainer">
                    <label>Enter Barnd Name : </label>
                    <input className="name" placeholder="Shose Brand" type="text" onChange={(a) => setBrandName(a.target.value)}></input>
                </li>
                <li>
                    <label>Enter Barnd Size : </label>
                    <input className="size" placeholder="Shose Size" type="number" onChange={(a) => setBrandSize(a.target.value)} ></input>
                </li>
                <li>
                    <label>Enter Barnd Cost : </label>
                    <input className="cost" placeholder="Shose Price" type="number" onChange={(a) => setBrandCost(a.target.value)}></input>
                </li>
                <li>
                    <label>Barnd Imag Link : </label>
                    <input className="img" placeholder="Shose Image" type="text" onChange={(a) => setBrandImg(a.target.value)}></input>
                </li>
                <div className="button-div">
                    <button onClick={setLocalSrorage1} >Save Data</button>
                </div>
            </ul >
        </div >
    )
}
export default BrandInfo


