import React from 'react';
import { RoomsProps } from '../../types'; 
import HandleRooms from './HandleRooms';

const ManageView: React.FC<RoomsProps> = ({ rooms, error }) => {
  if (error) return <div>Error: {error}</div>;
  if (!rooms || rooms.length === 0) {
    return <div>No rooms available.</div>;
  }

  return (
    <div>
      <h1>Hotel Rooms</h1>
      <ul>
        {rooms.map(room => (
            <> 
          <li key={room.id}>
            Room Number: {room.number}, Beds: {room.beds}, Price: ${room.price}, Reserved: {room.isReserved ? 'Yes' : 'No'}
          </li>
          <HandleRooms id= {room.id} isReserved={room.isReserved} currentOccupant={room.currentOccupant} checkInDate={room.checkInDate} checkOutDate={room.checkOutDate}/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ManageView;
