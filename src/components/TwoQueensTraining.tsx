import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TwoQueensTraining = () => {
  const programs = [
    {
      level: 'Новичок',
      title: 'Основы шахмат',
      duration: '2 месяца',
      lessons: 16,
      icon: '👑',
      color: 'bg-green-50 border-green-200',
      features: [
        'Изучение правил и ходов фигур',
        'Базовые тактические приёмы',
        'Простейшие эндшпили',
        'Основы дебютной теории',
        'Практические партии с разбором'
      ]
    },
    {
      level: 'Любитель',
      title: 'Развитие навыков',
      duration: '3 месяца',
      lessons: 24,
      icon: '♛',
      color: 'bg-blue-50 border-blue-200',
      features: [
        'Углубленная тактика',
        'Позиционная игра',
        'Дебютный репертуар',
        'Типовые миттельшпили',
        'Стратегическое планирование',
        'Анализ партий гроссмейстеров'
      ]
    },
    {
      level: 'Продвинутый',
      title: 'Мастерство',
      duration: '4 месяца',
      lessons: 32,
      icon: '🏆',
      color: 'bg-purple-50 border-purple-200',
      features: [
        'Глубокий позиционный анализ',
        'Сложные комбинации',
        'Эндшпильная техника',
        'Психология шахмат',
        'Подготовка к турнирам',
        'Работа с компьютерными программами',
        'Индивидуальный разбор партий'
      ]
    }
  ];

  return (
    <section id="training" className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите программу, соответствующую вашему уровню подготовки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className={`border-2 hover:shadow-xl transition-all ${program.color}`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{program.icon}</div>
                  <Badge variant="outline" className="mb-3">{program.level}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BookOpen" size={16} />
                      <span>{program.lessons} занятий</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Не уверены, какая программа вам подходит?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwoQueensTraining;
