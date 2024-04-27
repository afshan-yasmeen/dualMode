"use client"
import { CalendarForm } from "./Calender/calender";
import { CardDemo } from "./Card/card";
import Navbar from "./Navbar/page";


export default function Home() {
  return (
    <div className="p-4">
        <Navbar/>
      <h1 className=" pt-3 text-5xl font-bold">Welcome!</h1>
      <div className="md:flex md:flex-cols-2   gap-3 p-2">
      
      <CardDemo className="md:mt-0 mb-4" />
      <CalendarForm/>
      </div>
     
    </div>
  );
}
