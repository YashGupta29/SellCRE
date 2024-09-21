import Header from "@/components/header/header";
import './globals.css'
import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";
import Sample from "@/components/sample/sample";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Features />
        <Sample />
      </main>
    </div>
  );
}
