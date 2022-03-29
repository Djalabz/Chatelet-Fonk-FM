import './App.css';

import Player from '../Player/Player'
import Header from '../Header/Header'

function App() {
  const tracks = {
    title : 'Voyager',
    artist: 'Alan Parson',
    audioSrc: '../../../public/music/Voyager.mp3',
  }

  return (
    <div className="App">
      < Header />
      < Player tracks={tracks} />
    </div>
  );
}

export default App;
