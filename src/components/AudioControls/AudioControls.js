import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Stop } from '../../assets/stop.svg';
import './AudioControls.css';

export default function AudioControls({ 
    isPlaying,
	onPlayPauseClick,
    onPrevClick,
    onNextClick,
 }) {
    return (
        <div className="audio-controls">
        {isPlaying ? (
          <button
            type="button"
            className="stop"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Stop"
          >
            <Stop />
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
            <Play />
          </button>
        )}
      </div>
    )
}