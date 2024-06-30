import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const loadRoomsData = () => {
    const filePath = path.resolve('./src/data', "hotelRooms.json");
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method } = req;
    
        switch (method) {
          case 'GET':
            const data = loadRoomsData();
            res.status(200).json(data);
            break;
         
          default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
      } catch (error: unknown) { 
        if (error instanceof Error) {
          res.status(500).json({ message: 'Server error', error: error.message });
        } else {
          // Handle the case where the error is not an instance of Error
          res.status(500).json({ message: 'Server error', error: 'An unexpected error occurred' });
        }
      }
}