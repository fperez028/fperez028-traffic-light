import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("none");

    const lightColorStyle = (thisColor) => ({
        boxShadow: color === thisColor ? `0 0 25px 10px ${thisColor}` : "none",
        width: "60px",
        height: "60px",
        cursor: "pointer"
    });

    const cycleColor = () => {
        if (color === "none") setColor("yellow");
        else if (color === "red") setColor("green");
        else if (color === "green") setColor("yellow");
        else if (color === "yellow") setColor("red");
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark m-0" style={{width: "20px", height: "100px"}}></div>
            <div className="bg-dark shadow p-3 m-0 rounded d-flex flex-column align-items-center" style={{ width: "100px" }}>
                <div
                    className="rounded-circle bg-danger my-1"
                    style={lightColorStyle("red")}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className="rounded-circle bg-warning my-1"
                    style={lightColorStyle("yellow")}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className="rounded-circle bg-success my-1"
                    style={lightColorStyle("green")}
                    onClick={() => setColor("green")}
                ></div>
            </div>
            <button className="btn btn-secondary shadow mt-3" onClick={cycleColor}>
                Cycle Light
            </button>
            <button className="btn btn-secondary shadow mt-3" onClick={() => setColor("none")}>
                Turn Off
            </button>
        </div>
    );
};