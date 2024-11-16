import React from 'react';

const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Watch
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
