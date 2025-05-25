
import React from "react";
import Navigation from "@/components/Navigation";
import GoogleMap from "@/components/GoogleMap";
import { Card, CardContent } from "@/components/ui/card";
import { monitoredLocations, aiInsights } from "@/lib/ai-utils";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, TrendingUp } from "lucide-react";

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-pink-500" />
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              Real-Time Health Monitoring Map
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Live visualization of health patterns and potential outbreak clusters across Washington State
          </p>
        </div>
        
        <Card className="mb-6 border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div style={{height: "500px"}}>
              <GoogleMap />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-pink-500" />
              <h2 className="text-xl font-semibold text-gray-800">Current Health Monitoring Data</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {monitoredLocations.map(location => (
                <Card key={location.id} className="border-pink-100 hover:shadow-pink-200/30 transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{location.name}</h3>
                      <Badge 
                        variant={
                          location.riskLevel === 'severe' ? 'destructive' : 
                          location.riskLevel === 'high' ? 'default' : 
                          location.riskLevel === 'moderate' ? 'secondary' :
                          'outline'
                        }
                        className={
                          location.riskLevel === 'severe' ? 'bg-red-500' :
                          location.riskLevel === 'high' ? 'bg-orange-500' :
                          location.riskLevel === 'moderate' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }
                      >
                        {location.riskLevel} risk
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium text-pink-600">{location.reportCount}</span> symptom reports in the last 7 days
                    </p>
                    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          location.riskLevel === 'severe' ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                          location.riskLevel === 'high' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 
                          location.riskLevel === 'moderate' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          'bg-gradient-to-r from-green-400 to-green-600'
                        }`}
                        style={{ width: `${Math.min(100, (location.reportCount / 300) * 100)}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-pink-500" />
              <h2 className="text-xl font-semibold text-gray-800">AI Health Intelligence</h2>
            </div>
            <div className="space-y-4">
              {aiInsights.map(insight => (
                <Card key={insight.id} className="border-pink-100 hover:shadow-pink-200/30 transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-sm text-gray-800">{insight.title}</h3>
                      <Badge 
                        variant={
                          insight.severity === 'alert' ? 'destructive' : 
                          insight.severity === 'warning' ? 'default' : 
                          'outline'
                        }
                        className={
                          insight.severity === 'alert' ? 'bg-red-500' :
                          insight.severity === 'warning' ? 'bg-orange-500' :
                          'bg-blue-500'
                        }
                      >
                        {insight.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{insight.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {insight.relatedSymptoms.slice(0, 3).map(symptom => (
                        <Badge key={symptom} variant="outline" className="text-xs bg-pink-50 border-pink-200 text-pink-700">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      Confidence: {Math.round(insight.confidenceScore * 100)}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-pink-200 py-6 mt-8 bg-white/80 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-1">
            <Heart className="h-3 w-3 text-pink-400" />
            <span>&copy; 2025 Washington Guardian. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MapPage;
