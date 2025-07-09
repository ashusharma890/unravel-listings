import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, shouldPlay }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      className="w-full h-64 object-cover rounded"
    />
  );
};

export default VideoPlayer;
