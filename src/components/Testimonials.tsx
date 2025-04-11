
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, FashionCo",
      image: "https://i.pravatar.cc/150?img=32",
      quote: "We found 3 perfect influencers for our campaign in less than a day. The ROI was 3x higher than our traditional marketing efforts.",
      stars: 5,
      type: "brand"
    },
    {
      name: "Alex Chen",
      role: "Tech Reviewer & Content Creator",
      image: "https://i.pravatar.cc/150?img=11",
      quote: "InfluenceMatch helped me land brand deals that perfectly match my audience's interests. I've doubled my income in just 6 months.",
      stars: 5,
      type: "creator"
    },
    {
      name: "Maria Rodriguez",
      role: "Social Media Manager, NutriHealth",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "The platform's filtering tools are incredible. We specifically found fitness influencers who speak Spanish and have audiences in our target markets.",
      stars: 5,
      type: "brand"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Success <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how brands and creators are achieving their goals through our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {Array(item.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
                {item.type === "brand" ? (
                  <span className="ml-auto px-3 py-1 bg-blue-100 text-brand-blue rounded-full text-xs font-medium">Brand</span>
                ) : (
                  <span className="ml-auto px-3 py-1 bg-purple-100 text-brand-purple rounded-full text-xs font-medium">Creator</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
