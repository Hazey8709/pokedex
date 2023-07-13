import React from "react";

function DCircles() {
    return (
        <section style={style.circles_Cont}>
            <div style={style.circle_1}></div>
            <div style={style.circle_2}></div>
            <div style={style.circle_3}></div>
            {/* <OpenDexBtn style={style.btnText} /> */}
        </section>
    );
}

export default DCircles;

const style = {
    circles_Cont: {
        // border: ".2rem solid black",
        width: "21rem",
        height: "7rem",
        marginTop: "5px",
        marginLeft: "5px",
    },

    circle_1: {
        position: "absolute",
        border: ".2rem solid black",
        borderRadius: "70px",
        backgroundColor: "darkRed",
        width: "75px",
        height: "75px",
        marginTop: ".8rem",
        marginLeft: "7rem",
        boxShadow: " 5px 1px 10px 1px darkRed",
    },

    circle_2: {
        position: "absolute",
        border: ".2rem solid black",
        borderRadius: "70px",
        backgroundColor: "darkRed",
        width: "50px",
        height: "50px",
        marginTop: "1.6rem",
        marginLeft: "12.5rem",
        boxShadow: " 5px 1px 10px 1px darkRed",
    },

    circle_3: {
        border: ".2rem solid black",
        borderRadius: "70px",
        backgroundColor: "darkRed",
        width: "100px",
        height: "100px",
        boxShadow: " 5px 1px 10px 1px darkRed",
    },
};
