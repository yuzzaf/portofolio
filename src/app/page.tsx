import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SkillsGrid from "@/components/SkillsGrid";
import EducationTimeline from "@/components/EducationTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <div id="stack">
          <SkillsGrid />
        </div>
        <EducationTimeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
