const SkeletonCard = () => {
  return (
    <div className="border rounded-xl shadow p-4 mb-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-64 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default SkeletonCard;
