// App.js
import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import VideoSection from './VideoSection';

const Mediatation = () => {
  
  
  const videos = [
    {
      title: 'Video 1',
      description: 'Description of Video 1',
      thumbnail: 'https://via.placeholder.com/300',
    },
    {
      title: 'Video 2',
      description: 'Description of Video 2',
      thumbnail: 'https://via.placeholder.com/300',
    },
    {
      title: 'Video 3',
      description: 'Description of Video 3',
      thumbnail: 'https://via.placeholder.com/300',
    },
    
    
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-semibold">YouTube Player</h1>
      <YouTubePlayer videoId="VIDEO_ID_HERE" />
      <h2 className="my-8 text-2xl font-semibold">More Videos</h2>
      <VideoSection videos={videos} />
    </div>
  );
};

export default Mediatation;
