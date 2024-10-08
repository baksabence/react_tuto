
import './App.css';
import Jatekter from './Jatekter.js';

function App() {

  const adatLISTA = ["X", "O", "O", "X", "O", "O", "X", "X", "X"] 


  return (
    <div className="App">
      <header className="App-header">TicTacToe
      </header>

      <article className = "row">
        <Jatekter adatLISTA = {adatLISTA}/>
        </article>

    </div>
  );
}

export default App;
