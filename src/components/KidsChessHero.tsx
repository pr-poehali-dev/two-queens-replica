import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const KidsChessHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <span>⭐</span>
              <span>Первый урок БЕСПЛАТНО!</span>
              <span>🎁</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Научим вашего ребёнка играть в шахматы!
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Онлайн-занятия для детей 4-16 лет. Развиваем логику, память и внимание через игру. 
              Весёлые уроки с профессиональными тренерами! 🎯
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all">
                <Icon name="Rocket" size={24} className="mr-2" />
                Записаться на пробный урок
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2">
                <Icon name="PlayCircle" size={24} className="mr-2" />
                Смотреть видео
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">3500+</div>
                <div className="text-sm text-muted-foreground mt-1">Детей учатся</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Тренеров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5.0</div>
                <div className="text-sm text-muted-foreground mt-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-4 border-primary/30 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1.5 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => {
                      const row = Math.floor(i / 8);
                      const col = i % 8;
                      const isLight = (row + col) % 2 === 0;
                      return (
                        <div
                          key={i}
                          className={`${
                            isLight ? 'bg-white' : 'bg-gradient-to-br from-primary/40 to-purple-400'
                          } rounded-lg shadow-sm flex items-center justify-center text-3xl transition-transform hover:scale-110 hover:rotate-12 cursor-pointer`}
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

            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-secondary to-orange-400 text-white p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="text-center">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-sm font-bold">Игровой</div>
                <div className="text-xs">формат</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border-4 border-primary/30">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏆</div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Проведено уроков</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">28,500+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🎯', text: 'Развиваем логику' },
            { icon: '🧠', text: 'Тренируем память' },
            { icon: '⚡', text: 'Улучшаем внимание' },
            { icon: '🎓', text: 'Помогаем в учёбе' }
          ].map((item, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsChessHero;
