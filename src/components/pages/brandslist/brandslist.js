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
                    <td><label>Brand Name</label></td>
                    <td><label>Brand Size</label></td>
                    <td><label>Brand Price</label></td>
                    <td><label>Brand Image</label></td>
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

