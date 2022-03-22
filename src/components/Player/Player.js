import './Player.css';
import Play from '../Play/Play';

function Player() {
    const track = {
        title: 'Le grand méchant Loulou',
        artist: 'Jalab',
        image: '../../../public/images/jalab-album.png',
        file: '../../../public/music/Avant-Garden.mp3',
    }

    let audio = new Audio(track.file)

    const start = () => {
    //   audio.play()
      console.log('play')
    }

    return (
        <div className="container">
            <div className="console">
                <div className="buttons">

                    <div className="pause"></div>
                    <div className="volume"></div>
                </div>
            </div>
            <div className="infos">
                <div className="name">
                    <p>
                        {track.title}
                    </p>
                </div>
                <div className="artist">
                        {track.artist}
                </div>
                {/* <div className="album">
                    <p>Saint-Phony</p>
                </div>
                <div className="label-country">
                    <p>Chatelet Records</p>
                    <p>France</p>
                </div> */}
            </div>
            <div className="image">
                <img className="cover" src={track.image}>
                </img>
            </div>
            <div className="links">
                <div className="hide">
                </div>
            </div>
        </div>
    )
}

export default Player;