import Image from "next/image";
import { ChefHat, Search, Clock, Users, Star, Heart } from "lucide-react";

// Mock data for featured recipes
const featuredRecipes = [
  {
    id: 1,
    title: "Creamy Tuscan Chicken",
    description: "Tender chicken in a rich, creamy sauce with sun-dried tomatoes and spinach",
    image: "/api/placeholder/400/300",
    cookTime: 30,
    servings: 4,
    rating: 4.8,
    author: "Maria Rodriguez",
    category: "Italian"
  },
  {
    id: 2,
    title: "Classic Beef Tacos",
    description: "Authentic Mexican street tacos with perfectly seasoned ground beef",
    image: "/api/placeholder/400/300",
    cookTime: 20,
    servings: 6,
    rating: 4.9,
    author: "Carlos Martinez",
    category: "Mexican"
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with molten centers",
    image: "/api/placeholder/400/300",
    cookTime: 25,
    servings: 2,
    rating: 4.7,
    author: "Sarah Johnson",
    category: "Dessert"
  },
  {
    id: 4,
    title: "Mediterranean Quinoa Bowl",
    description: "Fresh and healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "/api/placeholder/400/300",
    cookTime: 15,
    servings: 2,
    rating: 4.6,
    author: "Alex Chen",
    category: "Healthy"
  },
  {
    id: 5,
    title: "Homemade Pizza Margherita",
    description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce",
    image: "/api/placeholder/400/300",
    cookTime: 45,
    servings: 4,
    rating: 4.8,
    author: "Giuseppe Rossi",
    category: "Italian"
  },
  {
    id: 6,
    title: "Thai Green Curry",
    description: "Aromatic and spicy curry with coconut milk and fresh vegetables",
    image: "/api/placeholder/400/300",
    cookTime: 35,
    servings: 4,
    rating: 4.7,
    author: "Siriporn Lee",
    category: "Thai"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">RecipeShare</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">Browse</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">Community</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover & Share
            <span className="block text-orange-500">Amazing Recipes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our culinary community where food lovers share their favorite recipes, 
            discover new flavors, and connect with fellow cooking enthusiasts.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-300">Recipes Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5K+</div>
              <div className="text-gray-600 dark:text-gray-300">Home Chefs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Recipe Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Recipes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover the most popular recipes from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-900 flex items-center justify-center">
                    <ChefHat className="h-16 w-16 text-orange-500 opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {recipe.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      by {recipe.author}
                    </span>
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                      View Recipe →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              View All Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Share Your Recipes?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of home chefs sharing their culinary creations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium">
              Sign Up Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition-colors font-medium">
              Upload Recipe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">RecipeShare</span>
              </div>
              <p className="text-gray-400">
                Connecting food lovers through the joy of sharing recipes and culinary experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Browse Recipes</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Popular</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">New Recipes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Join Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Share Recipe</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Chef Profiles</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RecipeShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
