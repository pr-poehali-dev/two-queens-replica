import ChessHeader from '@/components/ChessHeader';
import ChessHero from '@/components/ChessHero';
import ChessBoard from '@/components/ChessBoard';
import ChessLessons from '@/components/ChessLessons';
import ChessTournaments from '@/components/ChessTournaments';
import ChessNews from '@/components/ChessNews';
import ChessFooter from '@/components/ChessFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ChessHeader />
      <main>
        <ChessHero />
        <ChessBoard />
        <ChessLessons />
        <ChessTournaments />
        <ChessNews />
      </main>
      <ChessFooter />
    </div>
  );
};

export default Index;