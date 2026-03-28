import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import React from "react";

const events = [
  {
    image: "/event1.webp",
    title: "AI & Machine Learning Summit 2026",
    slug: "ai-ml-summit-2026",
    location: "Bangalore, India",
    date: "12-4-2026",
    time: "April 12, 2026 • 9:00 AM - 5:30 PM"
  },
  {
    image: "/event2.webp",
    title: "Global DevOps Conference",
    slug: "global-devops-conference",
    location: "Hyderabad, India",
    date: "12-4-2026",
    time: "May 5, 2026 • 10:00 AM - 4:00 PM"
  }
]

const page = () => {
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
          <h3>Featured Section</h3>

          <ul className="events">
            {events.map((event)=>(
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
