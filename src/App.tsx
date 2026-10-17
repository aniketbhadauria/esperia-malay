import { Hero } from "./components/Hero";
import { LinkTable } from "./components/LinkTable";
import { LogoMarquee } from "./components/LogoMarquee";

export default function App() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 md:py-12">
      <Hero />
      <LogoMarquee />
      <LinkTable />
    </main>
  );
}
