import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <Center />
    </main>
  );
}
