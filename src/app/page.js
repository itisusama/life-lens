"use client"
import PeoplesCard from "@/components/PeoplesCard";
import VideoCard from "@/components/VideoCard";
import videos from '../data/videos.json'; 
import peoples from '../data/peoples.json';

export default function Home() {
 
  return (
    <div className="container mx-auto p-4">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold">Welcome to My Life Lens</h1>
          <p className="text-lg mt-2">Watch the latest vlogs from YouTube</p>
        </header>

      <main>
        <h2 className="text-4xl font-extrabold mb-4">Daily Vlogs:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {peoples.map((person, index) => ( <PeoplesCard key={index} imageUrl={person.imageUrl} name={person.name} pageUrl={person.pageUrl} /> ))}
        </div>

        <h2 className="text-4xl font-extrabold mb-4">Trending Vlogs:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => ( <VideoCard key={index} videoUrl={video.url} title={video.title} /> ))}
        </div>
      </main>
    </div>
  );
}
