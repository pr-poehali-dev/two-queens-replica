import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, image, category, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            Новинка
          </Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>

      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
        <h3 className="font-semibold text-lg leading-tight">{name}</h3>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xl font-bold">{price.toLocaleString('ru-RU')} ₽</span>
        <Button size="sm" className="group">
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
