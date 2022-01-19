import React from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.handleSubmit("Crypto currency");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 15,
        key: "AIzaSyAbUkg_y-XuGOdsRmMFU1Q1F2TVT5Viq34",
        q: searchTerm,
      },
    });
    console.log(response);
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, video } = this.state;
    return (
      <Grid
        justifyContent="center"
        container-fluid
        style={{ width: "98%", margin: "auto" }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList video={video} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
