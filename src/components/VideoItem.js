import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          cursor: "pointer",
          height: "130px",
          padding: "10px",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ width: "60%" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography style={{ fontSize: "12px", marginLeft: "10px" }}>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
