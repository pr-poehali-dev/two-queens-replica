import Icon from '@/components/ui/icon';

const ChessFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">♔</div>
              <span className="text-xl font-bold">ChessClub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Современная платформа для игры, обучения и соревнований в шахматы
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Игра</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#play" className="hover:text-primary transition-colors">Быстрая игра</a></li>
              <li><a href="#play" className="hover:text-primary transition-colors">Против компьютера</a></li>
              <li><a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">История партий</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Обучение</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#lessons" className="hover:text-primary transition-colors">Уроки</a></li>
              <li><a href="#lessons" className="hover:text-primary transition-colors">Тренеры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Задачи</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">База партий</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@chessclub.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (903) 315-19-78</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ChessClub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default ChessFooter;
