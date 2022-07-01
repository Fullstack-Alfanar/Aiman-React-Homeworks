// import { useState } from "react"
import BrandDataDisplay from "../branddatadisplay/branddatadisplay.js"
import "./branddatalist.css"

function BrandDataList(time) {
    return (
        <div className="main-container">
            <BrandDataDisplay brandN={"nike"} brandS={40} brandC={200 + "$"} brandImg={"https://images.stockx.com/images/Nike-Free-Metcon-3-Black-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1626090525"} />
            <BrandDataDisplay brandN={"UnderArmour"} brandS={35} brandC={150 + "$"} brandImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9IM8BkdMrlgy5Ft8KTkiJ9JEkxgJy2BUsOQ1EhNbexYNWrMYWcnFnhXBPDDSkuMzP6E&usqp=CAU"} />
            <BrandDataDisplay brandN={"skecher"} brandS={43} brandC={250 + "$"} brandImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRSHVQeEEiPTd1RNWG0cojYsCF0Wq4j3zcN-QRnr4As6vQn3i7dCOxvynjSVzSFjZBoY&usqp=CAU"} />
            <BrandDataDisplay brandN={"Sacuny"} brandS={39} brandC={300 + "$"} brandImg={"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/08/Saucony.jpg"} />
            <BrandDataDisplay brandN={"New Balance"} brandS={46} brandC={400 + "$"} brandImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh90R2TMDFqDaamUWfr7sEV8x7FzM4vUwQDFFwy14y6Pl6iFZSVahluIb9qfXvU0n1-iE&usqp=CAU"} />
        </div>
    )
}
export default BrandDataList
