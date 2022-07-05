import React from "react"
import { useEffect } from "react";
import { useState } from "react";

function BrandsList() {
    const [brandlist, setBrandList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("brand")) {
            setBrandList(JSON.parse(localStorage.getItem("brand")));
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
                </tr>
            </thead>
            <tbody>
                {brandlist.map(branddata =>
                    <tr className="td-contaner2">
                        <td><label>{branddata.bname}</label></td>
                        <td><label>{branddata.bsize}</label></td>
                        <td><label>{branddata.bprice}</label></td>
                        <td><img alt="" src={branddata.bimg} /></td>
                    </tr>
                )
                }
            </tbody>
        </table>




    )
}
export default BrandsList

