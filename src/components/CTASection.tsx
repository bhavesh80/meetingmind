
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-brand-purple/90 to-brand-purple-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your meeting culture?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our waitlist today and be among the first to experience the power of AI-assisted meetings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-white text-brand-purple hover:bg-gray-100 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
