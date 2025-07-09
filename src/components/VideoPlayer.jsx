import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, shouldPlay, poster }) => {
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
      poster={poster} // ✅ add poster image
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-64 object-cover rounded will-change-transform will-change-contents"
    />
  );
};

export default VideoPlayer;
