import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = [];

  for (let i = 0; i < roomSizes.length; i++) {
    const room = new ClassRoom(roomSizes[i]);
    rooms.push(room);
  }

  return rooms;
}
