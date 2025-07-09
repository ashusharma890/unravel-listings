// RoomCard.js
import React, { useRef } from "react";
import useInViewMedia from "../hooks/useInViewMedia";
import VideoPlayer from "./VideoPlayer";
import ImageLoader from "./ImageLoader";
import VariantCard from "./VairantCard";

const RoomCard = ({ room, isExpanded, onToggleExpand }) => {
  const ref = useRef();
  const isVisible = useInViewMedia(ref);

  const getMediaSource = () => {
    if (room?.properties?.video_url && typeof room?.properties?.video_url === "object") {
      const [firstVideo] = Object.values(room?.properties?.video_url);
      if (firstVideo) return { type: "video", src: firstVideo };
    }
    if (Array?.isArray(room?.properties?.room_images) && room?.properties?.room_images?.length > 0) {
      return { type: "image", src: room?.properties?.room_images[0]?.image_urls[0] };
    }
    return null;
  };

  const media = getMediaSource();
  const variants = Array.isArray(room.variants) ? room.variants : [];
  const displayedVariants = isExpanded ? variants : variants.slice(0, 2);

  return (
    <div ref={ref} className="border rounded-xl shadow-md p-4 mb-6 w-full mx-auto bg-white">
      <h2 className="text-xl font-bold mb-2">{room.name}</h2>
      {/* Conditionally render VideoPlayer OR ImageLoader, but don't unmount VideoPlayer based on isVisible */}
      {media?.type === "video" ? (
        <div className={`relative ${media?.type === "video" ? '' : 'hidden'}`}>
          <VideoPlayer
            src={media.src}
            shouldPlay={isVisible} // Still control play/pause based on visibility
            poster={room.room_images?.[0]?.image_urls[0]}
            // Add a class to hide/show the video based on isVisible if needed,
            // or rely solely on shouldPlay to pause/play
            // You might want to use absolute positioning for overlap with image.
            className={`${!isVisible ? 'opacity-0 absolute -z-10' : ''}`} // Example: hide when not visible
          />
          {/* Optionally show an image placeholder *behind* the video when not visible, or when video is loading */}
          {(!isVisible || !media.src) && (
            <ImageLoader src={room.room_images?.[0]?.image_urls[0]} alt={room.name} className="absolute top-0 left-0 w-full h-full object-cover rounded" />
          )}
        </div>
      ) : (
        // Render ImageLoader if it's explicitly an image or no video source
        <ImageLoader src={media.src} alt={room.name} />
      )}


      <div className="mt-4">
        {displayedVariants.map((variant) => (
          <VariantCard key={variant.id} variant={variant} /> // Ensure variant.id is used here
        ))}
        {variants.length > 2 && (
          <button
            onClick={onToggleExpand}
            className="text-blue-600 mt-2 text-sm underline hover:text-blue-800"
          >
            {isExpanded ? "Click to see less" : "Click to see more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(RoomCard);