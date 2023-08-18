import About from '../src/component/About.js';
import { Route, Routes } from "react-router-dom";
import NavBar from '../src/component/NavBar.js';

function App () {
    return (
    <Routes>
        <Route path="/" element={ 
        <>
        <NavBar />
        <About />
        </>
        }/>
        <Route />
    </Routes>
    )
}

export default App;