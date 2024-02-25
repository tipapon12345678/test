import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Detil = ({ rating }) => {
  return (
    <div className="">
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}

        styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textColor: '#fff',
                 textSize: '36px',
                 textWeight:'700',
                 trailColor: '#555555',
            })}
    />
</div>
  )
}

export default Detil