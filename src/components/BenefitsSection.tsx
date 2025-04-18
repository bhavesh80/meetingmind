
import { 
  Users, 
  Clock, 
  CheckCircle, 
  Users2, 
  BarChart3 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Full Participation",
      description: "Team members can fully engage without worrying about documentation",
      icon: <Users className="h-6 w-6 text-brand-purple" />,
    },
    {
      id: 2,
      title: "Time Recovery",
      description: "Eliminate hours spent writing and reviewing meeting notes",
      icon: <Clock className="h-6 w-6 text-brand-purple" />,
    },
    {
      id: 3,
      title: "Consistent Follow-Through",
      description: "Never lose track of decisions and action items",
      icon: <CheckCircle className="h-6 w-6 text-brand-purple" />,
    },
    {
      id: 4,
      title: "Enhanced Interviewing",
      description: "Make better hiring decisions with comprehensive candidate assessment",
      icon: <Users2 className="h-6 w-6 text-brand-purple" />,
    },
    {
      id: 5,
      title: "Meeting ROI",
      description: "Transform meetings from time drains to value generators",
      icon: <BarChart3 className="h-6 w-6 text-brand-purple" />,
    },
  ];

  return (
    <div id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Teams Choose <span className="bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent">MeetingMind</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our intelligent assistant delivers concrete benefits that transform your meeting culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-brand-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
