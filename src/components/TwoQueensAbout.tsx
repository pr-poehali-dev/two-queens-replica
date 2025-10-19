import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TwoQueensAbout = () => {
  const benefits = [
    {
      icon: 'Heart',
      title: 'Дружественная атмосфера',
      description: 'Комфортная обстановка для обучения без стресса и давления'
    },
    {
      icon: 'Users',
      title: 'Женское сообщество',
      description: 'Общайтесь и играйте с единомышленницами со всего мира'
    },
    {
      icon: 'Trophy',
      title: 'Профессиональные тренеры',
      description: 'Опытные гроссмейстеры и международные мастера'
    },
    {
      icon: 'Calendar',
      title: 'Гибкое расписание',
      description: 'Занятия в удобное для вас время, онлайн из любой точки мира'
    },
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Программа обучения адаптируется под ваш уровень и цели'
    },
    {
      icon: 'Award',
      title: 'Турниры и мероприятия',
      description: 'Регулярные турниры только среди участниц клуба'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">О нашем клубе</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Первая в России онлайн-школа шахмат, созданная специально для женщин
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-accent/50 to-secondary/20 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">♛</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Почему «Две королевы»?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы верим, что шахматы — это не только игра умов, но и искусство стратегического мышления, 
                которое помогает во всех сферах жизни. Наш клуб создан для того, чтобы женщины чувствовали 
                себя уверенно за шахматной доской и получали удовольствие от каждой партии.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Здесь нет места стереотипам и предубеждениям. Только поддержка, профессионализм 
                и любовь к шахматам.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoQueensAbout;
