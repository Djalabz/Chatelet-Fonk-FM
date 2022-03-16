import './Player.css';

function Player() {
    return (
        <div className="container">
            <div className="console">
                <div className="buttons">
                    <div className="play">
                        <div className="play-btn">

                        </div>
                    </div>
                    <div className="pause"></div>
                    <div className="volume"></div>
                </div>
            </div>
            <div className="infos">
                <div className="name">
                    <p>
                        Le grand méchant Loulou
                    </p>
                </div>
                <div className="artist">
                    <p>Jalab</p>
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
                <div className="cover">
                </div>
            </div>
            <div className="links">
                <div className="hide">
                </div>
            </div>
        </div>
    )
}

export default Player;