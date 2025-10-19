import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Sparkles',
      title: 'Премиум качество',
      description: 'Только натуральные ингредиенты высшего качества'
    },
    {
      icon: 'Heart',
      title: 'С любовью к деталям',
      description: 'Каждый продукт создан с заботой о вашей коже'
    },
    {
      icon: 'Award',
      title: 'Награды и признание',
      description: 'Наши продукты отмечены международными наградами'
    },
    {
      icon: 'Leaf',
      title: 'Эко-дружелюбно',
      description: 'Sustainable подход к производству и упаковке'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">О бренде Two Queens</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — команда энтузиастов красоты, которые верят, что каждая женщина заслуживает 
              королевского ухода. Наша миссия — создавать продукты, которые не просто работают, 
              но и приносят удовольствие от использования.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2015 года мы разрабатываем инновационные формулы, сочетающие современные 
              научные достижения с проверенными временем натуральными ингредиентами.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary">9+</p>
                <p className="text-sm text-muted-foreground">Лет на рынке</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
