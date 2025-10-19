import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const KidsChessPrices = () => {
  const plans = [
    {
      name: 'Пробный',
      price: 'БЕСПЛАТНО',
      period: '1 урок',
      emoji: '🎁',
      color: 'from-green-400 to-green-600',
      popular: false,
      features: [
        'Знакомство с платформой',
        'Определение уровня ребёнка',
        'Рекомендации по программе',
        'Общение с тренером',
        '30 минут занятия'
      ]
    },
    {
      name: 'Стандарт',
      price: '3 200',
      period: '8 занятий',
      emoji: '⭐',
      color: 'from-blue-400 to-blue-600',
      popular: true,
      features: [
        'Групповые занятия до 6 детей',
        '45 минут урок',
        'Домашние задания',
        'Доступ к платформе 24/7',
        'Чат с тренером',
        'Сертификат по окончанию'
      ]
    },
    {
      name: 'Индивидуальный',
      price: '6 400',
      period: '8 занятий',
      emoji: '👑',
      color: 'from-purple-400 to-purple-600',
      popular: false,
      features: [
        'Персональный тренер',
        'Гибкое расписание',
        '60 минут урок',
        'Индивидуальная программа',
        'Подготовка к турнирам',
        'Видеозаписи уроков',
        'Отчёты родителям'
      ]
    }
  ];

  return (
    <section id="prices" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">💰</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Первый урок — бесплатно!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all ${
                plan.popular 
                  ? 'border-4 border-primary shadow-2xl scale-105' 
                  : 'border-2 hover:border-primary/50 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🔥 ПОПУЛЯРНЫЙ
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${plan.color} flex items-center justify-center text-7xl`}>
                {plan.emoji}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'БЕСПЛАТНО' ? (
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-primary">{plan.price} ₽</div>
                        <div className="text-sm text-muted-foreground">/ {plan.period}</div>
                      </>
                    )}
                  </div>
                  {plan.price !== 'БЕСПЛАТНО' && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {Math.round(parseInt(plan.price.replace(/\s/g, '')) / 8)} ₽ за занятие
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.price === 'БЕСПЛАТНО' ? 'Попробовать' : 'Выбрать тариф'}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  💳
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Гибкая оплата</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Оплачивайте картой, через СБП или электронный кошелёк. Возможна рассрочка на 4 месяца.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Shield" size={14} />
                    <span>Безопасные платежи</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Гарантия возврата</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Если после 2-го урока вам что-то не понравится — вернём деньги за оставшиеся занятия. Без вопросов.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckCircle" size={14} />
                    <span>100% гарантия</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-3">Специальное предложение!</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
              Приведи друга — получи 2 бесплатных занятия! 
              А твой друг получит скидку 20% на первый месяц обучения.
            </p>
            <Button size="lg" variant="secondary">
              <Icon name="Gift" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KidsChessPrices;
