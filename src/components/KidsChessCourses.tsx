import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const KidsChessCourses = () => {
  const courses = [
    {
      age: '4-6 лет',
      title: '🎨 Шахматная сказка',
      description: 'Знакомимся с фигурами через игры и сказки. Учимся основным правилам в весёлой форме!',
      duration: '30 мин',
      format: 'Групповые',
      color: 'from-pink-400 to-purple-400',
      emoji: '🦄',
      features: [
        'Игровой формат занятий',
        'Сказки про шахматные фигуры',
        'Развитие внимания и памяти',
        'Группы до 6 детей'
      ]
    },
    {
      age: '7-10 лет',
      title: '🚀 Юный стратег',
      description: 'Изучаем тактики и стратегии. Участвуем в турнирах и получаем первые победы!',
      duration: '45 мин',
      format: 'Групповые/Индив.',
      color: 'from-blue-400 to-cyan-400',
      emoji: '🎯',
      features: [
        'Базовые тактики и комбинации',
        'Участие в онлайн-турнирах',
        'Домашние задания в игровой форме',
        'Рейтинговая система прогресса'
      ]
    },
    {
      age: '11-16 лет',
      title: '👑 Шахматный чемпион',
      description: 'Профессиональная подготовка для участия в соревнованиях и достижения спортивных разрядов.',
      duration: '60 мин',
      format: 'Индивидуальные',
      color: 'from-orange-400 to-red-400',
      emoji: '🏆',
      features: [
        'Глубокое изучение теории',
        'Подготовка к соревнованиям',
        'Анализ партий с гроссмейстерами',
        'Получение спортивных разрядов'
      ]
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы разработали специальные программы для каждого возраста с учётом развития ребёнка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="border-3 hover:border-primary transition-all hover:shadow-2xl overflow-hidden">
              <div className={`h-32 bg-gradient-to-r ${course.color} flex items-center justify-center text-7xl`}>
                {course.emoji}
              </div>
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  {course.age}
                </div>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Записаться
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold mb-4">Не уверены, какая программа подходит?</h3>
              <p className="text-lg mb-6 text-white/90">
                Запишитесь на БЕСПЛАТНЫЙ пробный урок! Наш тренер определит уровень ребёнка 
                и порекомендует оптимальную программу обучения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Получить пробный урок
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-white bg-white/10 text-white hover:bg-white/20">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить нам
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KidsChessCourses;
