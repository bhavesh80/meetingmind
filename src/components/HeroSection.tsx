
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-purple-light/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple-dark text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">●</span> Now accepting early access signups
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              MeetingMind: Never Miss a Meeting <span className="bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent">Insight</span> Again
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Transform your meetings from time-drains to productivity powerhouses with an AI assistant that listens, learns, and leads.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white text-lg px-8 py-6 h-auto">
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:text-brand-purple hover:border-brand-purple text-lg px-8 py-6 h-auto">
                Request Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-brand-purple mr-2" />
              <span>Works with Microsoft Teams</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 max-w-lg mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white">
                  <MessageSquare size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">MeetingMind Assistant</h3>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  I've analyzed the agenda for today's meeting. Here are the key points I'll be tracking:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Q2 Marketing Campaign Results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Website Redesign Progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">New Product Launch Timeline</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm text-gray-600">I'll send comprehensive notes right after the meeting</span>
              </div>
            </div>
            <div className="absolute top-1/4 -right-12 w-32 h-32 bg-brand-yellow rounded-full opacity-50 blur-xl animate-float"></div>
            <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-brand-green rounded-full opacity-50 blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
