import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="PersonCard">
          <PersonCard name={"Django, Will"} age={23} haircolor={"brown"}></PersonCard>
        </div>
        <div className="PersonCard">
          <PersonCard name={"Alyssa, Black"} age={30} haircolor={"red"}></PersonCard>
        </div>
      </div>
    </div>
  );
}

export default App;
