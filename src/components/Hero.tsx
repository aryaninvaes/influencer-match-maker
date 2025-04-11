
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-hero-pattern overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="block">Connect Brands with</span> 
                <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Perfect Influencers</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
                Find the ideal match for your marketing campaigns across all social media platforms based on audience, niche, and performance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="text-lg px-6 py-6 bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:from-brand-purple hover:to-brand-blue transition-all">
                I'm a Brand
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                I'm an Influencer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-${300 + i * 100}`}></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">5,000+</span> successful campaigns this month
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightblue to-brand-blue"></div>
                  <div>
                    <h3 className="font-bold text-lg">Fashion Brand</h3>
                    <p className="text-sm text-gray-500">Seeking lifestyle influencers</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Budget</span>
                    <span className="font-medium">$1,000 - $5,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform</span>
                    <span className="font-medium">Instagram, TikTok</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Audience</span>
                    <span className="font-medium">18-34, Fashion Enthusiasts</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="text-sm px-4 py-2 bg-brand-blue text-white hover:bg-brand-darkblue">
                    View 48 matches
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-8 transform translate-y-1/3">
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-64 animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple"></div>
                  <div>
                    <h3 className="font-bold text-sm">Beauty Influencer</h3>
                    <p className="text-xs text-gray-500">500K followers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-8 transform -translate-y-1/4">
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-48 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-darkblue"></div>
                  <div>
                    <h3 className="font-bold text-xs">Tech Reviewer</h3>
                    <p className="text-xs text-gray-500">1.2M followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
