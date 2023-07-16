import React from "react";

function Numbers() {
    return (
        <section style={style.numbers_Cont}>
            <button style={style.btn}>1</button>
            <button style={style.btn}>2</button>
            <button style={style.btn}>3</button>
            <button style={style.btn}>4</button>
            <button style={style.btn}>5</button>
            <button style={style.btn}>6</button>
            <button style={style.btn}>7</button>
            <button style={style.btn}>8</button>
            <button style={style.btn}>9</button>
            <button style={style.btn}>0</button>
        </section>
    );
}

export default Numbers;

const style = {
    numbers_Cont: {
        display: "flex",
        marginTop: "2rem",
    },

    btn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        margin: "0 auto",

        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: ".4rem",
    },
};
