import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Two Queens</h3>
            <p className="text-sm text-muted-foreground">
              Премиальная косметика для вашей красоты
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Наши магазины</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (903) 315-19-78</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@twoqueens.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Тверская 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Two Queens. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;