import React from 'react';
import MainPage from "../pages/mainpage/mainpage.js"
import BrandInfo from "../pages/brandinfo/brandinfo.js"
import BrandsLis from '../pages/brandslist/brandslist.js';
import AddEmployeeInfo from '../pages/addemployeeinfo/addemployeeinfo.js';
import { useRoutes } from "react-router-dom";
import EmployeesDataList from '../pages/employeesdatalist/employeesdatalist.js';

function RouteApp() {
    return (
        useRoutes([
            { path: "/", element: <MainPage /> },
            { path: "brandinfo", element: <BrandInfo /> },
            { path: "brandslist", element: <BrandsLis /> },
            { path: "addemployee", element: <AddEmployeeInfo /> },
            { path: "employeeslist", element: <EmployeesDataList /> },
        ])
    )
}

export default RouteApp