import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const TwoQueensContacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contacts = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@twoqueens.ru',
      link: 'mailto:info@twoqueens.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (903) 315-19-78',
      link: 'tel:+79033151978'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@twoqueens_chess',
      link: 'https://t.me/twoqueens_chess'
    },
    {
      icon: 'Instagram',
      title: 'Instagram',
      value: '@twoqueens.chess',
      link: 'https://instagram.com/twoqueens.chess'
    }
  ];

  return (
    <section id="contacts" className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Остались вопросы? Мы с радостью на них ответим
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      placeholder="Анна Иванова"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="anna@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем мы можем вам помочь..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить сообщение
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={contact.icon as any} size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{contact.title}</p>
                          <a 
                            href={contact.link}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Время работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница:</span>
                    <span className="font-medium">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота - Воскресенье:</span>
                    <span className="font-medium">11:00 - 20:00</span>
                  </div>
                  <div className="pt-3 mt-3 border-t">
                    <p className="text-xs text-muted-foreground">
                      <Icon name="Info" size={14} className="inline mr-1" />
                      Отвечаем на сообщения в течение часа в рабочее время
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://vk.com/twoqueens" 
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon name="Share2" size={20} />
                  </a>
                  <a 
                    href="https://t.me/twoqueens_chess" 
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/twoqueens.chess" 
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a 
                    href="https://youtube.com/@twoqueens" 
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon name="Youtube" size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoQueensContacts;
