//!    Covered
import React from "react";
import OpenDexBtn from "../components/buttons/OpenDex_Btn";
import DCircles from "../components/designs/DCircles";

function Covered() {
    return (
        <div style={style.pokeDex_Cover}>
            <DCircles />
            <h3 style={style.coverTitle}>PokeDex</h3>
            <OpenDexBtn style={style.btnText} />
        </div>
    );
}

export default Covered;

const style = {
    pokeDex_Cover: {
        borderTop: ".2rem solid black",
        borderRadius: ".8rem",
        backgroundColor: "red",
        height: "27.6rem",
        marginTop: "1.4rem",
    },

    coverTitle: {
        // border: ".2rem solid green",
        color: "white",
        textAlign: "center",
        marginTop: "10rem",
        fontSize: "48px",
        textDecoration: "underline black",
    },
};
