import React from "react";

function BTNPad() {
    return (
        <section style={style.btnPad_cont}>
            <div>btn pad uncovered</div>
            <div>
                <section style={style.powerSwitch}>
                    <button>On</button>
                    <button>Off</button>
                </section>
                <section style={style.numbers_Cont}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                </section>

                <section style={style.letters_Cont}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                    <button>E</button>
                    <button>F</button>
                    <button>G</button>

                    <button>H</button>
                    <button>I</button>
                    <button>J</button>
                    <button>K</button>
                    <button>L</button>
                    <button>M</button>
                    <button>N</button>

                    <button>O</button>
                    <button>P</button>
                    <button>Q</button>
                    <button>R</button>
                    <button>S</button>
                    <button>T</button>
                    <button>U</button>

                    <button>V</button>
                    <button>W</button>
                    <button>X</button>
                    <button>Y</button>
                    <button>Z</button>
                </section>
                <section style={style.submit}>
                    <button>Delete</button>
                    <button>Space</button>
                    <button>Enter</button>
                </section>
            </div>
        </section>
    );
}

export default BTNPad;

const style = {};
