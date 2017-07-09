import React, { Component } from 'react';
const VideoDetail = (props) => {
  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autohide=1`;
  return (
    <div className="video-detail column large-8"  style={{marginTop: "10px", marginLeft:"0px"}}>
      <div className="responsive-embed widescreen">
        <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="details">
        <div className="lead">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;