import {Routes, Route} from "react-router-dom";
import './App.css'
import Header from "../Header/Header.tsx";
import Background from "./Background.tsx";
import Card from '../Card/Card.jsx'
import {useState} from "react";

function App() {
    const [peopleId, setPeopleId] = useState(1)
    const [planetsId, setPlanetsId] = useState(1)
    const [starshipsId, setStarshipsId] = useState(1)

    return (
        <div className='App'>
            <h2 className='title'>Star Wars</h2>
            <Background/>
            <Header/>
            <Routes>
                <Route path="/" element={<Card title="people" id={peopleId} setId={setPeopleId}/>}/>
                <Route path="/planets" element={<Card title="planets" id={planetsId} setId={setPlanetsId}/>}/>
                <Route path="/starships" element={<Card title="starships" id={starshipsId} setId={setStarshipsId}/>}/>
            </Routes>

        </div>
    )
}

export default App