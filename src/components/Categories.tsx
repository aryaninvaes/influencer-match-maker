
import { ShoppingBag, Camera, Utensils, Dumbbell, Gamepad2, Plane } from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      name: "Fashion",
      count: "2,450+",
      icon: ShoppingBag,
      color: "bg-brand-mint/20 text-brand-teal",
    },
    {
      name: "Beauty",
      count: "1,890+",
      icon: Camera,
      color: "bg-brand-coral/20 text-brand-coral",
    },
    {
      name: "Food",
      count: "1,240+",
      icon: Utensils,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Fitness",
      count: "980+",
      icon: Dumbbell,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Gaming",
      count: "1,350+",
      icon: Gamepad2,
      color: "bg-brand-navy/20 text-brand-navy",
    },
    {
      name: "Travel",
      count: "760+",
      icon: Plane,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Browse by <span className="bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We have influencers across all major niches and industries. Find the perfect creator for your specific audience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer card-shine ${
                hoveredCategory === index 
                  ? 'shadow-lg -translate-y-2' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`h-14 w-14 rounded-full ${category.color} flex items-center justify-center mb-4 mx-auto transition-transform duration-300 ${
                hoveredCategory === index ? 'scale-110' : ''
              }`}>
                <category.icon size={hoveredCategory === index ? 28 : 24} />
              </div>
              <h3 className="text-lg font-medium text-center">{category.name}</h3>
              <p className="text-sm text-gray-500 text-center">{category.count} influencers</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
