import { Differentials } from './view/components/differentials';
import { NewHero } from './view/components/new-hero';
import { NewServices } from './view/components/new-services';
import { Portfolio } from './view/components/portfolio';
import { ProfessionalHeader } from './view/components/professional-header';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ProfessionalHeader />
      <NewHero />
      <NewServices />
      <Portfolio />
      <Differentials />
    </div>
  );
}

export default App;
