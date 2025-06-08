import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import ProductCard from '../components/post/ProductCard';
import SplashScreen from '../components/SplashScreen';
// TODO: import needed icons from lucide-react when installed
// import { Recycle, RefreshCw, ShoppingBag, MessageCircle } from 'lucide-react';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    title: 'Vintage Leather Jacket',
    description: 'Prelepa crna kožna jakna u odličnom stanju. Vintage stil iz 90-ih.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    user: 'marija23',
    size: 'M',
    condition: 'Odlično'
  },
  {
    id: '2',
    title: 'Designer Denim Jeans',
    description: 'High-end farmerke, malo nošene. Savršen kroj i kvalitet.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    user: 'stefan_m',
    size: 'L',
    condition: 'Jako dobro'
  },
  {
    id: '3',
    title: 'Bohemian Summer Dress',
    description: 'Lagana letnja haljina sa cvetnim printom. Idealna za topple dane.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400',
    user: 'ana_vintage',
    size: 'S',
    condition: 'Odlično'
  },
  {
    id: '4',
    title: 'Classic White Sneakers',
    description: 'Bele patike u dobrom stanju. Klasičan model koji ide uz sve.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    user: 'marko_kicks',
    size: '42',
    condition: 'Dobro'
  }
];

export function IndexPage() {
  const [showSplash, setShowSplash] = useState(true);
  const { user } = useAuth(); 

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen text-gray-800">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-tradey-blue overflow-hidden pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-anton text-8xl md:text-9xl lg:text-[12rem] text-tradey-red leading-none mb-8">
              TRADEY
            </h1>
            
            <p className="font-garamond text-xl md:text-2xl text-tradey-red mb-12 max-w-2xl mx-auto">
              Menjaj, ne bacaj. Tvoja stara jakna je nečiji novi stil.
            </p>
            
            <Button 
              className="bg-red-700 hover:bg-red-800 text-white font-anton text-xl px-12 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* TODO: Add Recycle icon here */}
              ŠTA JE TRADEY?
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl md:text-6xl text-tradey-red mb-6">
              IZDVOJENI PROIZVODI
            </h2>
            <p className="font-garamond text-lg text-gray-400 max-w-2xl mx-auto">
              Otkrijte jedinstvene komade odeće koji čekaju svog novog vlasnika.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              className="bg-tradey-blue hover:bg-blue-300 text-gray-900 font-anton text-xl px-10 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* TODO: Add ShoppingBag icon here */}
              VIDI SVE PROIZVODE
            </Button>
          </div>
        </div>
      </section>

      {/* Auth CTA Section with different background */}
      {!user && (
        <section className="py-20 bg-tradey-red relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/photos/2.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-anton text-4xl md:text-6xl text-white mb-8">
                SPREMAN SI ZA PROMENU?
              </h2>
              
              <p className="font-garamond text-xl text-white mb-12 max-w-2xl mx-auto opacity-90">
                Pridruži se zajednici koja veruje da je moda sloboda, a garderoba sredstvo izražavanja.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  className="bg-white hover:bg-gray-100 text-gray-900 font-anton text-xl px-10 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {/* TODO: Add RefreshCw icon here */}
                  REGISTRUJ SE
                </Button>
                <Button 
                  className="bg-tradey-blue hover:bg-blue-300 text-white font-anton text-xl px-10 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
                >
                  {/* TODO: Add MessageCircle icon here */}
                  VEĆ IMAŠ NALOG?
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
} 