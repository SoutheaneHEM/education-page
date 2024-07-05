import React, { useRef } from "react";
import "./VideoPlayer.css";
import videohighlight from "../../assets/screen-capture.mp4";

const VideoPlayer = ({ playState, setPlayVideo }) => {
  const stateVideo = useRef(null);
  const VideoPlayer = (e) => {
    if (e.target === stateVideo.current) {
      setPlayVideo(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={stateVideo}
      onClick={VideoPlayer}
    >
      <video src={videohighlight} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
