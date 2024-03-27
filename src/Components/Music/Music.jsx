import React, { useRef, useState } from 'react';
import Navbar from '../NavBar/nav';
import Videos from '../Videos/Videos'

const Music = () => {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraOn(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;
    setCameraOn(false);
  };

  return (
     <div className='w-full' >
      <Navbar />
    <div className="flex flex-col items-center justify-center w-full ">
      <h1 className="p-8 mt-4 text-4xl font-semibold text-gray-800">
        Wanna sync with your fav music?
      </h1>

      <div className="overflow-hidden border-4 border-gray-600 rounded-lg">
        <video ref={videoRef} className="w-full" autoPlay></video>
      </div>
      {cameraOn ? (
        <button
          onClick={stopCamera}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Turn off Camera
        </button>
      ) : (
        <button
          onClick={startCamera}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Start Camera
        </button>
      )}
    </div>
    <div>
      <Videos/>
    </div>
    </div>
  );
};

export default Music;
