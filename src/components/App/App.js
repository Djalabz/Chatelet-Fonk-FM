import './App.css';

import Player from '../Player/Player'
import Header from '../Header/Header'

function App() {
  const tracks = {
    title : '',
    artist: '',
    audioSrc: '',
  }

  return (
    <div className="App">
      < Header />
      < Player tracks={tracks} />
    </div>
  );
}

export default App;
