
import { Button } from "@/components/ui/button";
import { CheckCircle2, Filter, Search, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Define Your Needs",
      description: "Set your budget, audience demographics, and campaign goals to find the perfect match.",
      icon: Filter,
      color: "from-brand-blue to-brand-lightblue",
    },
    {
      title: "Browse Matches",
      description: "Our AI algorithm suggests the best influencers for your specific campaign requirements.",
      icon: Search,
      color: "from-brand-purple to-brand-pink",
    },
    {
      title: "Connect & Collaborate",
      description: "Initiate conversation, negotiate terms, and finalize your partnership all in one place.",
      icon: Handshake,
      color: "from-brand-pink to-brand-purple",
    },
    {
      title: "Track Results",
      description: "Monitor engagement, reach, and conversion metrics in real-time through our dashboard.",
      icon: CheckCircle2,
      color: "from-brand-darkblue to-brand-blue",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">InfluenceMatch</span> Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform streamlines the connection between brands and influencers, making collaboration seamless and effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`h-14 w-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-5`}>
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
