import rooms from '../data/rooms.json';

export const fetchRooms = async (page, limit) => {
    const response = await fetch(rooms);
    const allRooms = await response.json();
    const start = page * limit;
    const end = start + limit;
    return allRooms.slice(start, end);
  };
  