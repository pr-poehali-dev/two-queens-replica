import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@twoqueens.ru',
      link: 'mailto:info@twoqueens.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, Тверская 1',
      link: '#'
    }
  ];

  return (
    <section id="contacts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы? Мы всегда рады помочь вам выбрать идеальные продукты
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={info.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                      <a href={info.link} className="font-semibold hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Часы работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Пн-Пт</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота</span>
                    <span className="font-medium">11:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Воскресенье</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border animate-scale-in">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
