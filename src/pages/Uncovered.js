//!   withOut Cover
import React from "react";
import BTNPad from "../components/pad/BTN_Pad";
// import SearchBar from "../components/searchBar/SearchBar";

function Uncovered() {
    return (
        <div style={style.uncovered_cont}>
            {/* <SearchBar /> */}
            <BTNPad />
        </div>
    );
}

export default Uncovered;

const style = {
    uncovered_cont: {
        borderTop: ".3rem inset darkRed",
        borderRadius: ".8rem",
        backgroundColor: "darkRed",
        height: "27.9rem",
        marginTop: "1rem",
    },
};
