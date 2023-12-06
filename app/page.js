import Center from "@/components/Center";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main className=" h-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Center />
      </div>

      <div className="sticky bottom-0 text-gray-100">
        <Player />
      </div>
    </main>
  );
}
