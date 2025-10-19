import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ChessLessons = () => {
  const lessons = [
    {
      title: 'Основы игры',
      description: 'Правила, ходы фигур, цель игры',
      level: 'Начинающий',
      duration: '30 мин',
      icon: '♟️',
      color: 'bg-green-500/10 text-green-700'
    },
    {
      title: 'Тактические приёмы',
      description: 'Вилка, связка, двойной удар',
      level: 'Средний',
      duration: '45 мин',
      icon: '⚔️',
      color: 'bg-blue-500/10 text-blue-700'
    },
    {
      title: 'Дебюты',
      description: 'Испанская партия, Сицилианская защита',
      level: 'Средний',
      duration: '60 мин',
      icon: '📚',
      color: 'bg-blue-500/10 text-blue-700'
    },
    {
      title: 'Эндшпиль',
      description: 'Король и пешка, ладейные окончания',
      level: 'Продвинутый',
      duration: '50 мин',
      icon: '♔',
      color: 'bg-purple-500/10 text-purple-700'
    },
    {
      title: 'Позиционная игра',
      description: 'Контроль центра, слабые поля, план игры',
      level: 'Продвинутый',
      duration: '55 мин',
      icon: '🎯',
      color: 'bg-purple-500/10 text-purple-700'
    },
    {
      title: 'Шахматная стратегия',
      description: 'Долгосрочное планирование, оценка позиции',
      level: 'Эксперт',
      duration: '70 мин',
      icon: '🧠',
      color: 'bg-orange-500/10 text-orange-700'
    }
  ];

  return (
    <section id="lessons" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Обучение</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Структурированные уроки от новичка до гроссмейстера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lessons.map((lesson, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all group animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${lesson.color} flex items-center justify-center text-3xl`}>
                    {lesson.icon}
                  </div>
                  <Badge variant="outline">{lesson.level}</Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {lesson.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{lesson.duration}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Начать
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Персональный тренер</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Занимайтесь с профессиональным тренером, получайте индивидуальные рекомендации 
                и улучшайте свою игру быстрее
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Icon name="Users" size={20} className="mr-2" />
                  Найти тренера
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Расписание занятий
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChessLessons;
