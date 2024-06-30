import Image from "next/image";
import { Inter } from "next/font/google";
import ManageView from '../components/ManageView';

const inter = Inter({ subsets: ["latin"] });

interface Room {
  id: number;
  number: string;
  beds: number;
  price: number;
  isReserved: boolean;
  currentOccupant: string | null;
  checkInDate: string | null;
  checkOutDate: string | null;
}

interface HomeProps {
  rooms: Room[];
  error?: string;
}

export default function Home({ rooms, error }: HomeProps) {
  return (
    <ManageView rooms={rooms} error={error} />
  );
}

export async function getServerSideProps(): Promise<{ props: HomeProps }> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/hotelRooms`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const rooms: Room[] = await res.json();
    return { props: { rooms } };
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Something went wrong';
    return { props: { rooms: [], error: errorMessage } };
  }
}
