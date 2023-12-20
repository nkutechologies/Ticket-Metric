
import Menu from "../ui/Menu";

const MENUITEMS = {
  General: [
    {
      itemName: "WatchList",
    },
    {
      itemName: "My Buying List",
    },
    {
      itemName: "VF Signups",
    },
  ],
  "Upcoming - Quick Filter": [
    {
      itemName: "First Presale Today",
    },
    {
      itemName: "Presale Today",
    },
    {
      itemName: "First Presale Tomorrow",
    },
    {
      itemName: "Presale Tomorrow",
    },
    {
      itemName: "Onsale Today",
    },
    {
      itemName: "Onsale Tomorrow",
    },
  ],
};

export default function Sidebar() {
  return (
    <div className="w-[252px] bg-[#2A3042] min-h-screen flex flex-col gap-7">
      <h1 className="font-poppins text-white w-[252px] text-[19px] text-center mt-[1.3rem]">
        Ticket Metric
      </h1>
      <section className="flex flex-col ">
      <Menu items={MENUITEMS["General"]} menuTitle="General" />
      <Menu items={MENUITEMS["Upcoming - Quick Filter"]} menuTitle="Upcoming - Quick Filter " />
      </section >
    </div>
  );
}



