import { Route, Routes } from "react-router-dom";

import Covered from "./pages/Covered";
import Uncovered from "./pages/Uncovered";

function App() {
    return (
        <main>
            <section style={style.pokeDex_Cont}>
                <section style={style.screen_Cont}></section>
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

    //!  Cont 3D Effect
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

    screen_Cont: {
        border: ".4rem inset darkRed",
        borderRadius: "1rem",
        backgroundColor: "#000500",
        width: "29rem",
        height: "15rem",
        margin: "0 auto",
        marginTop: ".3rem",
    },
};
