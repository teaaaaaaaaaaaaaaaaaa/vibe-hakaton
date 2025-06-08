import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/Button';
// TODO: import needed icons from lucide-react when installed
// import { Heart, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  user: string;
  size?: string;
  condition?: string;
}

const ProductCard = ({ title, description, image, user, size, condition }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-white border-2 border-tradey-red hover:bg-tradey-blue transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-tradey-red text-tradey-blue p-3 rounded-xl hover:bg-tradey-blue hover:text-tradey-red transition-colors shadow-lg">
            {/* TODO: Replace with Heart icon from lucide-react */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <CardContent className="p-6 group-hover:text-tradey-red transition-colors duration-300">
        <div className="mb-4">
          <h3 className="font-anton text-xl text-tradey-red group-hover:text-white transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="font-garamond text-gray-600 group-hover:text-tradey-red text-sm">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="font-garamond text-sm text-tradey-red">
            @{user}
          </span>
          <div className="flex space-x-2 text-xs">
            {size && (
              <span className="bg-tradey-red text-tradey-blue px-3 py-1 font-anton rounded-lg">
                {size}
              </span>
            )}
            {condition && (
              <span className="bg-tradey-blue text-tradey-red px-3 py-1 font-anton rounded-lg">
                {condition}
              </span>
            )}
          </div>
        </div>
        
        <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-anton transition-all duration-300 rounded-xl shadow-lg transform hover:scale-105">
          {/* TODO: Add MessageCircle icon here */}
          KONTAKTIRAJ
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 