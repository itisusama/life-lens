"use client"

import PeoplesCard from "@/components/PeoplesCard";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const videos = [ 
    { url: 'https://www.youtube.com/embed/w7jMdCNhLfs', title: 'WhatsApp Channel Ne Sab Expose Kar Diya 😱 | Last Day With Chotay Bhai and Baray Bhai 😔' }, 
    { url: 'https://www.youtube.com/embed/vZJASzdeH-s', title: 'Is Time Travel Possible? | @Round2hell | Netflix India' },
    { url: 'https://www.youtube.com/embed/w7jMdCNhLfs', title: 'WhatsApp Channel Ne Sab Expose Kar Diya 😱 | Last Day With Chotay Bhai and Baray Bhai 😔' }, 
    { url: 'https://www.youtube.com/embed/vZJASzdeH-s', title: 'Is Time Travel Possible? | @Round2hell | Netflix India' },
    { url: 'https://www.youtube.com/embed/w7jMdCNhLfs', title: 'WhatsApp Channel Ne Sab Expose Kar Diya 😱 | Last Day With Chotay Bhai and Baray Bhai 😔' }, 
    { url: 'https://www.youtube.com/embed/vZJASzdeH-s', title: 'Is Time Travel Possible? | @Round2hell | Netflix India' }
  ]

  const peoples = [ 
    { imageUrl: 'https://yt3.googleusercontent.com/H1_N10kHv1ZxDIxLMk0Cft6aW0rvCPEWdw82k_m9cFPy8x-8Yd7daJ3Ntkl8ruK-HdjyiSXr=s900-c-k-c0x00ffffff-no-rj', name: 'Ducky Bhai', pageUrl: '/profile/john-doe' }, 
    { imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_kiR_xWlg7vo5dKLMFOxCgoYvV5xizv6zYbSrfrhiRbX2Q=s900-c-k-c0x00ffffff-no-rj', name: 'Jane Smith', pageUrl: '/profile/jane-smith' },
    { imageUrl: 'https://yt3.googleusercontent.com/H1_N10kHv1ZxDIxLMk0Cft6aW0rvCPEWdw82k_m9cFPy8x-8Yd7daJ3Ntkl8ruK-HdjyiSXr=s900-c-k-c0x00ffffff-no-rj', name: 'Ducky Bhai', pageUrl: '/profile/john-doe' }, 
    { imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_kiR_xWlg7vo5dKLMFOxCgoYvV5xizv6zYbSrfrhiRbX2Q=s900-c-k-c0x00ffffff-no-rj', name: 'Jane Smith', pageUrl: '/profile/jane-smith' },
    { imageUrl: 'https://yt3.googleusercontent.com/H1_N10kHv1ZxDIxLMk0Cft6aW0rvCPEWdw82k_m9cFPy8x-8Yd7daJ3Ntkl8ruK-HdjyiSXr=s900-c-k-c0x00ffffff-no-rj', name: 'Ducky Bhai', pageUrl: '/profile/john-doe' }, 
    { imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_kiR_xWlg7vo5dKLMFOxCgoYvV5xizv6zYbSrfrhiRbX2Q=s900-c-k-c0x00ffffff-no-rj', name: 'Round 2 Hell', pageUrl: '/profile/jane-smith' },
  ];
  return (
    <div className="container mx-auto p-4">
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
