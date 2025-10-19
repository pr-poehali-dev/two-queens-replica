import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChessBoard = () => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  const pieces: { [key: string]: string } = {
    'a8': '♜', 'b8': '♞', 'c8': '♝', 'd8': '♛', 'e8': '♚', 'f8': '♝', 'g8': '♞', 'h8': '♜',
    'a7': '♟', 'b7': '♟', 'c7': '♟', 'd7': '♟', 'e7': '♟', 'f7': '♟', 'g7': '♟', 'h7': '♟',
    'a2': '♙', 'b2': '♙', 'c2': '♙', 'd2': '♙', 'e2': '♙', 'f2': '♙', 'g2': '♙', 'h2': '♙',
    'a1': '♖', 'b1': '♘', 'c1': '♗', 'd1': '♕', 'e1': '♔', 'f1': '♗', 'g1': '♘', 'h1': '♖',
  };

  return (
    <section id="play" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Играть онлайн</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите режим игры и начните партию прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden animate-scale-in">
              <CardContent className="p-4 md:p-6">
                <div className="aspect-square max-w-2xl mx-auto">
                  <div className="grid grid-cols-8 gap-0 border-4 border-foreground rounded-lg overflow-hidden shadow-2xl">
                    {ranks.map(rank =>
                      files.map(file => {
                        const square = `${file}${rank}`;
                        const isLight = (files.indexOf(file) + rank) % 2 === 0;
                        const piece = pieces[square];
                        
                        return (
                          <div
                            key={square}
                            className={`aspect-square flex items-center justify-center text-4xl md:text-5xl cursor-pointer transition-all hover:scale-105 ${
                              isLight ? 'bg-accent' : 'bg-primary'
                            }`}
                          >
                            {piece}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" size="lg">
                    <Icon name="RotateCcw" size={20} className="mr-2" />
                    Новая игра
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Undo2" size={20} className="mr-2" />
                    Назад
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Быстрая игра</h3>
                    <p className="text-sm text-muted-foreground">5+0 минут</p>
                  </div>
                </div>
                <Button className="w-full" size="lg">Играть</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Блиц</h3>
                    <p className="text-sm text-muted-foreground">3+2 минуты</p>
                  </div>
                </div>
                <Button className="w-full" size="lg" variant="secondary">Играть</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Против компьютера</h3>
                    <p className="text-sm text-muted-foreground">Выберите сложность</p>
                  </div>
                </div>
                <Button className="w-full" size="lg" variant="outline">Играть</Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Онлайн сейчас</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm">Игроков онлайн</span>
                    </div>
                    <span className="font-bold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Активных партий</span>
                    <span className="font-medium">423</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessBoard;
