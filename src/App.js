import logo from './logo.svg';
import './App.css';
import { dispatch } from './redux/store';

function App() {

  const test = () => {
    dispatch.entitiesUser.saves([{ id: 1, name: 'Hùng', old: '25' }]);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={test}>test redux</button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
