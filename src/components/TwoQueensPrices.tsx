import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TwoQueensPrices = () => {
  const plans = [
    {
      name: 'Пробное занятие',
      price: '500',
      period: 'разовое',
      popular: false,
      features: [
        'Знакомство с тренером',
        'Оценка вашего уровня',
        'Рекомендации по обучению',
        'Доступ к платформе на 3 дня'
      ]
    },
    {
      name: 'Стандарт',
      price: '4 500',
      period: 'в месяц',
      popular: true,
      features: [
        '8 индивидуальных занятий',
        'Персональный тренер',
        'Разбор ваших партий',
        'Домашние задания',
        'Доступ к базе уроков',
        'Участие в турнирах клуба',
        'Чат с тренером'
      ]
    },
    {
      name: 'Премиум',
      price: '8 900',
      period: 'в месяц',
      popular: false,
      features: [
        '16 индивидуальных занятий',
        'Персональный тренер-гроссмейстер',
        'Углубленный разбор партий',
        'Дебютный репертуар',
        'Все материалы платформы',
        'Приоритетная запись на турниры',
        'Круглосуточная поддержка',
        'Сертификат по окончании'
      ]
    }
  ];

  return (
    <section id="prices" className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите тариф, который подходит вам по интенсивности и бюджету
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 hover:shadow-xl transition-all relative ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    Популярный выбор
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Групповые занятия</h3>
                  <p className="text-muted-foreground mb-4">
                    Занимайтесь в мини-группах до 4 человек со скидкой 40%
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>Идеально для подруг или коллег</span>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold text-primary mb-2">от 2 700₽</div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Подробнее
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            <Icon name="Shield" size={16} className="inline mr-1" />
            Гарантия возврата средств в течение первой недели
          </p>
          <p className="text-sm text-muted-foreground">
            <Icon name="CreditCard" size={16} className="inline mr-1" />
            Безопасная оплата картой или через СБП
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoQueensPrices;