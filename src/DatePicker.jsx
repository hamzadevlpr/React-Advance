import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div className="datepicker mx-auto rounded-lg">
            <Datepicker value={value} onChange={handleValueChange}  startDate={value.startDate} endDate={value.endDate}/>
        </div>
    );
};

export default DatePicker;