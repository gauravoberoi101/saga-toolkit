import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {getCatFetch} from './catState'
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch()
  const catsVal = useSelector(state=>{
    return state
  })

  useEffect(() => {
   dispatch(getCatFetch())
  }, [dispatch])
  console.log('catsVal',catsVal)  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
