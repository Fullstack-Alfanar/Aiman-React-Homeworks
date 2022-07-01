import { useState } from "react"
import BrandDataDisplay from "../branddatadisplay/branddatadisplay.js"
import "../brandata/branddata.css"

function BrandData() {
    const [brandname, setBrandName] = useState("")
    const [brandsize, setBrandSize] = useState(0)
    const [brandcost, setBrandCost] = useState(0)
    const [brandimg, setBrandImg] = useState("")

    return (
        <div className="maincontainer">
            <div className="labelcontainer">
                <label>Enter Barnd Name : </label>
                <input className="name" placeholder="Shose Brand" type="text" onChange={(a) => setBrandName(a.target.value)}></input>
            </div>
            <div className="labelcontainer" >
                <label>Enter Barnd Size : </label>
                <input className="size" placeholder="Shose Size" type="number" onChange={(a) => setBrandSize(a.target.value)} ></input>
            </div>
            <div className="labelcontainer">
                <label>Enter Barnd Cost: </label>
                <input className="cost" placeholder="Shose Price" type="number" onChange={(a) => setBrandCost(a.target.value)}></input>
            </div>
            <div className="labelcontainer">
                <label>Barnd Imag Link : </label>
                <input className="img" placeholder="Shose Image" type="text" onChange={(a) => setBrandImg(a.target.value)}></input>
            </div>
            <div>
                <BrandDataDisplay brandN={brandname} brandS={brandsize} brandC={brandcost} brandImg={brandimg} />
            </div>
        </div>
    )
}
export default BrandData
