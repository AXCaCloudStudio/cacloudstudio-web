import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CaCloudStudio home page.
        </p>
        <a
          className="App-link"
          href="https://github.com/AXCaCloudStudio/cacloudstudio-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          CaCloudStudio github
        </a>
      </header>
    </div>
  );
}

export default App;
