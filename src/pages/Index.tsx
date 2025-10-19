import TwoQueensHeader from '@/components/TwoQueensHeader';
import TwoQueensHero from '@/components/TwoQueensHero';
import TwoQueensAbout from '@/components/TwoQueensAbout';
import TwoQueensTraining from '@/components/TwoQueensTraining';
import TwoQueensCoaches from '@/components/TwoQueensCoaches';
import TwoQueensSchedule from '@/components/TwoQueensSchedule';
import TwoQueensPrices from '@/components/TwoQueensPrices';
import TwoQueensContacts from '@/components/TwoQueensContacts';
import TwoQueensFooter from '@/components/TwoQueensFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TwoQueensHeader />
      <main>
        <TwoQueensHero />
        <TwoQueensAbout />
        <TwoQueensTraining />
        <TwoQueensCoaches />
        <TwoQueensSchedule />
        <TwoQueensPrices />
        <TwoQueensContacts />
      </main>
      <TwoQueensFooter />
    </div>
  );
};

export default Index;