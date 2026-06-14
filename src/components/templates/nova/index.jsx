import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";


export default function Nova({ heroData, aboutData, skills, socialLinks, projects, experience, education, certifications, contact }) {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <Hero heroData={heroData} socialLinks={socialLinks} />
      <About aboutData={aboutData} HeroData={heroData} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experience} />
      <Education education={education} />
      <Certifications certifications={certifications} />
      <Contact contact={contact} aboutData={aboutData} />
      <Footer HeroData={heroData} aboutData={aboutData} />
    </main>
  );
}
