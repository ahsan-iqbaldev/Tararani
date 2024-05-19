import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { FaCalendarDays } from "react-icons/fa6";
import 'react-date-picker/dist/DatePicker.css';

// import "react-date-picker/dist/react-date-picker-cssmodules.css";

const FormDatePicker = ({ name, label }) => {
  const [startDate, setStartDate] = useState();
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <DatePicker
        showIcon
        icon={<FaCalendarDays className="mt-1" />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="indent-2 text-lg"
        id={name}
        name={name}
      />
    </div>
  );
};

export default FormDatePicker;