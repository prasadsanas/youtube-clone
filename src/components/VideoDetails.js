import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading..</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <iframe
          frameBorder="0"
          height="550px"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="subtitle1" style={{ color: "#222626" }}>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </div>
    </div>
  );
};

export default VideoDetails;
