import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts/Hero";
import About from "@/components/layouts/About";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
