import { useState, useRef } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { fetchRooms } from "../utils/fetchRooms";
import RoomCard from "./RoomCard";
import SkeletonCard from "./SkeletonCard";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedRoomId, setExpandedRoomId] = useState(null);
  const loader = useRef();
  const [hasMore, setHasMore] = useState(true);

  useInfiniteScroll(loader, () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      fetchRooms(page, 10).then((nextRooms) => {
        if (nextRooms.length === 0) {
          setHasMore(false);
        } else {
          setRooms((prev) => [...prev, ...nextRooms]);
          setPage((prev) => prev + 1);
        }
        setLoading(false);
      });
    }, 500);
  });


  return (
    <div className="p-4 mx-auto bg-gradient-to-br from-slate-50 via-purple-100 to-blue-200">
      <h1 className="text-2xl font-bold text-center mb-4">Unravel Room List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {rooms.map((room) => (
          <RoomCard key={room.room_type_code} room={room} 
          isExpanded={expandedRoomId === room.room_type_code}
          onToggleExpand={() =>
            setExpandedRoomId((prev) => (prev === room.room_type_code ? null : room.room_type_code))
          } 
          />
        ))}
      </div>
      {loading && <SkeletonCard />}
      {!hasMore && (
        <div className="text-center text-lg font-bold text-red-500 mt-4">No more rooms to load.</div>
      )}
      <div ref={loader} className="h-10" />
    </div>
  );
};

export default RoomList;