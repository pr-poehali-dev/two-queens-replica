import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const KidsChessCoaches = () => {
  const coaches = [
    {
      name: 'Елена Радостная',
      title: 'Детский тренер',
      experience: '12 лет с детьми',
      students: 450,
      age: '4-10 лет',
      emoji: '🌸',
      color: 'from-pink-400 to-pink-600',
      specialization: 'Специалист по работе с дошкольниками и младшими школьниками',
      achievements: [
        'Кандидат в мастера спорта',
        'Педагог-психолог',
        'Автор методики "Шахматы-сказка"',
        '15+ побед учеников на турнирах'
      ]
    },
    {
      name: 'Дмитрий Умников',
      title: 'Мастер FIDE',
      experience: '10 лет обучения',
      students: 320,
      age: '7-16 лет',
      emoji: '🎯',
      color: 'from-blue-400 to-blue-600',
      specialization: 'Подготовка к соревнованиям и получение разрядов',
      achievements: [
        'Мастер FIDE, рейтинг 2380',
        'Чемпион области 2020',
        'Тренер года 2022',
        '50+ учеников получили разряды'
      ]
    },
    {
      name: 'Анна Весёлая',
      title: 'Педагог-психолог',
      experience: '8 лет практики',
      students: 280,
      age: '5-12 лет',
      emoji: '🎨',
      color: 'from-purple-400 to-purple-600',
      specialization: 'Игровые методики обучения для детей с СДВГ',
      achievements: [
        'Кандидат в мастера',
        'Детский психолог',
        'Сертификат Монтессори',
        'Специалист по гиперактивным детям'
      ]
    }
  ];

  return (
    <section id="coaches" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">👨‍🏫</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши тренеры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные педагоги, которые любят детей и знают, как сделать обучение интересным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coaches.map((coach, index) => (
            <Card key={index} className="border-3 hover:shadow-2xl transition-all overflow-hidden">
              <div className={`h-40 bg-gradient-to-r ${coach.color} flex items-center justify-center text-8xl`}>
                {coach.emoji}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                <p className="text-primary font-semibold mb-4">{coach.title}</p>

                <div className="bg-accent rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">{coach.experience}</div>
                      <div className="text-xs text-muted-foreground">Опыт работы</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{coach.students}+</div>
                      <div className="text-xs text-muted-foreground">Учеников</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    Возраст: {coach.age}
                  </div>
                  <p className="text-sm text-muted-foreground">{coach.specialization}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2">Достижения:</div>
                  <ul className="space-y-1">
                    {coach.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Записаться к тренеру
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-4 border-primary/30 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-4">Все тренеры проходят строгий отбор</h3>
                <ul className="space-y-3">
                  {[
                    'Спортивное звание не ниже КМС',
                    'Опыт работы с детьми от 5 лет',
                    'Педагогическое образование',
                    'Прохождение психологических тестов',
                    'Регулярное повышение квалификации'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-2">😊</div>
                  <h4 className="font-bold text-xl">Подберём идеального тренера</h4>
                </div>
                <p className="text-muted-foreground mb-6 text-center">
                  Расскажите о характере и интересах ребёнка — мы найдём тренера, который точно подойдёт!
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KidsChessCoaches;
