import artistPic from "../../assets/ArtistPic.png";
import artistFlag from "../../assets/ArtistFlag.png";
import { LuPencil } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Menu from "../ui/Menu";
import spotifyPic from "../../assets/Spotify.png";
import instaPic from "../../assets/Instagram.png";
import youtubePic from "../../assets/Youtube.png";
import React from "react";
import "./styles.css"

const rowHeaders = [
  {
    title: "EVENT",
    classNames: ["col-span-1", "text-[#3F4254]"],
  },
  {
    title: "RANKING",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "DATE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "VENUE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "CITY",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "STATE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "CAPACITY",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "PRESALE & CODE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "PUBLIC SALE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "QUICK STATS",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "TIME LIMIT & PRICE RANGE",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
  {
    title: "ACTION",
    classNames: ["col-span-1", "text-[#A3A3A3]"],
  },
];

const artist = {
  event: {
    artistImage: artistPic,
    tag: "TM",
    name: "Travis Scott",
    genre: "Hip-Hop & Rap",
    flag: artistFlag,
  },
  ranking: 98,
  date: {
    day: "Saturday",
    date: "Oct 4, 2023",
    time: "(7:00 PM)",
  },
  venue: "Barclays Center",
  city: "Brooklyn",
  state: "NY",
  capacity: "18,000",
  presalecode: "2023-09-22",
  publicSale: {
    day: "Saturday",
    date: "Oct 4, 2023",
    time: "(7:00 PM)",
  },
  quickStats: "",
  limit: "Limit: 8",
  priceRange: " $43 - $175",
  followers: {
    spotify: "2.5M",
    instagram: "54K",
    youtube: "50K",
  },
};

const artistRow = [artist,artist,artist,artist,artist,artist,artist];

const ArtistTable = () => {
  return (
    <div className="artistGrid rounded text-[12px] border">
      {rowHeaders.map((header, idx) => (
        <div
          key={idx}
          className={`text-[12px] flex items-center w-full bg-gray-200 ${header.classNames.join(
            " "
          )}`}
        >
          {header.title}
        </div>
      ))}
      {artistRow.map((art,idx) => {
        return (
          <React.Fragment key={idx}>
            <Event event={art.event} />
            <p >{art.ranking}</p>
            <Date date={art.date} />
            <p>{art.venue}</p>
            <p>{art.city}</p>
            <p>{art.state}</p>  
            <p>{art.capacity}</p>
            <Menu items={[]} menuTitle="2023-09-22" />
            <PublicSale date={art.date} />
            <QuickStats followers={art.followers} />
            <div>
              <p>{art.limit}</p>
              <p>{art.priceRange}</p>
            </div>
            <Actions />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ArtistTable;

const Event = ({ event }: { event: (typeof artist)["event"] }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="min-h-[46px] min-w-[46px]">
        <img src={event.artistImage} alt="artistImage" />
      </div>

      <section className="flex flex-col">
        <small>{event.tag}</small>
        <p>{event.name}</p>
        <div className="flex gap-1">
          <p className="whitespace-nowrap">{event.genre}</p>
          <img src={event.flag} alt="flag" />
        </div>
      </section>
    </div>
  );
};

const Date = ({ date }: { date: typeof artist.date }) => {
  return (
    <div>
      <p>{date.day}</p>
      <p>{date.date}</p>
      <p>{date.time}</p>
    </div>
  );
};

const PublicSale = ({ date }: { date: typeof artist.date }) => {
  return (
    <div>
      <p>{date.day}</p>
      <p>{date.date}</p>
      <p>{date.time}</p>
    </div>
  );
};

const SocialMediaFollowers = ({
  platformLogo,
  followers,
}: {
  platformLogo: string;
  followers: string;
}) => {
  return (
    <section className="flex gap-1">
      <img src={platformLogo} alt="Spotify" />
      <p>{followers}</p>
    </section>
  );
};

const QuickStats = ({ followers }: { followers: typeof artist.followers }) => {
  return (
    <div className="flex flex-col gap-1">
      <SocialMediaFollowers
        followers={followers.spotify}
        platformLogo={spotifyPic}
      />
      <SocialMediaFollowers
        followers={followers.instagram}
        platformLogo={instaPic}
      />
      <SocialMediaFollowers
        followers={followers.youtube}
        platformLogo={youtubePic}
      />
    </div>
  );
};

const Actions = () => {
  return (
    <div className="flex gap-2">
      <button className="bg-[#F3F6F9] w-[20px] h-[20px] text-center p-1">
        <LuPencil />
      </button>
      <button className="bg-[#F3F6F9] w-[20px] h-[20px] text-center p-1">
        <GoPlus />
      </button>
    </div>
  );
};
