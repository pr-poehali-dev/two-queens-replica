import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TwoQueensCoaches = () => {
  const coaches = [
    {
      name: 'Екатерина Лагно',
      title: 'Международный гроссмейстер',
      rating: '2550',
      experience: '15 лет',
      avatar: '👩',
      specialization: 'Дебютная подготовка',
      achievements: [
        'Чемпионка Европы 2015',
        'Участница ЧМ ФИДЕ',
        'Автор дебютных курсов'
      ]
    },
    {
      name: 'Александра Горячкина',
      title: 'Международный мастер',
      rating: '2480',
      experience: '10 лет',
      avatar: '👩‍🦰',
      specialization: 'Тактика и комбинации',
      achievements: [
        'Вице-чемпионка России',
        '3-е место на Олимпиаде',
        'Более 200 учениц'
      ]
    },
    {
      name: 'Ольга Гиря',
      title: 'Женский гроссмейстер',
      rating: '2420',
      experience: '12 лет',
      avatar: '👱‍♀️',
      specialization: 'Позиционная игра',
      achievements: [
        'Чемпионка России среди женщин',
        'Победительница Кубка России',
        'Тренер сборной'
      ]
    },
    {
      name: 'Мария Музычук',
      title: 'Международный мастер',
      rating: '2390',
      experience: '8 лет',
      avatar: '👩‍🦱',
      specialization: 'Эндшпиль',
      achievements: [
        'Мастер ФИДЕ',
        'Чемпионка молодежного первенства',
        'Специалист по эндшпилю'
      ]
    }
  ];

  return (
    <section id="coaches" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши тренеры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные шахматистки с международными титулами и большим опытом преподавания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {coaches.map((coach, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all hover:border-primary/50 group">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {coach.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{coach.title}</p>
                  <Badge variant="outline" className="text-xs">{coach.specialization}</Badge>
                </div>

                <div className="space-y-3 mb-4 border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Рейтинг ФИДЕ:</span>
                    <span className="font-semibold">{coach.rating}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Опыт:</span>
                    <span className="font-semibold">{coach.experience}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Достижения:</p>
                  <ul className="space-y-1">
                    {coach.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-1 text-xs">
                        <Icon name="Award" size={12} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/5">
                  Записаться к тренеру
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoQueensCoaches;
