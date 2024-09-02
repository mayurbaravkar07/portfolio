import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import prisma from '../../lib/prisma';

interface SessionUser {
  name: string;
  email: string;
  image: string;
}

async function getSessionUser(req: NextApiRequest, res: NextApiResponse): Promise<SessionUser> {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }
  return session.user as SessionUser;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  try {
    switch (req.method) {
      case 'GET':
        const entries = await prisma.guestbook.findMany({
          orderBy: {
            created_at: 'desc',
          },
        });
    
        return res.status(200).json(entries);
      
      case 'POST':
        const { name, email } = await getSessionUser(req, res);
        
        await prisma.guestbook.create({
          data: {
            email,
            body: (req.body.body || '').slice(0, 500),
            created_by: name, 
          },
        });
    
        return res.status(200).json({ error: null });
      
      case 'DELETE':
        const id = req.body.id;
        await prisma.guestbook.delete({
          where: {
            id: String(id),
          },
        });

        return res.status(204).json({});
      
      default:
        return res.status(405).send('Method not allowed.');
    }
  } catch (error) {
    return res.status(500).json('Unexpected Error');
  }
}