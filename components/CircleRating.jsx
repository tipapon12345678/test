import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircleRating = ({ rating }) => {
    return (
        <div className="">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                        textColor: '#000',
                         textSize: '36px',
                         textWeight:'700',
                        
                    })}
            />
        </div>
    );
};

export default CircleRating;