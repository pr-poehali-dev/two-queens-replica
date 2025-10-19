import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChessOnlineCourses = () => {
  const courses = [
    {
      level: 'Начинающий',
      title: 'Основы шахмат',
      description: 'Изучите правила, базовые стратегии и тактики. Идеально для тех, кто только начинает.',
      duration: '8 недель',
      lessons: 24,
      icon: 'BookOpen',
      color: 'bg-green-500',
      topics: [
        'Правила и ходы фигур',
        'Основные дебюты',
        'Простые тактики',
        'Базовые эндшпили'
      ]
    },
    {
      level: 'Средний',
      title: 'Тактика и стратегия',
      description: 'Углубите знания тактических приемов и стратегического планирования.',
      duration: '12 недель',
      lessons: 36,
      icon: 'Target',
      color: 'bg-blue-500',
      topics: [
        'Продвинутые дебюты',
        'Позиционная игра',
        'Комбинации',
        'Стратегическое планирование'
      ]
    },
    {
      level: 'Продвинутый',
      title: 'Мастерство',
      description: 'Достигните уровня мастера через глубокий анализ и профессиональную подготовку.',
      duration: '16 недель',
      lessons: 48,
      icon: 'Crown',
      color: 'bg-purple-500',
      topics: [
        'Глубокая теория дебютов',
        'Профессиональные эндшпили',
        'Психология игры',
        'Анализ партий гроссмейстеров'
      ]
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите программу, которая соответствует вашему уровню и целям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    <Icon name={course.icon as any} size={24} />
                  </div>
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Video" size={16} className="text-muted-foreground" />
                      <span>{course.lessons} уроков</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold mb-3">Вы изучите:</div>
                    <ul className="space-y-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <Icon name="Gift" size={32} />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold mb-2">Не знаете, какой курс выбрать?</h3>
                  <p className="text-muted-foreground">
                    Запишитесь на бесплатную консультацию с тренером, и мы поможем выбрать оптимальную программу
                  </p>
                </div>
                <Button size="lg" className="flex-shrink-0">
                  Получить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChessOnlineCourses;
