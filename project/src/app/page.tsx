import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact.js';
import Footer from '@/components/Footer.js';

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}