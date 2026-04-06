import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database/event.model";
import { cacheLife } from "next/cache";
import React from "react";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const page = async() => {
  'use cache';
  cacheLife('hours')
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <>
      <div>
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl">
          The Hub foor Every Dev <br /> Event You Can not Miss
        </h1>
        <p className="text-center my-4">
          hackathons , Meetups , Conference , all in one place
        </p>
        <ExploreBtn/>
        <div className="mt-20 space-y-7">
          <h3 id="events">Featured Section</h3>

          <ul className="events">
            {events && events.length>0 && events.map((event : IEvent)=>(
              <li className="list-none" key={event.title}>
                <EventCard {...event}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
