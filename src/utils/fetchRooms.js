import data from '../data/rooms.json';

export const fetchRooms = async (page, limit) => {
  const allRooms = data.rooms_by_serial_no.flatMap(item => item.rooms);
  const start = page * limit;
  const end = start + limit;
  return allRooms.slice(start, end);
};

  