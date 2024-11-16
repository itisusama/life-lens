"use client";
import PeoplesCard from "@/components/PeoplesCard";
import VideoCard from "@/components/VideoCard";
import videos from '../data/videos.json'; 
import peoples from '../data/peoples.json';

export default function Home() {
  return (
    <>
    <header className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 shadow-lg">
      <h1 className="text-5xl font-extrabold text-white">Welcome to My Life Lens</h1>
      <p className="text-lg mt-4 text-white">Watch the latest vlogs from YouTube</p>
    </header>
    <div className="container mx-auto p-4 min-h-screen">
      <main>
        <section className="my-16">
          <h2 className="text-3xl font-extrabold mb-6 text-red-500">Daily Vlogs:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {peoples.map((person, index) => (
              <PeoplesCard
                key={index}
                imageUrl={person.imageUrl}
                name={person.name}
                pageUrl={person.pageUrl}
              />
            ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-extrabold mb-6 text-red-500">Trending Vlogs:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} videoUrl={video.url} title={video.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
