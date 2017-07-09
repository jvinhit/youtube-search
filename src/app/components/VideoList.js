import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });
  return (
    <div className="column large-4">
      <ul className="list-group" style={{marginTop: "10px", marginLeft: "0px"}}>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;