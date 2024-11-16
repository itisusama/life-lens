"use client"

import VideoCard from "@/components/VideoCard";

export default function Home() {
  const videos = [ 
    { url: 'https://www.youtube.com/embed/w7jMdCNhLfs', title: 'WhatsApp Channel Ne Sab Expose Kar Diya 😱 | Last Day With Chotay Bhai and Baray Bhai 😔' }, 
    { url: 'https://www.youtube.com/embed/vZJASzdeH-s', title: 'Is Time Travel Possible? | @Round2hell | Netflix India' }
  ]
  return (
    <div className="container mx-auto p-4">
      <main>
        {/* Here you'll map through your vlogs and display them */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => ( <VideoCard key={index} videoUrl={video.url} title={video.title} /> ))}
        </div>
      </main>
    </div>
  );
}
