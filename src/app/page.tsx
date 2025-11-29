import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import Experience from '../components/experience';
import { Projects } from '../components/projects';
import { Stack } from '../components/stack';
import { Footer } from '../components/footer';
import { experience } from '../config/experience';

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <Hero />
        <Experience experiences={experience} />
        {/* <Projects /> */}
        <Stack />
        <Footer />
      </div>
    </>
  );
}
