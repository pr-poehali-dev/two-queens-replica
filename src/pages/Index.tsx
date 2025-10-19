import KidsChessHeader from '@/components/KidsChessHeader';
import KidsChessHero from '@/components/KidsChessHero';
import KidsChessCourses from '@/components/KidsChessCourses';
import KidsChessWhy from '@/components/KidsChessWhy';
import KidsChessCoaches from '@/components/KidsChessCoaches';
import KidsChessPrices from '@/components/KidsChessPrices';
import KidsChessContacts from '@/components/KidsChessContacts';
import KidsChessFooter from '@/components/KidsChessFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <KidsChessHeader />
      <main>
        <KidsChessHero />
        <KidsChessCourses />
        <KidsChessWhy />
        <KidsChessCoaches />
        <KidsChessPrices />
        <KidsChessContacts />
      </main>
      <KidsChessFooter />
    </div>
  );
};

export default Index;