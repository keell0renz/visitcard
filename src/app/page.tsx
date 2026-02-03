import { Hero } from '../components/hero';
import { BookCall } from '../components/book-call';
import Experience from '../components/experience';
import { Footer } from '../components/footer';
import { experience } from '../config/experience';

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-20">
      <Hero />
      <BookCall />
      <Experience experiences={experience} />
      <Footer />
    </div>
  );
}
