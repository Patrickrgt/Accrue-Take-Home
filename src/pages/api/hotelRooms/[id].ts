import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Load rooms data
const loadRoomsData = () => {
    const filePath = path.resolve('./src/data', "hotelRooms.json");
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
};

// Save rooms data
const saveRoomsData = (data: any) => {
    const filePath = path.resolve('./src/data', 'hotelRooms.json');
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf-8');
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;  // Get the dynamic part of the URL

    try {
        const rooms = loadRoomsData();
        const roomIndex = rooms.findIndex((room: { id: number; }) => room.id === Number(id));

        switch (method) {
          case 'GET':
            // Find room by ID and return it
            if (roomIndex === -1) {
                res.status(404).json({ message: "Room not found" });
                return;
            }
            res.status(200).json(rooms[roomIndex]);
            break;
          case 'POST':
            // Update the room details
            const updatedRoom = { ...rooms[roomIndex], ...req.body };
            rooms[roomIndex] = updatedRoom;
            saveRoomsData(rooms);
            res.status(200).json({ message: 'Room updated successfully!', room: updatedRoom });
            break;
          default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        } else {
            res.status(500).json({ message: 'Server error', error: 'An unexpected error occurred' });
        }
    }
}
