import './App.css';
// import PokemonApi from './components/PokemonApi'
import PokemonApiWithAxios from './components/PokemonApiWithAxios'

function App() {
  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      {/* <PokemonApi></PokemonApi> */}
      <PokemonApiWithAxios></PokemonApiWithAxios>
    </div>
  );
}

export default App;
