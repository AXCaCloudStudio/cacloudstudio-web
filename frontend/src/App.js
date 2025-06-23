import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CA Cloud Studio LLC home page.
        </p>
        <a
          className="App-link"
          href="https://github.com/AXCaCloudStudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </header>
    </div>
  );
}

export default App;
