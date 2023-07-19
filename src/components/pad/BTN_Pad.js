import React from "react";
import OnOff from "../buttons/OnOff";
import Numbers from "../buttons/Numbers";
import Letters from "../buttons/Letters";
import KeyButtons from "../buttons/KeyButtons";

function BTNPad() {
    return (
        <section style={style.btnPad_cont}>
            <OnOff />
            <Numbers />
            <Letters />
            <KeyButtons />
        </section>
    );
}

export default BTNPad;

const style = {
    btnPad_cont: {
        border: ".5rem inset darkRed",
        backgroundColor: "darkRed",
        margin: ".5rem",
        height: "26rem",
    },
};
