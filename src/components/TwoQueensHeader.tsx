import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TwoQueensHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'О клубе', href: '#about' },
    { label: 'Обучение', href: '#training' },
    { label: 'Тренеры', href: '#coaches' },
    { label: 'Расписание', href: '#schedule' },
    { label: 'Цены', href: '#prices' },
    { label: 'Контакты', href: '#contacts' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="text-5xl">♛</div>
            <div>
              <div className="text-2xl font-bold text-primary">
                <span className="font-semibold">Две</span>королевы
              </div>
              <div className="text-xs text-muted-foreground">Шахматный клуб онлайн</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-primary">Войти</Button>
            <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="w-full text-primary">Войти</Button>
                <Button className="w-full bg-primary hover:bg-primary/90">Записаться</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default TwoQueensHeader;
