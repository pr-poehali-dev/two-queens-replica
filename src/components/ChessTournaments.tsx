import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ChessTournaments = () => {
  const tournaments = [
    {
      title: 'Кубок Осени 2025',
      date: '25-27 октября',
      participants: '64',
      prize: '50,000 ₽',
      status: 'Регистрация',
      type: 'Блиц',
      color: 'bg-green-500'
    },
    {
      title: 'Гроссмейстерский турнир',
      date: '1-5 ноября',
      participants: '128',
      prize: '200,000 ₽',
      status: 'Скоро',
      type: 'Классика',
      color: 'bg-purple-500'
    },
    {
      title: 'Быстрые шахматы онлайн',
      date: 'Каждую пятницу',
      participants: '256',
      prize: '10,000 ₽',
      status: 'Открыт',
      type: 'Рапид',
      color: 'bg-blue-500'
    }
  ];

  const topPlayers = [
    { place: 1, name: 'Александр Петров', rating: 2650, country: '🇷🇺' },
    { place: 2, name: 'Мария Смирнова', rating: 2580, country: '🇷🇺' },
    { place: 3, name: 'Дмитрий Козлов', rating: 2540, country: '🇷🇺' },
    { place: 4, name: 'Елена Волкова', rating: 2510, country: '🇷🇺' },
    { place: 5, name: 'Иван Соколов', rating: 2490, country: '🇷🇺' }
  ];

  return (
    <section id="tournaments" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Турниры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Участвуйте в турнирах, соревнуйтесь с лучшими и выигрывайте призы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {tournaments.map((tournament, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${tournament.color} text-white`}>{tournament.status}</Badge>
                  <Badge variant="outline">{tournament.type}</Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{tournament.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} className="text-muted-foreground" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span>{tournament.participants} участников</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Trophy" size={16} className="text-muted-foreground" />
                    <span className="font-semibold text-primary">{tournament.prize}</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border animate-scale-in">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Топ игроков</h3>
                <Button variant="ghost" size="sm">
                  Полный рейтинг
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
              
              <div className="space-y-3">
                {topPlayers.map((player) => (
                  <div
                    key={player.place}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      player.place === 1 ? 'bg-yellow-500 text-white' :
                      player.place === 2 ? 'bg-gray-400 text-white' :
                      player.place === 3 ? 'bg-orange-600 text-white' :
                      'bg-muted-foreground/20'
                    }`}>
                      {player.place}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{player.country}</span>
                        <span className="font-semibold">{player.name}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Рейтинг</div>
                      <div className="text-xl font-bold text-primary">{player.rating}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChessTournaments;
