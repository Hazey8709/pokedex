//!    Covered
import React from "react";
import OpenDexBtn from "../components/buttons/OpenDex_Btn";

function Covered() {
    return (
        <div style={style.pokeDex_Cover}>
            <OpenDexBtn style={style.btnText} />
        </div>
    );
}

export default Covered;

const style = {
    pokeDex_Cover: {
        borderTop: ".2rem solid black",
        borderRadius: ".8rem",
        backgroundColor: "darkRed",
        height: "27.9rem",
        marginTop: "1.4rem",
    },
};
