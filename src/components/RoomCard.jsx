import React, { useRef } from "react";
import useInViewMedia from "../hooks/useInViewMedia";
import VideoPlayer from "./VideoPlayer";
import ImageLoader from "./ImageLoader";
import VariantCard from "./VairantCard";

const RoomCard = ({ room, isExpanded, onToggleExpand }) => {
  const ref = useRef();
  const isVisible = useInViewMedia(ref);

  const getMediaSource = () => {
    if (room?.properties.video_url && typeof room?.properties?.video_url === "object") {
      const [firstVideo] = Object.values(room.properties.video_url);
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
      {media?.type === "video" && isVisible && <VideoPlayer src={media.src} shouldPlay={isVisible} />}
      {media?.type === "image" && <ImageLoader src={media.src} alt={room.name} />}

      <div className="mt-4">
        {displayedVariants.map((variant, i) => (
          <VariantCard key={i} variant={variant} />
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
