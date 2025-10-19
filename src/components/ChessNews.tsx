import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ChessNews = () => {
  const news = [
    {
      title: 'Карлсен защитил титул чемпиона мира',
      description: 'Магнус Карлсен в напряженной борьбе одержал победу над Яном Непомнящим со счетом 7.5:4.5',
      date: '18 октября 2025',
      category: 'Турниры',
      image: '🏆',
      readTime: '5 мин'
    },
    {
      title: 'Новые правила ФИДЕ вступают в силу',
      description: 'С ноября 2025 года начинают действовать обновленные правила проведения турниров',
      date: '16 октября 2025',
      category: 'Новости',
      image: '📜',
      readTime: '3 мин'
    },
    {
      title: 'Юная шахматистка стала гроссмейстером',
      description: 'Анна Смирнова в 14 лет получила звание гроссмейстера, став самой молодой в истории России',
      date: '15 октября 2025',
      category: 'События',
      image: '⭐',
      readTime: '4 мин'
    },
    {
      title: 'ИИ AlphaChess побеждает топ-игроков',
      description: 'Новая версия шахматного ИИ демонстрирует революционный подход к позиционной игре',
      date: '12 октября 2025',
      category: 'Технологии',
      image: '🤖',
      readTime: '6 мин'
    },
    {
      title: 'Кубок мира: результаты финала',
      description: 'Завершился престижный турнир с участием 128 сильнейших шахматистов планеты',
      date: '10 октября 2025',
      category: 'Турниры',
      image: '🌍',
      readTime: '7 мин'
    },
    {
      title: 'Онлайн-турниры: новый формат',
      description: 'Организаторы представили инновационную систему проведения онлайн-соревнований',
      date: '8 октября 2025',
      category: 'Новости',
      image: '💻',
      readTime: '4 мин'
    }
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Новости шахмат</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Последние события из мира шахмат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {news.map((item, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all group animate-fade-in overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{item.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <div className="text-5xl mb-4">{item.image}</div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <Button size="sm" variant="ghost" className="group-hover:text-primary">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Все новости
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChessNews;
