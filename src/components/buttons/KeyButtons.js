import React from "react";

function KeyButtons() {
    return (
        <section style={style.keyBtn_Cont}>
            <button style={style.k_btnD}>Delete</button>
            <button style={style.k_btnS}>Space</button>
            <button style={style.k_btnE}>Enter</button>
        </section>
    );
}

export default KeyButtons;

const style = {
    keyBtn_Cont: {
        display: "flex",
        marginTop: ".5rem",
    },

    k_btnS: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",
        width: "6rem",
        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: ".4rem",
    },

    k_btnD: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",
        width: "6rem",
        backgroundColor: "yellow",
        color: "red",
        fontWeight: "bold",
        padding: ".4rem",
    },

    k_btnE: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",
        width: "6rem",
        backgroundColor: "yellow",
        color: "green",
        fontWeight: "bold",
        padding: ".4rem",
    },
};
