import './App.css';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterApp value={10}></CounterApp>
      </header>
    </div>
  );
}

export default App;
