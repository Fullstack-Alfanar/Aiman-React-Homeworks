import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import "../navbar/navbar.css"
import RoutingApp from '../route/route';

function NavigationBar() {
    return (
        <BrowserRouter>
            <div className="link-container">
                <Link className="undline" to="/">Home Page</Link>
                <Link className="undline" to="addemployee">Adding Employee Data</Link>
                <Link className="undline" to="brandinfo">Adding Brand Data</Link>
                <Link className="undline" to="employeeslist">Employyee's List</Link>
                <Link className="undline" to="brandslist">Brand's List</Link>
            </div>
            <div>
                <RoutingApp />
            </div>

        </BrowserRouter>
    )
}
export default NavigationBar