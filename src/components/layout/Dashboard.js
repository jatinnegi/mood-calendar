import React, { useState } from "react";
import Calendar from "./Calendar";

const Dashboard = () => {
  const [mood, setMood] = useState({
    laugh: false,
    smile: false,
    meh: false,
    frown: false,
    sadTear: false,
  });
  const [currentMood, setCurrentMood] = useState("");

  const { laugh, smile, meh, frown, sadTear } = mood;

  const year = 2020;

  const moodSelected = (e) => {
    let current = mood[e.target.getAttribute("name")];
    current = !current;

    if (current) {
      setCurrentMood(e.target.getAttribute("name"));
    } else {
      setCurrentMood("");
    }

    setMood({
      [e.target.getAttribute("name")]: current,
    });
  };

  const setMoodOnDate = (e) => {
    if (e.target.className) {
      e.target.classList.remove("laugh", "smile", "meh", "frown", "sadTear");
      if (currentMood) {
        e.target.classList.add(currentMood);
      }
    }
  };

  return (
    <div className="dashboard">
      <h1>{year} Mood Calendar</h1>
      <p>~ color each day depending on what your mood was / is ~</p>
      <p>Select mood:</p>
      <div className="mood-container">
        <button className={laugh ? "mood selected" : "mood"}>
          <i
            className="far fa-laugh"
            name="laugh"
            onClick={(e) => moodSelected(e)}
          ></i>
        </button>
        <button className={smile ? "mood selected" : "mood"}>
          <i
            className="far fa-smile"
            name="smile"
            onClick={(e) => moodSelected(e)}
          ></i>
        </button>
        <button className={meh ? "mood selected" : "mood"}>
          <i
            className="far fa-meh"
            name="meh"
            onClick={(e) => moodSelected(e)}
          ></i>
        </button>
        <button className={frown ? "mood selected" : "mood"}>
          <i
            className="far fa-frown"
            name="frown"
            onClick={(e) => moodSelected(e)}
          ></i>
        </button>
        <button className={sadTear ? "mood selected" : "mood"}>
          <i
            className="far fa-sad-tear"
            name="sadTear"
            onClick={(e) => moodSelected(e)}
          ></i>
        </button>
      </div>
      <p>then click on the circles below</p>
      <Calendar year={year} setMoodOnDate={setMoodOnDate} />
    </div>
  );
};

export default Dashboard;
