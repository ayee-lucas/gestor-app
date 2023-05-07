import Navbar from "../components/Home/Navbar";

export default function HomeLayot({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full">
      <Navbar />
      {children}
    </section>
  );
}
