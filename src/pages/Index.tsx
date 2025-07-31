
import React from "react";
import Navigation from "@/components/Navigation";
import OutbreakMapPreview from "@/components/OutbreakMapPreview";
import AIInsights from "@/components/AIInsights";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import MedicalGallery from "@/components/MedicalGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Activity, Users, AlertCircle, Thermometer, MapPin, TrendingUp, Calendar, Clock } from "lucide-react";

// Mock data for the dashboard
const healthStats = {
  activeOutbreaks: 3,
  totalReports: 1.2,
  communityMembers: 42.5,
  responseTime: '2.4h',
  riskLevel: 'Moderate',
  riskPercentage: 65,
  topConcerns: [
    { name: 'Influenza', cases: 124, trend: 'decreasing' },
    { name: 'COVID-19', cases: 87, trend: 'stable' },
    { name: 'RSV', cases: 45, trend: 'decreasing' },
  ],
  recentAlerts: [
    { id: 1, type: 'warning', message: 'Increased flu activity in Downtown area', time: '2h ago' },
    { id: 2, type: 'alert', message: 'Outbreak of norovirus in Capitol Hill', time: '5h ago' },
    { id: 3, type: 'info', message: 'New health advisory for seasonal allergies', time: '1d ago' },
  ],
  preventionTips: [
    'Wash hands frequently',
    'Get vaccinated for flu and COVID-19',
    'Stay home when feeling unwell',
    'Wear a mask in crowded places',
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      <main className="flex-1 container py-8 px-4">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Washington Guardian
                </h1>
              </div>
              <p className="text-slate-600 max-w-2xl mt-2">
                AI-powered health monitoring for outbreak detection and personalized medical guidance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-500 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Updated: {new Date().toLocaleString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Active Outbreaks</p>
                    <p className="text-2xl font-bold text-pink-600">{healthStats.activeOutbreaks}</p>
                  </div>
                  <div className="p-3 rounded-full bg-pink-50">
                    <AlertCircle className="h-5 w-5 text-pink-500" />
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs text-slate-500">
                  <span className="flex items-center text-green-500">
                    <ArrowDown className="h-3 w-3 mr-1" /> 12% from last week
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Total Reports</p>
                    <p className="text-2xl font-bold text-purple-600">{healthStats.totalReports}K</p>
                  </div>
                  <div className="p-3 rounded-full bg-purple-50">
                    <Activity className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs text-slate-500">
                  <span className="flex items-center text-green-500">
                    <TrendingUp className="h-3 w-3 mr-1" /> 8.2% from last week
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Community Members</p>
                    <p className="text-2xl font-bold text-blue-600">{healthStats.communityMembers}K</p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-50">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs text-slate-500">
                  <span className="flex items-center text-green-500">
                    <Users className="h-3 w-3 mr-1" /> 3.5% from last month
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Avg. Response Time</p>
                    <p className="text-2xl font-bold text-green-600">{healthStats.responseTime}</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-50">
                    <Clock className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs text-slate-500">
                  <span className="flex items-center text-green-500">
                    <TrendingDown className="h-3 w-3 mr-1" /> 12% faster
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Outbreak Map */}
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-pink-500" />
                    <h2 className="text-xl font-semibold">Outbreak Map</h2>
                  </div>
                  <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                    View Full Map
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <OutbreakMapPreview />
              </CardContent>
            </Card>
            
            {/* Health Alerts */}
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-pink-500" />
                  <h2 className="text-xl font-semibold">Health Alerts</h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {healthStats.recentAlerts.map(alert => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-pink-100 bg-white">
                      <div className={`p-1.5 rounded-full ${
                        alert.type === 'alert' ? 'bg-red-100 text-red-500' : 
                        alert.type === 'warning' ? 'bg-yellow-100 text-yellow-500' : 
                        'bg-blue-100 text-blue-500'
                      }`}>
                        <AlertCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <RecentActivity />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Insights */}
            <AIInsights />
            
            {/* Risk Assessment */}
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-pink-500" />
                  <h2 className="text-xl font-semibold">Your Health Risk</h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Risk Level</span>
                      <span className="font-medium text-pink-600">{healthStats.riskLevel}</span>
                    </div>
                    <Progress value={healthStats.riskPercentage} className="h-2 bg-slate-100" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-slate-800">Top Health Concerns</h3>
                    {healthStats.topConcerns.map((concern, index) => (
                      <div key={index} className="flex items-center justify-between text-sm p-2 rounded hover:bg-slate-50">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-pink-500" />
                          <span>{concern.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            concern.trend === 'increasing' ? 'bg-red-100 text-red-600' :
                            concern.trend === 'decreasing' ? 'bg-green-100 text-green-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            {concern.cases} cases
                          </span>
                          {concern.trend === 'increasing' ? (
                            <TrendingUp className="h-4 w-4 text-red-500" />
                          ) : concern.trend === 'decreasing' ? (
                            <TrendingDown className="h-4 w-4 text-green-500" />
                          ) : (
                            <Minus className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <QuickActions />
            
            {/* Prevention Tips */}
            <Card className="border-pink-100 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-pink-500" />
                  <h2 className="text-xl font-semibold">Prevention Tips</h2>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {healthStats.preventionTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* AI Medical Assistant */}
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
