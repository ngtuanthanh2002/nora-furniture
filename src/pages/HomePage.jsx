import { Hero } from '../components/sections/Hero';
import { Credentials } from '../components/sections/Credentials';
import { FeaturedCollections } from '../components/sections/FeaturedCollections';
import { BestSellers } from '../components/sections/BestSellers';
import { Pricing } from '../components/sections/Pricing';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Projects } from '../components/sections/Projects';
import { BrandStory } from '../components/sections/BrandStory';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { TestimonialsFAQ } from '../components/sections/TestimonialsFAQ';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Credentials />
      <FeaturedCollections />
      <BestSellers />
      <Pricing />
      <WhyChoose />
      <Projects />
      <BrandStory />
      <ConsultationForm />
      <TestimonialsFAQ />
    </main>
  );
}

