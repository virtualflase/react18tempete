import './App.scss';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import logo from './logo.svg';
import { FocusStyleManager } from '@blueprintjs/core';
import { useEffect } from 'react';
// 只有在按tab的情况下才展示focus框
FocusStyleManager.onlyShowFocusOnTabs();
function App() {
  useEffect(() => {
    console.log('process.env', process.env);
  }, []);
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
      </header>
    </div>
  );
}

export default App;
