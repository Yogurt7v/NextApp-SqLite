"use client"
import Image from "next/image";
import prisma from "@/server/db";
import { useState, useEffect } from "react";

export default function Home() {

  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/api/hello')
      const d = await res.json()
      console.log(d);

      setData(d)
    }
    getData()
  }, [])

  return (
    <>
      {data}
    </>
  )

}


