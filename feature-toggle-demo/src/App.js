import logo from './logo.svg';
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FeatureToggle isEnabled={true} featureName="Feature A" />
        <FeatureToggle isEnabled={false} featureName="Feature B" />
        <FeatureToggle isEnabled={true} featureName="Feature C" />
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
