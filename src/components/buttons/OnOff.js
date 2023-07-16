import React from "react";

function OnOff() {
    return (
        <section style={style.powerSwitch_Cont}>
            <button style={style.on_Btn}>On</button>
            <button style={style.off_Btn}>Off</button>
        </section>
    );
}

export default OnOff;

const style = {
    powerSwitch_Cont: {
        display: "flex",
        // border: ".1rem solid blue",
        marginTop: ".5rem",
    },

    on_Btn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",
        color: "green",
        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: ".3rem",
    },

    off_Btn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",
        color: "red",
        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: ".3rem",
    },
};
