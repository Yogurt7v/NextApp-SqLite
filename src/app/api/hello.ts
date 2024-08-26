import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/server/db";

type Data = User[]

type User = {
    id: number,
    name: string,
    email: string,
    password: string,
    events?: Event[],
    participations?: Participation[]
}

type Participation = {
    userId: number,
    eventId: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}