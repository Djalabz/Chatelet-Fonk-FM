import './Player.css';
import AudioControls from '../AudioControls/AudioControls';

import React, { useState, useEffect, useRef } from 'react';



function Player({ tracks }) {

    // STATE
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

	// Destructure for conciseness
	// const { title, artist, color, image, audioSrc } = tracks[trackIndex];

	// Refs
    const audioRef = useRef(new Audio('../../../public/music/Voyager.mp3'));
    const intervalRef = useRef();
    const isReady = useRef(false);

	// Destructure for conciseness
	const { duration } = audioRef.current;

    const toPrevTrack = () => {
        console.log('TODO go to prev');
      }
    
    const toNextTrack = () => {
        console.log('TODO go to next');
    }

    return (
		<div className="audio-player">
			<div className="track-info">hey
		    <h2 className="title">{tracks.title}</h2>
            <h3 className="artist">{tracks.artist}</h3> 
			</div>
            <AudioControls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
            />
		</div>
	);


}

export default Player;