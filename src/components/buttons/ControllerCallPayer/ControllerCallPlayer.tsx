import React, { useState } from "react";
import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";

interface VideoPlayerControlsProps {
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  className?: string;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  onPlay,
  onPause,
  onStop,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Maneja el clic en el botón de reproducción
  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
    if (onPlay) onPlay();
  };
  
  // Maneja el clic en el botón de pausa/reproducir
  const handlePausePlayClick = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      if (onPlay) onPlay();
    } else {
      if (onPause) onPause();
    }
  };
  
  // Maneja el clic en el botón de detener
  const handleStopClick = () => {
    setIsPlaying(false);
    setIsPaused(false);
    if (onStop) onStop();
  };
  
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Botón de reproducción (visible cuando no está reproduciendo) */}
      {!isPlaying && (
        <button 
          className="flex items-center justify-center bg-[#f4f4f4] rounded-md h-[50px] cursor-pointer transition-all duration-200"
          onClick={handlePlayClick}
        >
          <MdPlayArrow size={24} className="text-neutral-700" />
        </button>
      )}
      
      {/* Botones de control (visibles cuando está reproduciendo) */}
      {isPlaying && (
        <div className="flex flex-row">
          {/* Botón de detener */}
          <button 
            className="flex items-center justify-center bg-[#dcdcdc] h-[50px] w-1/2 rounded-l-md cursor-pointer transition-all duration-200"
            onClick={handleStopClick}
          >
            <MdStop size={24} className="text-neutral-700" />
          </button>
          
          {/* Botón de pausa/reproducir */}
          <button 
            className="flex items-center justify-center bg-[#f4f4f4] h-[50px] w-1/2 rounded-r-md cursor-pointer transition-all duration-200"
            onClick={handlePausePlayClick}
          >
            {isPaused ? (
              <MdPlayArrow size={24} className="text-neutral-700" />
            ) : (
              <MdPause size={24} className="text-neutral-700" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerControls;