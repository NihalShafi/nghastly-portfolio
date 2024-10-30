import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex sm:px-10 px-5 mx-auto flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl  w-full">
        <FloatingNav navItems={[]}/>
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
