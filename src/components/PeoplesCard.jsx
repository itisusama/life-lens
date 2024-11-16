import React from 'react';
import { useRouter } from 'next/navigation';

const PeoplesCard = ({ imageUrl, name, pageUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(pageUrl);
  };

  return (
    <div
      className="cursor-pointer text-center"
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default PeoplesCard;
