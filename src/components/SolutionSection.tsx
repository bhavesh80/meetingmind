
import { Clock, MessageSquare, Bell, Brain, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SolutionSection = () => {
  return (
    <div id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Introducing <span className="bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent">MeetingMind</span>: Your AI Meeting Partner
          </h2>
          <p className="text-xl text-gray-600">
            Our intelligent assistant works alongside your team to make every meeting more productive, insightful, and actionable.
          </p>
        </div>

        <Tabs defaultValue="before" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="before" className="py-3 data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              <Clock className="mr-2 h-5 w-5" />
              Before Meetings
            </TabsTrigger>
            <TabsTrigger value="during" className="py-3 data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              <MessageSquare className="mr-2 h-5 w-5" />
              During Meetings
            </TabsTrigger>
            <TabsTrigger value="after" className="py-3 data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              <FileCheck className="mr-2 h-5 w-5" />
              After Meetings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="before" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Smart Preparation</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Brain className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Agenda Analysis</h4>
                          <p className="text-gray-600">MeetingMind analyzes meeting agendas and prepares to track discussion topics</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <FileCheck className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Document Review</h4>
                          <p className="text-gray-600">Automatically reviews previous notes and relevant documents</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Brain className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Context Builder</h4>
                          <p className="text-gray-600">Prepares relevant context from previous discussions</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-brand-purple">Meeting Preparation</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          I've analyzed the documents for your upcoming product review meeting.
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md text-sm">
                          <p className="font-medium text-gray-800 mb-2">Key points to track:</p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-brand-purple rounded-full h-2 w-2 mt-2 mr-2"></span>
                              User feedback from beta testing
                            </li>
                            <li className="flex items-start">
                              <span className="bg-brand-purple rounded-full h-2 w-2 mt-2 mr-2"></span>
                              Development timeline adjustments
                            </li>
                            <li className="flex items-start">
                              <span className="bg-brand-purple rounded-full h-2 w-2 mt-2 mr-2"></span>
                              Marketing launch coordination
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="during" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Active Assistance</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <MessageSquare className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Comprehensive Notes</h4>
                          <p className="text-gray-600">Takes detailed notes with speaker attribution in dialogue format</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Bell className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Agenda Tracking</h4>
                          <p className="text-gray-600">Sends gentle reminders when agenda items remain uncovered</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Brain className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Question Suggestions</h4>
                          <p className="text-gray-600">For interviews: Provides real-time question suggestions and candidate observations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-brand-purple">During Meeting</h3>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                            <span className="font-semibold text-blue-600">JS</span>
                          </div>
                          <p className="text-sm text-gray-800">
                            <span className="font-medium">John Smith:</span> I think we should prioritize the mobile app update.
                          </p>
                        </div>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                            <span className="font-semibold text-green-600">AR</span>
                          </div>
                          <p className="text-sm text-gray-800">
                            <span className="font-medium">Anna Rodriguez:</span> Agreed, our metrics show 70% mobile usage.
                          </p>
                        </div>
                        <div className="bg-brand-purple/10 p-3 rounded-md text-sm mt-4">
                          <p className="font-medium text-brand-purple mb-1">Reminder:</p>
                          <p className="text-gray-700">Website redesign timeline hasn't been discussed yet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="after" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Follow-Through</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <FileCheck className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Structured Notes</h4>
                          <p className="text-gray-600">Delivers structured, searchable meeting notes</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <FileCheck className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Action Items</h4>
                          <p className="text-gray-600">Highlights action items, decisions, and follow-up needs</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-brand-purple/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Brain className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Project Connections</h4>
                          <p className="text-gray-600">Connects discussions to existing projects and previous meetings</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-brand-purple">Meeting Summary</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Product Planning Meeting - April 17, 2023
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md text-sm mb-3">
                          <p className="font-medium text-gray-800 mb-2">Key Decisions:</p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              Prioritize mobile app redesign for Q3
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              Increase user testing budget by 15%
                            </li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-md text-sm">
                          <p className="font-medium text-yellow-700 mb-2">Action Items:</p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">→</span>
                              <span>Sarah: Create wireframes by 4/24</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">→</span>
                              <span>Mike: Schedule user testing sessions</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SolutionSection;
