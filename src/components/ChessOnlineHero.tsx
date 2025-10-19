import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ChessOnlineHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Онлайн-школа шахмат №1
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Научитесь играть в шахматы онлайн
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Профессиональные тренеры, индивидуальный подход и гибкий график обучения. 
              От новичка до мастера за 6 месяцев.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Бесплатный пробный урок
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Смотреть программу
                <Icon name="PlayCircle" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Тренеров</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground mt-1">Рейтинг</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1 w-full h-full p-4">
                    {Array.from({ length: 64 }).map((_, i) => {
                      const row = Math.floor(i / 8);
                      const col = i % 8;
                      const isLight = (row + col) % 2 === 0;
                      return (
                        <div
                          key={i}
                          className={`${
                            isLight ? 'bg-white' : 'bg-primary/20'
                          } rounded-sm flex items-center justify-center text-2xl transition-transform hover:scale-110`}
                        >
                          {i === 0 && '♜'}
                          {i === 1 && '♞'}
                          {i === 2 && '♝'}
                          {i === 3 && '♛'}
                          {i === 4 && '♚'}
                          {i === 5 && '♝'}
                          {i === 6 && '♞'}
                          {i === 7 && '♜'}
                          {i >= 8 && i <= 15 && '♟'}
                          {i >= 48 && i <= 55 && '♙'}
                          {i === 56 && '♖'}
                          {i === 57 && '♘'}
                          {i === 58 && '♗'}
                          {i === 59 && '♕'}
                          {i === 60 && '♔'}
                          {i === 61 && '♗'}
                          {i === 62 && '♘'}
                          {i === 63 && '♖'}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <div>
                  <div className="text-xs font-medium">Сейчас онлайн</div>
                  <div className="text-lg font-bold">234 ученика</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border-2 border-primary/20">
              <div className="flex items-center gap-2">
                <Icon name="Trophy" size={20} className="text-primary" />
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Уроков проведено</div>
                  <div className="text-lg font-bold">15,420</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessOnlineHero;
