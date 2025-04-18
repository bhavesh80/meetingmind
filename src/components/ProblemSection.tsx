
import React from 'react';

const LostContextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" className="h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 13V7" />
    <circle cx="12" cy="16" r="1" fill="#7E69AB" />
  </svg>
);

const DocumentationBurdenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" className="h-6 w-6">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" x2="12" y1="13" y2="17" />
    <line x1="9" x2="15" y1="15" y2="15" />
  </svg>
);

const AgendaDriftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" className="h-6 w-6">
    <path d="M12 2v10l4.5-4.5" />
    <path d="M12 12l-4.5-4.5" />
    <circle cx="12" cy="12" r="10" strokeDasharray="5 5" />
  </svg>
);

const MissedQuestionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" className="h-6 w-6">
    <path d="M12 22c6.1 0 11-4.9 11-11S18.1 0 12 0 1 4.9 1 11s4.9 11 11 11z" />
    <path d="M9.09 9h.01" />
    <path d="M15.09 9h.01" />
    <path d="M15.5 13a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 7 13.5v-1A3.5 3.5 0 0 1 10.5 9h1a3.5 3.5 0 0 1 3.5 3.5" />
  </svg>
);

const InterviewInconsistencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="1.5" className="h-6 w-6">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      title: "Lost Context",
      description: "65% of valuable meeting insights never make it to documentation",
      icon: <LostContextIcon />,
    },
    {
      id: 2,
      title: "Documentation Burden",
      description: "Team members mentally toggle between participation and note-taking",
      icon: <DocumentationBurdenIcon />,
    },
    {
      id: 3,
      title: "Agenda Drift",
      description: "Most meetings veer off-track, leaving critical points unaddressed",
      icon: <AgendaDriftIcon />,
    },
    {
      id: 4,
      title: "Missed Questions",
      description: "Key inquiries go unasked because participants lose track of context",
      icon: <MissedQuestionsIcon />,
    },
    {
      id: 5,
      title: "Interview Inconsistency",
      description: "Interviewers struggle to observe, evaluate, and ask insightful questions simultaneously",
      icon: <InterviewInconsistencyIcon />,
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
              <div className="bg-brand-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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

