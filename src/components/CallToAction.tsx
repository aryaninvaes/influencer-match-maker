
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-blue to-brand-navy text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to revolutionize your influencer marketing?
        </h2>
        
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Join thousands of brands and creators already collaborating through our platform. 
          Discover the perfect match for your next campaign and start seeing results today.
        </p>
        
        <Button 
          className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6 animate-pulse hover:animate-none"
          onClick={() => navigate('/business-dashboard')}
        >
          JOIN NOW
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-sm text-white mt-6">
          No credit card required. Free plan available.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
