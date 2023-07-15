import { Route, Routes } from "react-router-dom";

import Covered from "./pages/Covered";
import Uncovered from "./pages/Uncovered";

function App() {
    return (
        <main>
            <section style={style.pokeDex_Cont}>
                <section style={style.screen_Cont}>
                    <div style={style.returnData_Cont}>Return Pokemon Data</div>
                    <div style={style.padData_Cont}>Text</div>
                </section>
                <Routes>
                    <Route path='/' element={<Covered />} />
                    <Route path='/Uncovered' element={<Uncovered />} />
                </Routes>

                <div style={style.pokeDex_ContEffect}></div>
            </section>
        </main>
    );
}

export default App;

const style = {
    pokeDex_Cont: {
        border: ".2rem solid black",
        borderRadius: ".8rem",
        backgroundColor: "darkRed",
        width: "30rem",
        height: "45.1rem",
        margin: "0 auto",
        marginTop: "5rem",
        boxShadow: "5px 8px 50px #000500",
    },

    //!  Container  3D Effect
    pokeDex_ContEffect: {
        position: "absolute",
        border: ".2rem solid black",
        borderTopRightRadius: "2rem",
        borderBottomRightRadius: "2rem",
        backgroundColor: "darkRed",
        width: "1rem",
        height: "45rem",
        top: "5rem",
        marginLeft: "29.5rem",
        boxShadow: "1px 1px 10px 1px black",
        zIndex: "-1",
    },

    //!   Screen
    screen_Cont: {
        border: ".4rem inset darkRed",
        borderRadius: "1rem",
        backgroundColor: "#000500",
        width: "29rem",
        height: "15rem",
        margin: "0 auto",
        marginTop: ".3rem",
    },

    returnData_Cont: {
        border: ".1rem solid white",
        borderRadius: ".2rem",
        width: "28.5rem",
        height: "10rem",
        margin: "0 auto",
        marginTop: ".2rem",

        color: "white",
    },

    padData_Cont: {
        border: ".1rem solid white",
        borderRadius: ".2rem",
        width: "28.5rem",
        height: "4.1rem",
        margin: "0 auto",
        marginTop: ".1rem",

        color: "white",
    },
};
