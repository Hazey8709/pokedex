import { Route, Routes } from "react-router-dom";

import Covered from "./pages/Covered";
import Uncovered from "./pages/Uncovered";

function App() {
    return (
        <div>
            <header>App running!</header>
            <main>
                <section style={style.pokeDex_Cont}>
                    <div style={style.pokeDex_ContEffect}>
                        <section style={style.screen_Cont}></section>

                        <Routes>
                            <Route path='/' element={<Covered />} />
                            <Route path='/Uncovered' element={<Uncovered />} />
                        </Routes>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;

const style = {
    pokeDex_Cont: {
        // display: "flex",
        // position: "absolute",
        border: ".2rem solid black",
        borderRadius: "1rem",
        backgroundColor: "red",
        width: "30rem",
        height: "45.1rem",
        margin: "0 auto",
        marginTop: "5rem",
        // padding: "10px",
        boxShadow: "10px 10px 20px 5px black",
    },
    //!  Cont 3D Effect (In-Progress)
    // pokeDex_ContEffect: {
    //     border: ".2rem solid black",
    //     borderRadius: "1rem",
    //     backgroundColor: "blue",
    //     width: "30rem",
    //     height: "45.1rem",
    //     margin: "0 auto",
    //     marginTop: "5rem",
    // },

    screen_Cont: {
        // display: "inline-block",
        // position: "absolute",
        border: ".2rem inset black",
        borderRadius: "1rem",
        backgroundColor: "#000500",
        width: "29rem",
        height: "15rem",
        margin: "0 auto",
        marginTop: ".3rem",
    },
};
