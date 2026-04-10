import { About } from './view/components/about';
import { Differentials } from './view/components/differentials';
import { NewHero } from './view/components/new-hero';
import { NewServices } from './view/components/new-services';
import { Portfolio } from './view/components/portfolio';
import { ProfessionalHeader } from './view/components/professional-header';
import { Testimonials } from './view/components/testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ProfessionalHeader />
      <NewHero />
      <NewServices />
      <Portfolio />
      <Differentials />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
