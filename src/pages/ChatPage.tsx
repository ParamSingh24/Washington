import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import DoctorConnect from "@/components/DoctorConnect";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Clock, FileText, ShieldCheck, Heart, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ChatPage = () => {
  useEffect(() => {
    // Show welcome toast when the chat page loads
    toast({
      title: "AI Medical Assistant Ready",
      description: "Feel free to ask about any health concerns you may have.",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      <main className="flex-1 container py-6 flex flex-col">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-pink-500" />
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              AI Medical Assistant
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Get personalized medical guidance based on your symptoms and health concerns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
          <div className="md:col-span-7 flex flex-col">
            <ChatBot />
          </div>
          
          <div className="md:col-span-5 space-y-5">
            <DoctorConnect />
            
            <Card className="overflow-hidden border-pink-300/30 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm hover:shadow-pink-200/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4">
                <h2 className="font-semibold text-lg flex items-center text-white">
                  <Heart className="mr-2 h-5 w-5" />
                  About AI Medical Assistant
                </h2>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">
                  This AI assistant provides personalized medical guidance based on your described symptoms. While it offers helpful information, it does not replace professional medical care.
                </p>
                
                <div className="mt-4 space-y-3">
                  <h3 className="font-medium text-sm text-foreground">Benefits:</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 grid grid-cols-1">
                    {[
                      { icon: Clock, text: "24/7 accessible medical guidance" },
                      { icon: FileText, text: "Personalized symptom analysis" },
                      { icon: Bell, text: "Health alert notifications" },
                      { icon: ShieldCheck, text: "Medically accurate information" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center group">
                        <item.icon className="h-4 w-4 mr-2 text-pink-500 group-hover:text-pink-600 transition-colors" />
                        <span className="group-hover:text-pink-700 transition-colors">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-pink-300/30 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm hover:shadow-pink-200/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4">
                <h2 className="font-semibold text-lg flex items-center text-white">
                  <Star className="mr-2 h-5 w-5" />
                  How to Interact
                </h2>
              </div>
              <CardContent className="p-5">
                <div className="space-y-4 text-sm">
                  <div className="pb-3 border-b border-pink-100">
                    <h3 className="font-medium text-foreground">Describe Your Symptoms</h3>
                    <p className="text-muted-foreground mt-1">
                      Be specific about what you're experiencing, including duration and severity.
                    </p>
                  </div>
                  
                  <div className="pb-3 border-b border-pink-100">
                    <h3 className="font-medium text-foreground">Use Voice Input</h3>
                    <p className="text-muted-foreground mt-1">
                      Click the microphone button to speak your symptoms instead of typing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground">Ask Medical Questions</h3>
                    <p className="text-muted-foreground mt-1">
                      The AI can provide information about conditions, treatments, and when to seek care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 shadow-sm backdrop-blur-sm">
              <h3 className="text-red-700 font-medium mb-2 flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Emergency Warning
              </h3>
              <p className="text-sm text-red-700">
                If you're experiencing severe symptoms like chest pain, difficulty breathing, or severe bleeding, please call 911 or go to the nearest emergency room immediately.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-pink-200 py-6 mt-8 bg-white/80 backdrop-blur-sm">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-pink-400" />
            <span>&copy; 2025 Washington Guardian. All rights reserved.</span>
          </p>
          <div className="flex items-center space-x-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
