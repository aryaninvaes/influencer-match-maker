
import { ArrowRight, Target, Zap, Globe, Database, PieChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* For Brands Section */}
        <section id="for-brands" className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg">
                  <Target size={28} />
                </div>
                
                <h3 className="text-lg font-medium text-gray-600 mb-2 pl-12">FOR BRANDS</h3>
                <h2 className="text-3xl font-bold mb-6">Find the perfect brand ambassadors</h2>
                
                <div className="space-y-6 mt-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Target className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Precision Targeting</h4>
                      <p className="text-gray-600">Filter influencers by audience demographics, engagement rates, and content style.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Streamlined Campaigns</h4>
                      <p className="text-gray-600">Manage multiple influencer relationships from a single dashboard.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Global Reach</h4>
                      <p className="text-gray-600">Access influencers from different regions, languages and cultures.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button className="bg-brand-blue hover:bg-brand-darkblue text-white">
                    Start Searching 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Business team looking at analytics" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        
        {/* For Creators Section */}
        <section id="for-creators">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Content creator working on laptop" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white shadow-lg">
                  <Users size={28} />
                </div>
                
                <h3 className="text-lg font-medium text-gray-600 mb-2 pl-12">FOR CREATORS</h3>
                <h2 className="text-3xl font-bold mb-6">Grow your influence with brand partnerships</h2>
                
                <div className="space-y-6 mt-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Database className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Brand Opportunities</h4>
                      <p className="text-gray-600">Get discovered by brands looking specifically for your unique audience and content style.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <PieChart className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Performance Analytics</h4>
                      <p className="text-gray-600">Track your campaign results and engagement metrics to improve future collaborations.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Creator Community</h4>
                      <p className="text-gray-600">Network with other influencers and learn from top performers in your niche.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button className="bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:from-brand-pink hover:to-brand-purple">
                    Create Profile 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
