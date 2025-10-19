import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const KidsChessWhy = () => {
  const benefits = [
    {
      icon: '🧠',
      title: 'Развитие интеллекта',
      description: 'Шахматы развивают логическое мышление, память и концентрацию внимания',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '📚',
      title: 'Успехи в учёбе',
      description: 'Дети, играющие в шахматы, показывают лучшие результаты в школе по всем предметам',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🎯',
      title: 'Достижение целей',
      description: 'Учим ставить цели, планировать действия и достигать результата',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🤝',
      title: 'Социализация',
      description: 'Групповые занятия помогают найти друзей с общими интересами',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: '⚡',
      title: 'Быстрое мышление',
      description: 'Развиваем способность принимать решения в условиях ограниченного времени',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '🏆',
      title: 'Уверенность в себе',
      description: 'Победы в партиях и турнирах повышают самооценку ребёнка',
      color: 'from-red-400 to-red-600'
    }
  ];

  const features = [
    {
      icon: 'Laptop',
      title: 'Удобная онлайн-платформа',
      description: 'Занимайтесь из дома в комфортной обстановке'
    },
    {
      icon: 'Calendar',
      title: 'Гибкое расписание',
      description: 'Выбирайте удобное время для занятий'
    },
    {
      icon: 'Award',
      title: 'Сертифицированные тренеры',
      description: 'Опытные педагоги с титулами и стажем'
    },
    {
      icon: 'Gamepad2',
      title: 'Игровой подход',
      description: 'Обучение через интересные игры и задачи'
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Родители видят успехи ребёнка в личном кабинете'
    },
    {
      icon: 'Shield',
      title: 'Безопасная среда',
      description: 'Закрытая платформа только для учеников школы'
    }
  ];

  return (
    <section id="why" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему шахматы?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Научно доказано: шахматы — лучший способ развития интеллекта у детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <CardContent className="p-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему именно мы?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 3500 родителей уже доверили нам обучение своих детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-4 border-primary/30 bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold mb-4">Отзывы родителей</h3>
                <blockquote className="border-l-4 border-primary pl-4 mb-4">
                  <p className="text-muted-foreground mb-2">
                    "Сын занимается уже 6 месяцев. Заметили улучшение концентрации внимания и успехов в математике. 
                    Тренер очень терпеливый и находит подход к каждому ребёнку!"
                  </p>
                  <footer className="text-sm font-semibold">
                    — Анна, мама Максима (8 лет)
                  </footer>
                </blockquote>
                <div className="flex items-center gap-1 text-secondary text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground mt-1">Довольных родителей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground mt-1">Продлевают обучение</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">4.9</div>
                    <div className="text-sm text-muted-foreground mt-1">Средний рейтинг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">3500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Учеников</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KidsChessWhy;
