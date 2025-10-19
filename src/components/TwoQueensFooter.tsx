import Icon from '@/components/ui/icon';

const TwoQueensFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl">♛</div>
              <div>
                <div className="text-xl font-bold">
                  <span className="font-semibold">Две</span>королевы
                </div>
                <div className="text-xs opacity-70">Шахматный клуб онлайн</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Первая в России онлайн-школа шахмат, созданная специально для женщин
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Обучение</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#training" className="hover:opacity-100 hover:text-secondary transition-colors">Программы</a></li>
              <li><a href="#coaches" className="hover:opacity-100 hover:text-secondary transition-colors">Тренеры</a></li>
              <li><a href="#schedule" className="hover:opacity-100 hover:text-secondary transition-colors">Расписание</a></li>
              <li><a href="#prices" className="hover:opacity-100 hover:text-secondary transition-colors">Цены</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">О клубе</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 hover:text-secondary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">Турниры</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@twoqueens.ru" className="hover:opacity-100 hover:text-secondary transition-colors">
                  info@twoqueens.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79033151978" className="hover:opacity-100 hover:text-secondary transition-colors">
                  +7 (903) 315-19-78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                <a href="https://t.me/twoqueens_chess" className="hover:opacity-100 hover:text-secondary transition-colors">
                  @twoqueens_chess
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-70">
              &copy; 2025 Две королевы. Все права защищены.
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                <Icon name="Facebook" size={20} />
              </a>
            </div>

            <div className="flex gap-4 text-sm opacity-70">
              <a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TwoQueensFooter;
