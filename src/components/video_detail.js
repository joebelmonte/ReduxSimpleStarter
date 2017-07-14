import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  console.log('the url is ', url)
  // the above will work for just about any video since only the IDs change.
  // to use string interpolation, need to use back ticks not quotes
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
