import Navbar from "../components/Home/Navbar";
import NavDown from "../components/Home/NavDown";

export default function HomeLayot({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full">
      <Navbar />

      <NavDown />
      {children}
    </section>
  );
}
