import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           ! 예원이의 프로그래밍 !
        </p>
        <a
          className="App-link"
          href="https://blog.naver.com/kyw2790"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yewon's Blog 
        </a>
      </header>
    </div>
  );
}

export default App;
