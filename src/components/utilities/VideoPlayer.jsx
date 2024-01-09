"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const options = {
    width: "100%",
    heigt: "100%",
  };
  return (
    <div className="mx-5">
      <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={options} />
    </div>
  );
};

export default VideoPlayer;
