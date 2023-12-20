import { Link,useLocation } from "react-router-dom";
import UserPic from "../../assets/User_Pic.png"

const linksList = [
  {
    text: "Upcoming Sales",
    to: "/upcoming-sales",
  },
  {
    text: "Event Analytics",
    to: "/event-analytics",
  },
  {
    text: "Artist Metric",
    to: "/artist-metric",
  },
  {
    text: "Training",
    to: "/training",
  },
];
export default function Navbar() {
  const {pathname:currentPath} = useLocation()
  return (
    <nav className="flex items-center bg-[#2A3042] h-[74px] w-full justify-between">
      <section className="flex gap-[5px]">
        {linksList.map((l) => {
          return <NavLinks currentPath={currentPath} key={l.to} pathname={l.to} text={l.text} />;
        })}
      </section>
      <section className="flex items-center gap-2">
        <p className="text-[#959CB6]">Hi, <span className="text-white">Sean</span></p>
        <img src={UserPic} alt={UserPic} className="rounded-full" />
      </section>
    </nav>
  );
}

const NavLinks = ({ pathname, text, currentPath }: { pathname: string; text: string; currentPath:string }) => {
  const linkStyle = pathname == currentPath ? "bg-white text-black" : "text-white"
  return (
    <Link to={pathname} className={`px-[15px] text-[14px] py-[8px] cursor-pointer ${linkStyle} hover:bg-white hover:text-black rounded-sm`}>
      {text}
    </Link>
  );
};
