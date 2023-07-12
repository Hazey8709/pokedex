//!   withOut Cover

import React from "react";
//import { Link } from "react-router-dom";

function Uncovered() {
    return (
        <div style={style.uncovered_cont}>
            <h1>uncovered</h1>
        </div>
    );
}

export default Uncovered;

const style = {
    uncovered_cont: {
        borderTop: ".2rem solid darkRed",
        borderRadius: ".8rem",
        backgroundColor: "red",
        height: "27.9rem",
        marginTop: "1.4rem",
    },
};
