
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Before MeetingMind, I'd spend the first 15 minutes of each meeting reviewing what we discussed last time. Now our assistant handles that context, and we dive right into productive work.",
      author: "Engineering Team Lead",
      company: "Tech Innovators Inc.",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      quote: "As an interviewer, I can focus completely on building rapport with candidates while MeetingMind ensures I cover all essential questions and captures nuanced observations.",
      author: "Hiring Manager",
      company: "Growth Startup",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      quote: "Our client meetings have transformed. Everyone stays focused on the agenda, and our follow-up has become so much more precise.",
      author: "Account Executive",
      company: "Global Solutions Ltd",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <div id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from professionals who have transformed their meeting experiences with MeetingMind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-brand-purple/20" />
                </div>
                <p className="text-gray-700 mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
