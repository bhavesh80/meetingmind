
import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      title: "Lost Context",
      description: "65% of valuable meeting insights never make it to documentation",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
    {
      id: 2,
      title: "Documentation Burden",
      description: "Team members mentally toggle between participation and note-taking",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
    {
      id: 3,
      title: "Agenda Drift",
      description: "Most meetings veer off-track, leaving critical points unaddressed",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
    {
      id: 4,
      title: "Missed Questions",
      description: "Key inquiries go unasked because participants lose track of context",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
    {
      id: 5,
      title: "Interview Inconsistency",
      description: "Interviewers struggle to observe, evaluate, and ask insightful questions simultaneously",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meeting Frustrations We All Share
          </h2>
          <p className="text-xl text-gray-600">
            We've all been there. Meetings that could be productive, but instead become a source of frustration and wasted time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.id} 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
