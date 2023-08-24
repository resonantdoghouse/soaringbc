import gliderImg from './assets/images/pexels-pixabay-416784.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Soaring BC</h1>
      <p>A hobby site about interests in flying Gliders.</p>
      <img
        className="glider-img"
        src={gliderImg}
        alt="glider soaring in the sky"
      />
      <p>
        Learn to fly a glider in beautiful Hope BC with the{' '}
        <a
          href="https://vancouversoaring.com/"
          target="_blank"
          rel="noreferrer"
        >
          Vancouver Soaring Association
        </a>
      </p>
    </div>
  );
}

export default App;
