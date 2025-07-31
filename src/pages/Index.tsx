
import React from "react";
import Navigation from "@/components/Navigation";
import OutbreakMapPreview from "@/components/OutbreakMapPreview";
import AIInsights from "@/components/AIInsights";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import MedicalGallery from "@/components/MedicalGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      <main className="flex-1 container py-8 px-4">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-pink-500" />
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              Washington Guardian
            </h1>
          </div>
          <p className="text-slate-600 max-w-2xl">
            AI-powered health monitoring for outbreak detection and personalized medical guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            <OutbreakMapPreview />
            <RecentActivity />
          </div>
          
          <div className="space-y-6">
            <AIInsights />
            <QuickActions />
            <MedicalGallery />
            
            {/* New chatbox preview section */}
            <div className="rounded-xl overflow-hidden border border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm hover:shadow-pink-200/50 transition-shadow duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  AI Medical Assistant
                </h3>
              </div>
              <div className="p-4 bg-gradient-to-b from-white to-pink-50/50">
                <div className="text-sm text-gray-600 mb-3 p-3 bg-white rounded-lg border border-pink-100 shadow-sm">
                  How can I help with your health concerns today?
                </div>
                <Link to="/chat" className="block">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                    Chat with AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-6 rounded-2xl glass-effect p-6 shadow-md border border-pink-200 bg-white/80 hover:shadow-pink-200/40 transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                Ready to protect your community?
              </h2>
              <p className="text-slate-600">Join our network of health guardians and help prevent outbreaks.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/chat">
                <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg px-6">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-lg px-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-pink-200 py-6 mt-auto bg-white/80 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
            <p className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-pink-400" />
              <span>&copy; 2025 Washington Guardian. All rights reserved.</span>
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
