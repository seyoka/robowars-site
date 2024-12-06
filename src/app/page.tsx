import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import NavBar from "@/components/ui/NavBar";
import Collaborators from "@/components/sections/Collaborators";
import FAQ from "@/components/sections/FAQ";
import RegisterForm from "@/components/sections/RegisterForm";

export default function Home() {
  return (
    <main className="bg-black text-white font-space-mono">
      <NavBar />
      <Hero />
      <Gallery />
      <Collaborators />
      <FAQ />
      <RegisterForm />
      <Contact />
    </main>
  );
}
