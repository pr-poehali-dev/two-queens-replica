import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ChessOnlineHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-3xl">♔</div>
            <div className="font-bold text-xl">
              Chess<span className="text-primary">Pro</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#lessons" className="text-sm font-medium hover:text-primary transition-colors">
              Уроки
            </a>
            <a href="#coaches" className="text-sm font-medium hover:text-primary transition-colors">
              Тренеры
            </a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Начать обучение
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="#lessons" className="text-sm font-medium hover:text-primary transition-colors">
                Уроки
              </a>
              <a href="#coaches" className="text-sm font-medium hover:text-primary transition-colors">
                Тренеры
              </a>
              <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">
                Цены
              </a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm">
                  Войти
                </Button>
                <Button size="sm">
                  Начать обучение
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ChessOnlineHeader;
