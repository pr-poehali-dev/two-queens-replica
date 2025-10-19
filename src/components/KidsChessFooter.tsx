import Icon from '@/components/ui/icon';

const KidsChessFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-purple-600 to-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl">🏰</div>
              <div>
                <div className="text-xl font-bold">Шахматное Королевство</div>
                <div className="text-xs opacity-80">Онлайн-школа для детей</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Профессиональное обучение шахматам детей от 4 до 16 лет в игровом формате
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                <Icon name="Send" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Обучение</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#courses" className="hover:opacity-100 transition-opacity">Программы</a></li>
              <li><a href="#why" className="hover:opacity-100 transition-opacity">Почему мы</a></li>
              <li><a href="#coaches" className="hover:opacity-100 transition-opacity">Тренеры</a></li>
              <li><a href="#prices" className="hover:opacity-100 transition-opacity">Цены</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">О школе</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Отзывы родителей</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Турниры</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79001234567" className="hover:opacity-100 transition-opacity">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:hello@chesskids.ru" className="hover:opacity-100 transition-opacity">
                  hello@chesskids.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                <a href="https://t.me/chessforchildren" className="hover:opacity-100 transition-opacity">
                  @chessforchildren
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <div>
              &copy; 2025 Шахматное Королевство. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KidsChessFooter;
