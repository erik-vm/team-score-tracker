import './App.css';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Team from './components/Team';


function App() {
    return (
        <div className="App">
            <Teams />
            <Activities></Activities>
            <Team/>
        </div>
    );
}

export default App;
