import Body from "@/components/Body";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center overflow-x-hidden">
      <div className="z-20 flex flex-col gap-20 mt-40">
        <Hero />
        <Body/>
      </div>
    </main>
  );
}
