import React from "react";

function Letters() {
    return (
        <section style={style.letters_Cont}>
            <button style={style.btn}>A</button>
            <button style={style.btn}>B</button>
            <button style={style.btn}>C</button>
            <button style={style.btn}>D</button>
            <button style={style.btn}>E</button>
            <button style={style.btn}>F</button>
            <button style={style.btn}>G</button>

            <button style={style.btn}>H</button>
            <button style={style.btn}>I</button>
            <button style={style.btn}>J</button>
            <button style={style.btn}>K</button>
            <button style={style.btn}>L</button>
            <button style={style.btn}>M</button>
            <button style={style.btn}>N</button>

            <button style={style.btn}>O</button>
            <button style={style.btn}>P</button>
            <button style={style.btn}>Q</button>
            <button style={style.btn}>R</button>
            <button style={style.btn}>S</button>
            <button style={style.btn}>T</button>
            <button style={style.btn}>U</button>

            <button style={style.btn}>V</button>
            <button style={style.btn}>W</button>
            <button style={style.btn}>X</button>
            <button style={style.btn}>Y</button>
            <button style={style.btn}>Z</button>
        </section>
    );
}

export default Letters;

const style = {
    letters_Cont: {
        display: "flex",
        flexWrap: "wrap",
        columnGap: ".1rem",
        rowGap: ".5rem",
        border: ".1rem solid white",
        width: "27.2rem",
        margin: "0 auto",
        marginTop: "2rem",
        padding: ".3rem",
        // marginLeft: ".6rem",
    },

    btn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        width: "2rem",
        height: "2rem",
        // margin: "0 auto",

        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: ".4rem",
    },
};
