import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChessOnlineLessons = () => {
  const lessons = [
    {
      category: 'Дебюты',
      title: 'Итальянская партия',
      level: 'Начинающий',
      duration: '45 мин',
      views: '12.5K',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      category: 'Тактика',
      title: 'Двойной удар',
      level: 'Средний',
      duration: '30 мин',
      views: '18.2K',
      image: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      category: 'Эндшпиль',
      title: 'Ладейные окончания',
      level: 'Продвинутый',
      duration: '60 мин',
      views: '9.8K',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      category: 'Стратегия',
      title: 'Пешечная структура',
      level: 'Средний',
      duration: '50 мин',
      views: '15.1K',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600'
    },
    {
      category: 'Дебюты',
      title: 'Сицилианская защита',
      level: 'Продвинутый',
      duration: '75 мин',
      views: '21.3K',
      image: 'bg-gradient-to-br from-red-400 to-red-600'
    },
    {
      category: 'Тактика',
      title: 'Комбинации на связку',
      level: 'Начинающий',
      duration: '40 мин',
      views: '14.7K',
      image: 'bg-gradient-to-br from-teal-400 to-teal-600'
    }
  ];

  const features = [
    {
      icon: 'Video',
      title: 'HD видео-уроки',
      description: 'Качественная запись с доской и объяснениями'
    },
    {
      icon: 'Download',
      title: 'Материалы к урокам',
      description: 'Скачивайте PGN файлы и конспекты'
    },
    {
      icon: 'PlayCircle',
      title: 'Интерактивные задачи',
      description: 'Практикуйтесь прямо во время просмотра'
    },
    {
      icon: 'Clock',
      title: 'Доступ 24/7',
      description: 'Смотрите в удобное время'
    }
  ];

  return (
    <section id="lessons" className="py-16 md:py-24 bg-gradient-to-br from-accent/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Библиотека видео-уроков</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 профессиональных уроков по всем аспектам шахмат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {lessons.map((lesson, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
              <div className={`h-48 ${lesson.image} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {lesson.category}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-xs">
                  <Icon name="Clock" size={14} />
                  <span>{lesson.duration}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {lesson.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="BarChart" size={14} />
                    <span>{lesson.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Eye" size={14} />
                    <span>{lesson.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            Смотреть все уроки
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChessOnlineLessons;
