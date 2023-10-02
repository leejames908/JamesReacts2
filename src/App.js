import About from '../src/component/About.js';
import { Route, Routes } from "react-router-dom";
import NavBar from '../src/component/NavBar.js';
import Gallery from '../src/component/Gallery.js';

function App () {
    return <Routes>
        <Route path="/index.html" component={<>
        <NavBar />
        <Gallery/>
        </>
        }/>
        <Route path="/JamesReacts2" element={ 
            <>
                <NavBar />
                <Gallery />
            </>
        }/>
        <Route />
    </Routes>
    
}

export default App;