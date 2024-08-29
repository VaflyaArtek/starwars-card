import './App.css'
import Header from "../Header/Header.tsx";
import Background from "./Background.tsx";
import Card from '../Card/Card.jsx'

function App() {
    return (
        <div className='App'>
            <h2 className='title'>Star Wars</h2>
            <Background/>
            <Header/>
            <Card/>
        </div>
    )
}

export default App