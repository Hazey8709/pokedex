import React from "react";
import { Link } from "react-router-dom";

function OpenDexBtn(props) {
    return (
        <button style={style.cover_Btn}>
            <Link to='/Uncovered' style={style.coverBtnLink}>
                Open PokeDex
            </Link>
        </button>
    );
}

export default OpenDexBtn;

const style = {
    coverBtn_Cont: {},

    cover_Btn: {
        display: "flex",
        border: ".3rem inset black",
        borderRadius: ".4rem",
        backgroundColor: "black",
        margin: "0 auto",
        marginTop: "20rem",
        // width: "10rem",
        // height: "3rem",
        padding: "10px",
    },

    coverBtnLink: {
        textDecoration: "none",
        // backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
    },
};
