import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const KidsChessContacts = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">📞</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Записаться на пробный урок</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-3 border-primary/30 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🎁</div>
                <h3 className="text-2xl font-bold">Бесплатный пробный урок!</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="parentName"
                    placeholder="Анна"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium mb-2">
                      Имя ребёнка *
                    </label>
                    <Input
                      id="childName"
                      placeholder="Максим"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium mb-2">
                      Возраст *
                    </label>
                    <Input
                      id="childAge"
                      type="number"
                      placeholder="8"
                      min="4"
                      max="16"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Ваш телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Вопросы или пожелания
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите об опыте ребёнка в шахматах или задайте вопросы..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Записаться на пробный урок
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Контакты</h3>
                <div className="space-y-4">
                  <a href="tel:+79001234567" className="flex items-start gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-semibold">+7 (900) 123-45-67</div>
                    </div>
                  </a>

                  <a href="https://t.me/chessforchildren" className="flex items-start gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <div className="font-semibold">@chessforchildren</div>
                    </div>
                  </a>

                  <a href="https://wa.me/79001234567" className="flex items-start gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageSquare" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-semibold">+7 (900) 123-45-67</div>
                    </div>
                  </a>

                  <a href="mailto:hello@chesskids.ru" className="flex items-start gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">hello@chesskids.ru</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">⏰</div>
                  <h3 className="text-lg font-bold">Время работы</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-muted-foreground">Суббота - Воскресенье</span>
                    <span className="font-semibold">10:00 - 20:00</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/60 rounded-lg">
                  <p className="text-xs text-center text-muted-foreground">
                    <Icon name="Info" size={12} className="inline mr-1" />
                    Отвечаем в мессенджерах круглосуточно!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Мы в соцсетях</h3>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                    <Icon name="Send" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                    <Icon name="Youtube" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                    <Icon name="Facebook" size={20} />
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

export default KidsChessContacts;
