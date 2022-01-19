import { Grid } from "@material-ui/core";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ video, onVideoSelect }) => {
  const listOfVideos = video.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={1}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
