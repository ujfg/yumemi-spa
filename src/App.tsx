import logo from './logo.svg'
import './App.css'
import { ResusAxios } from './lib/axios'

function App () {
  const handleClick = () => {
    ResusAxios
      .get('api/v1/prefectures')
      .then((response) => { console.log(response.data) })
      .catch(err => {
        console.log("err:", err);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' onClick={handleClick}>button</button>
      </header>
    </div>
  )
}

export default App
