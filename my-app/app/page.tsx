import NavigationBar from "@/components/NavigationBar";
import Search from "@/components/Search";
import Maps from "@/components/Maps";
import BuildingList from "@/components/BuildingList"
import Footers from "@/components/Footers";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Search />
      <Maps />
      <BuildingList />
      <Footers />

      <h1>Welcome to My App</h1>
    </main>
  );
}