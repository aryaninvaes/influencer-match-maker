
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const features = [
    "AI-powered matching algorithm",
    "Direct messaging and negotiation",
    "Secure payment processing",
    "Campaign analytics dashboard",
    "Contract templates and agreements",
    "24/7 support team"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your influencer marketing?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of brands and creators already collaborating through our platform.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="opacity-90">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-6 py-6">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6 py-6">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Sign up in minutes</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">I am a</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option className="text-gray-800" value="brand">Brand</option>
                    <option className="text-gray-800" value="creator">Creator</option>
                    <option className="text-gray-800" value="agency">Agency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Size</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option className="text-gray-800" value="small">1-10 employees</option>
                    <option className="text-gray-800" value="medium">11-50 employees</option>
                    <option className="text-gray-800" value="large">50+ employees</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full bg-white text-brand-blue hover:bg-gray-100 mt-4 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-center opacity-80 mt-4">
                No credit card required. Free plan available.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
