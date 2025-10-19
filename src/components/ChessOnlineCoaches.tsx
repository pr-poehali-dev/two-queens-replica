import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChessOnlineCoaches = () => {
  const coaches = [
    {
      name: 'Александр Петров',
      title: 'Международный мастер',
      rating: 2480,
      experience: '15 лет',
      students: 320,
      specialization: 'Дебюты, Позиционная игра',
      achievements: ['IM титул 2015', 'Чемпион России U18', '3-кратный победитель областных турниров'],
      image: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      name: 'Мария Волкова',
      title: 'Гроссмейстер WGM',
      rating: 2520,
      experience: '12 лет',
      students: 280,
      specialization: 'Тактика, Эндшпиль',
      achievements: ['WGM титул 2018', 'Чемпионка Европы U21', 'Тренер сборной России'],
      image: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
      name: 'Дмитрий Соколов',
      title: 'Международный гроссмейстер',
      rating: 2650,
      experience: '20 лет',
      students: 450,
      specialization: 'Профессиональная подготовка',
      achievements: ['GM титул 2010', 'Участник Кубка мира FIDE', 'Автор 3 книг по шахматам'],
      image: 'bg-gradient-to-br from-orange-500 to-orange-700'
    },
    {
      name: 'Елена Смирнова',
      title: 'FIDE мастер',
      rating: 2380,
      experience: '8 лет',
      students: 195,
      specialization: 'Работа с начинающими',
      achievements: ['FM титул 2019', 'Детский тренер года 2022', 'Специалист по детской психологии'],
      image: 'bg-gradient-to-br from-pink-500 to-pink-700'
    }
  ];

  return (
    <section id="coaches" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши тренеры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные шахматисты с титулами и большим опытом преподавания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {coaches.map((coach, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary/50">
              <div className="flex flex-col sm:flex-row">
                <div className={`${coach.image} w-full sm:w-48 h-48 sm:h-auto flex items-center justify-center text-white text-6xl font-bold`}>
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardContent className="p-6 flex-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                      <p className="text-primary font-semibold">{coach.title}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y">
                      <div>
                        <div className="text-2xl font-bold text-primary">{coach.rating}</div>
                        <div className="text-xs text-muted-foreground">Рейтинг FIDE</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{coach.experience}</div>
                        <div className="text-xs text-muted-foreground">Опыт</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{coach.students}</div>
                        <div className="text-xs text-muted-foreground">Учеников</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Target" size={16} />
                        Специализация:
                      </div>
                      <p className="text-sm text-muted-foreground">{coach.specialization}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Award" size={16} />
                        Достижения:
                      </div>
                      <ul className="space-y-1">
                        {coach.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full">
                      Записаться на урок
                      <Icon name="Calendar" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Icon name="Users" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Индивидуальный подход к каждому ученику</h3>
              <p className="mb-6 text-white/90">
                Все наши тренеры проходят строгий отбор и регулярное обучение современным методикам преподавания. 
                Мы подберем идеального тренера под ваш уровень и цели.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Подобрать тренера
                  <Icon name="Search" size={18} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Пробный урок бесплатно
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChessOnlineCoaches;
