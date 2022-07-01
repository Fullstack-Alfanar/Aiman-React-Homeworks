import React, { useEffect, useState } from "react";
import "./updatTime.css"
function UpdateTime() {
    const [time, setTime] = useState(0);
    const [date, setDate] = useState("");
    useEffect(() => {
        setInterval(() => {
            const currenttime = new Date();
            setTime(currenttime.toLocaleTimeString());
        }, 1000);
        const currentdate = new Date();
        setDate(currentdate.toLocaleDateString());
    }, []);
    return (
        <div className="time-container">
            <label>Time: {time} , Date: {date}</label>
        </div>
    )
}
export default UpdateTime;