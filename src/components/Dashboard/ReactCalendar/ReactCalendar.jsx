import React from "react";
import Calendar from "react-calendar";

const ReactCalendar = ({ onChangeDay }) => {
  return (
    <div>
      <Calendar
        minDate={new Date()}
        className="react-calendar"
        view="month"
        onClickDay={(date) => onChangeDay(date)}
      />
    </div>
  );
};

export default ReactCalendar;
