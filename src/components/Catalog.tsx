import { useState } from 'react';
import ProductCard from './ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Увлажняющий крем для лица',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/1059cbe6-5da8-4d4a-9ab3-06cd84e6d51a.jpg',
      category: 'Уход за лицом',
      categoryId: 'face',
      isNew: true
    },
    {
      id: 2,
      name: 'Восстанавливающая сыворотка',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/6cda2ec9-932c-458a-bf03-dffdffd78099.jpg',
      category: 'Сыворотки',
      categoryId: 'serum',
      isNew: false
    },
    {
      id: 3,
      name: 'Палетка теней для век',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/5aa1b984-f61e-473b-9a6c-d75ab12caeb8.jpg',
      category: 'Макияж',
      categoryId: 'makeup',
      isNew: true
    },
    {
      id: 4,
      name: 'Питательный крем для тела',
      price: 2500,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/1059cbe6-5da8-4d4a-9ab3-06cd84e6d51a.jpg',
      category: 'Уход за телом',
      categoryId: 'body',
      isNew: false
    },
    {
      id: 5,
      name: 'Антивозрастная сыворотка',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/6cda2ec9-932c-458a-bf03-dffdffd78099.jpg',
      category: 'Сыворотки',
      categoryId: 'serum',
      isNew: true
    },
    {
      id: 6,
      name: 'Набор кистей для макияжа',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/24caeab4-40f8-4498-a986-ef1294da9c28/files/5aa1b984-f61e-473b-9a6c-d75ab12caeb8.jpg',
      category: 'Макияж',
      categoryId: 'makeup',
      isNew: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'face', name: 'Уход за лицом' },
    { id: 'serum', name: 'Сыворотки' },
    { id: 'makeup', name: 'Макияж' },
    { id: 'body', name: 'Уход за телом' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categoryId === activeCategory);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Наш каталог</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя премиальные косметические средства для ухода и красоты
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            {categories.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id} className="text-sm md:text-base">
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
