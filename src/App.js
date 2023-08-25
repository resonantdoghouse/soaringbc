import gliderImg from './assets/images/pexels-pixabay-416784.jpg';
// import img from './logo.svg';
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
      <h2>YouTube Videos</h2>
      <p>
        <a
          href="https://www.youtube.com/c/pureglide"
          target="_blank"
          rel="noreferrer"
        >
          Pure Glide
        </a>
        is a great channel with lots of YouTube Videos about soaring.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ItPnp4pJ_bg?si=Uw8bVbqCdr2jdMQI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
