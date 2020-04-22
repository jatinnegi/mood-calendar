import React from "react";
import PropTypes from "prop-types";

const Calendar = ({ year, setMoodOnDate }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDates = (firstDay, daysInMonth) => {
    let dateRows = new Array(6);
    let date = 1;

    for (let i = 0; i < 6; i++) {
      let dateRow = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          dateRow.push("");
        } else if (date > daysInMonth) {
          break;
        } else {
          dateRow.push(date);
          date++;
        }
      }
      dateRows[i] = dateRow;
    }

    if (dateRows[dateRows.length - 1].length === 0) {
      dateRows.pop();
    }

    return (
      <tbody>
        {dateRows.map((dateRow, index) => (
          <tr key={index}>
            <td
              className={dateRow[0] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[0]}
            </td>
            <td
              className={dateRow[1] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[1]}
            </td>
            <td
              className={dateRow[2] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[2]}
            </td>
            <td
              className={dateRow[3] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[3]}
            </td>
            <td
              className={dateRow[4] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[4]}
            </td>
            <td
              className={dateRow[5] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[5]}
            </td>
            <td
              className={dateRow[6] ? "date" : ""}
              onClick={(e) => setMoodOnDate(e)}
            >
              {dateRow[6]}
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="calendar">
      {months.map((month, index) => {
        const firstDay = new Date(year, index).getDay();
        const daysInMonth = 32 - new Date(year, index, 32).getDate();

        return (
          <div className="month" key={index}>
            <p className="month-name">{month}</p>
            <table cellSpacing="10">
              <thead>
                <tr>
                  <td>Sun</td>
                  <td>Mon</td>
                  <td>Tue</td>
                  <td>Wed</td>
                  <td>Thu</td>
                  <td>Fri</td>
                  <td>Sat</td>
                </tr>
              </thead>
              {getDates(firstDay, daysInMonth)}
            </table>
          </div>
        );
      })}
    </div>
  );
};

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  setMoodOnDate: PropTypes.func.isRequired,
};

export default Calendar;
