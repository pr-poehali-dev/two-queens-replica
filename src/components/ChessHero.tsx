import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChessHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="text-8xl">♔</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Шахматный клуб
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Играйте, учитесь и совершенствуйтесь в древнейшей интеллектуальной игре
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Начать игру
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="GraduationCap" size={20} className="mr-2" />
              Обучение
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Игроков</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Турниров</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Онлайн</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Уроков</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessHero;
