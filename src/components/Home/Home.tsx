import HeroSection from './sections/HeroSection/HeroSection';
import WhatWeDo from './sections/WhatWeDo/WhatWeDo';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import ToolsSection from './sections/ToolsSection/ToolsSection';
import InsightsSection from './sections/InsightsSection/InsightsSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import ClientsSection from './sections/ClientsSection/ClientsSection';
import ContactSection from './sections/ContactSection/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <ServicesSection />
      <ToolsSection />
      <InsightsSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
