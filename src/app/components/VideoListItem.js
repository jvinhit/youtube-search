import React, {Component} from 'react';
const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-middle media-object" src={imageUrl} />
        </div>
        <div className="media-body media-middle">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoListItem;