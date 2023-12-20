import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import ArtistTable from "@/components/table/Artists";

export default function UpcomingSales() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <section className="w-full flex flex-col">
        <Navbar />
        <section className="p-2 text-[20px] font-semibold">
          <h1>Upcoming Sales</h1>
          <ArtistTable/>
        </section>
      </section>
    </div>
  );
}
