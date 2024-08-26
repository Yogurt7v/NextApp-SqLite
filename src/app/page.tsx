import Image from "next/image";
import prisma from "@/server/db";

export default async function Home() {

  const users = await prisma.user.findMany()
  return (
    <>
      {JSON.stringify(users)}
    </>
  )

}


