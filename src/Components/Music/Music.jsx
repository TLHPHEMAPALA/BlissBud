import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../NavBar/nav';
import Videos from '../Videos/Videos';
import axios from 'axios';

const Music = () => {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);

  useEffect(() => {
    let intervalId;

    if (cameraOn) {
      intervalId = setInterval(() => {
        captureImage();
      }, 10000); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [cameraOn]);

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

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png');
    // setCapturedImages(prevImages => [...prevImages, imageData]);
    predictEmotion(imageData)
  };

  const predictEmotion = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict_emotion', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
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
      <div className="flex flex-wrap justify-center mt-8">
        {capturedImages.map((image, index) => (
          <div key={index} className="m-2">
            <img src={image} alt={`Captured ${index}`} className="object-cover w-40 h-40 rounded-lg" />
          </div>
        ))}
      </div>
      <div>
        <Videos />
      </div>
    </div>
  );
};

export default Music;
