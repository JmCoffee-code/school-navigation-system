import Navbar from "@/components/Navbar";
import SearchBar from "@/components/searchBar";
import Map from "@/components/map";
import BuildingCard from "@/components/buildingCard";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <Map />
      <BuildingCard />
      <Footer />

      <h1>School Maps</h1>
    </main>
  );
}