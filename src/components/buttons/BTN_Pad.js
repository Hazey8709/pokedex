import React from "react";

function BTNPad() {
    return (
        <section style={style.btnPad_cont}>
            <div>btn pad uncovered</div>
            <div>
                <section style={style.numbers_Cont}></section>
                <section style={style.letters_Cont}></section>
            </div>
        </section>
    );
}

export default BTNPad;

const style = {};
