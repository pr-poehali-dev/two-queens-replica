import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TwoQueensSchedule = () => {
  const schedule = [
    {
      day: 'Понедельник',
      sessions: [
        { time: '10:00 - 11:30', type: 'Групповое занятие', level: 'Новички', trainer: 'Екатерина Л.', spots: 2 },
        { time: '18:00 - 19:30', type: 'Групповое занятие', level: 'Продвинутые', trainer: 'Александра Г.', spots: 1 }
      ]
    },
    {
      day: 'Среда',
      sessions: [
        { time: '14:00 - 15:30', type: 'Тактика', level: 'Все уровни', trainer: 'Ольга Г.', spots: 3 },
        { time: '19:00 - 20:30', type: 'Дебюты', level: 'Любители', trainer: 'Мария М.', spots: 2 }
      ]
    },
    {
      day: 'Пятница',
      sessions: [
        { time: '17:00 - 18:30', type: 'Эндшпиль', level: 'Продвинутые', trainer: 'Екатерина Л.', spots: 1 },
        { time: '20:00 - 21:30', type: 'Турнир клуба', level: 'Все уровни', trainer: 'Все тренеры', spots: 8 }
      ]
    },
    {
      day: 'Воскресенье',
      sessions: [
        { time: '11:00 - 12:30', type: 'Семейные занятия', level: 'Новички', trainer: 'Александра Г.', spots: 4 },
        { time: '16:00 - 17:30', type: 'Анализ партий', level: 'Все уровни', trainer: 'Ольга Г.', spots: 3 }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Групповые занятия и мероприятия клуба. Индивидуальные уроки — по договоренности с тренером
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {schedule.map((day, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">{day.day}</h3>
                <div className="space-y-4">
                  {day.sessions.map((session, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2 text-sm font-semibold">
                            <Icon name="Clock" size={16} className="text-primary" />
                            <span>{session.time}</span>
                          </div>
                          <Badge variant="outline">{session.level}</Badge>
                        </div>
                        <h4 className="font-semibold text-lg mb-1">{session.type}</h4>
                        <p className="text-sm text-muted-foreground">
                          Тренер: {session.trainer}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">Свободно мест</div>
                          <div className="text-2xl font-bold text-primary">{session.spots}</div>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Записаться
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <Icon name="Calendar" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Индивидуальные занятия</h3>
              <p className="text-muted-foreground mb-4">
                Выберите удобное время для персональных уроков с тренером
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Icon name="CalendarPlus" size={18} className="mr-2" />
                Забронировать время
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TwoQueensSchedule;
