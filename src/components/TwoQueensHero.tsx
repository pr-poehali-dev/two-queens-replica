import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TwoQueensHero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/30 via-white to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">♛</div>
        <div className="absolute bottom-20 right-10 text-9xl">♛</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Онлайн-школа шахмат для женщин</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Научитесь играть в шахматы
            <span className="block text-primary mt-2">красиво и уверенно</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу женщин, которые открывают для себя мир шахмат. 
            Индивидуальный подход, профессиональные тренеры и дружественная атмосфера.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Записаться на урок
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Учениц обучено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Опытных тренеров</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Довольных учениц</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoQueensHero;
