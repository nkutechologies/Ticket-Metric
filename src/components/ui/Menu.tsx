import { IoInformationCircleSharp } from "react-icons/io5";
import { useState } from "react";


const Menu = ({ items, menuTitle }: { items: any[]; menuTitle: string }) => {
    const [isMenuOpen, setMenuOpen] = useState(true);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="p-2 ">
        <div className="flex bg-[#FBFBFB] text-black w-full items-center justify-between p-2 rounded-[2%] ">
          <button className="whitespace-nowrap">{menuTitle}</button>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-4 w-4 text-black transform origin-center transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
  
        {isMenuOpen && (
          <div className=" mt-2 flex flex-col gap-1 rounded-md">
            {items.map((item) => {
              return (
                <button
                  key={item.itemName}
                  className="flex justify-between items-center px-4 py-2 w-full text-[#DADADA] text-[13px]"
                >
                  <p className="px-[10px]">- {item.itemName}</p>
                  <i className="text-[#DADADA] text-lg">
                    <IoInformationCircleSharp />
                  </i>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  export default Menu
  