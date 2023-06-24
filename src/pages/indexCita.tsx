import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Calendar from "@/components/Calendar";

const inter = Inter({ subsets: ["latin"] });

export default function IndexCita() {
 
  return (
    <>
      <div className="tablee">
        <Calendar/>
      </div>
    </>
  );
}
