import logo from './logo.svg';
import './App.css';
import { Typography , Button } from '@mui/material'
import Login from './components/login';

function App() {
  return (
    <div className="App">
{/*       
      <header className="App-header">
      <Typography variant='h2'component={"h2"} sx={{bgcolor:'white' , color:'Highlight'}}>Typography with h2 variant   !</Typography>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EDIT <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}

    <Login/>
    </div>
  );
}

export default App;
