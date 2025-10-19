import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const KidsChessHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🏰</div>
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Шахматное Королевство
              </div>
              <div className="text-xs text-muted-foreground">Онлайн-школа для детей 4-16 лет</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#why" className="text-sm font-medium hover:text-primary transition-colors">
              Почему мы?
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
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="Gift" size={16} className="mr-2" />
              Пробный урок
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
              <a href="#why" className="text-sm font-medium hover:text-primary transition-colors">
                Почему мы?
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
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Gift" size={16} className="mr-2" />
                Пробный урок
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default KidsChessHeader;
