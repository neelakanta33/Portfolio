import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Education from './components/education';

function App() {
    return (

        <div className="App" >
            <div className="navb" >
                <Navbar />
                </div> 
                <div className="txe" >
                    <BrowserRouter >
                        <Routes >
                            <Route path='/'
                                element={< Home />}
                            /> <Route path='/about'
                                element={< About />}
                            /> <Route path='/education'
                                element={< Education />}
                            /> <Route path='/projects'
                                element={< Projects />}
                            /> <Route path='/contact'
                                element={< Contact />}
                            />

                            </Routes> </BrowserRouter> </div> </div>
                            );
}

                            export default App;