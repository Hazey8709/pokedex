//!    Covered
import React from "react";
import OpenDexBtn from "../components/buttons/OpenDex_Btn";
import DCircles from "../components/designs/DCircles";

function Covered() {
    return (
        <section>
            <div style={style.coverDesign}></div>
            <div style={style.pokeDex_Cover}>
                <DCircles />
                <h1 style={style.coverTitle}>PokeDex</h1>
                <p style={style.phrase}>Gotta Catch Them All!</p>
                <OpenDexBtn style={style.btnText} />
            </div>
        </section>
    );
}

export default Covered;

const style = {
    pokeDex_Cover: {
        borderTop: ".2rem solid red",
        borderTopRightRadius: ".8rem",
        borderBottomRightRadius: ".8rem",
        borderBottomLeftRadius: ".8rem",
        borderRight: ".3rem outset red",
        borderBottom: ".3rem outset red",
        backgroundColor: "red",
        height: "27.7rem",
    },

    coverDesign: {
        height: "0",
        width: "0",
        borderLeft: "300px solid red",
        borderRight: "30px solid transparent",
        borderTop: "0px solid transparent",
        borderBottom: "1rem solid red",
    },

    coverTitle: {
        // border: ".2rem solid green",
        color: "white",
        textAlign: "center",
        marginTop: "8rem",
        marginBottom: "0px",
        fontSize: "48px",
        fontWeight: "bold",
    },

    phrase: {
        textAlign: "center",
        fontWeight: "bold",
    },
};
