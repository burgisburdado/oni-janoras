import React from 'react';
import Image from "next/image"
import Link from 'next/link';

interface HoverCardProps {
  imageUrl: string;
  description: string;
  task: string;
  title?: string;
  altText?: string;
  url: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ 
  imageUrl, 
  description,
  task, 
  title, 
  altText,
  url, 
}) => {
  return (

    <Link href={url} rel="noopener noreferrer" target="_blank" className="bg-white flex justify-center items-center relative group w-full h-80 rounded-3xl overflow-hidden cursor-pointer">
      {/* Background Image */}
      <Image className="w-fit object-cover transition-transform duration-500 ease-out group-hover:scale-110" src={imageUrl} alt={altText || title || "Card image"} />
      

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-stone-100">
        
        {/* Optional Title with a slight slide-up animation */}
        {title && (
          <h3 className="text-2xl text-[#BBFF00] font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        )}
        
        {/* Description with a staggered slide-up animation */}
        <p className="text-base text-stone-50 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {description}
        </p>
        <p className="text-xs mt-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {task}
        </p>
      </div>
    </Link>
  );
};

export default HoverCard;