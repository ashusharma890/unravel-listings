const ImageLoader = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "room image"}
      loading="lazy"
      className="w-full h-64 object-cover rounded"
    />
  );
};

export default ImageLoader;
