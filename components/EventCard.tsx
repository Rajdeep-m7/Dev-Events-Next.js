import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";


interface props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, location,slug , date, time }: props) => {
  return (
    <div>
      <Link href={`/events/${slug}`} id="event-card">
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          loading="eager"
          className="poster"
        />
        <div className="flex flex-row gap-2 items-center">
          <IoLocationOutline />
          <p>{location}</p>
        </div>
        <p className="title">{title}</p>
        <div className="datetime">
          <div className="items-center">
            <SlCalender />
            <p>{date}</p>
          </div>
          <div className="items-center">
            <MdAccessTime />
            <p>{time}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
