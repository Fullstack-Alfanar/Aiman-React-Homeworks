import React from "react"
import "./branddatadisplay.css"

function BrandDataDisplay(branddata) {
    return (
        <div className="maincontainer1">
            <div>
                <label>Brand Name : {branddata.brandN} </label>
            </div>
            <div>
                <label>Brand Size : {branddata.brandS}</label>
            </div>
            <div>
                <label>Brand Price : {branddata.brandC}</label>
            </div>
            <div>
                <label>Brand Image :</label>
            </div>
            <div className="imagcontainer">
                <img alt="" src={branddata.brandImg} />
            </div>
        </div>
    )
}
export default BrandDataDisplay
