// types.ts
export interface Room {
    id: number;
    number: string;
    beds: number;
    price: number;
    isReserved: boolean;
    currentOccupant: string | null;
    checkInDate: string | null;
    checkOutDate: string | null;
  }
  
  export interface RoomsProps {
    rooms: Room[];
    error?: string;
  }
  