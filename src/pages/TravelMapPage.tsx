import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import GoogleMap from "@/components/GoogleMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Home, AlertTriangle, Heart, Thermometer } from "lucide-react";

// Mock data for disease information
const diseaseData = {
  seattle: {
    name: "Seattle, WA",
    diseases: [
      { name: "Influenza", level: "Moderate", cases: 124, trend: "decreasing" },
      { name: "COVID-19", level: "Low", cases: 42, trend: "stable" },
      { name: "RSV", level: "Low", cases: 18, trend: "decreasing" },
    ],
    advisory: "Standard precautions recommended. Stay up to date with vaccinations.",
  },
  newyork: {
    name: "New York, NY",
    diseases: [
      { name: "COVID-19", level: "High", cases: 287, trend: "increasing" },
      { name: "Influenza", level: "Moderate", cases: 156, trend: "stable" },
      { name: "Norovirus", level: "Moderate", cases: 32, trend: "increasing" },
    ],
    advisory: "Increased cases of respiratory illnesses. Masks recommended in crowded indoor spaces.",
  },
  miami: {
    name: "Miami, FL",
    diseases: [
      { name: "Dengue", level: "High", cases: 15, trend: "increasing" },
      { name: "Zika", level: "Moderate", cases: 8, trend: "stable" },
      { name: "West Nile", level: "Low", cases: 3, trend: "stable" },
    ],
    advisory: "Mosquito-borne illness risk. Use insect repellent and wear protective clothing.",
  },
};

const TravelMapPage = () => {
  const [homeLocation, setHomeLocation] = useState("");
  const [travelLocation, setTravelLocation] = useState("");
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleSearch = (type: 'home' | 'travel') => {
    // In a real app, this would geocode the address and update the map
    console.log(`Searching for ${type} location`);
  };

  const renderDiseaseCard = (location: string) => {
    const locationData = diseaseData[location as keyof typeof diseaseData];
    if (!locationData) return null;

    return (
      <Card className="border-pink-100 hover:shadow-pink-200/30 transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-pink-500" />
            {locationData.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-gray-700">Current Health Advisories</h3>
              <p className="text-xs text-gray-600 bg-pink-50 p-2 rounded">
                <AlertTriangle className="inline h-3 w-3 text-yellow-500 mr-1" />
                {locationData.advisory}
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-gray-700">Active Diseases</h3>
              <div className="space-y-2">
                {locationData.diseases.map((disease, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded-md cursor-pointer transition-colors ${selectedDisease === disease.name ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setSelectedDisease(disease.name === selectedDisease ? null : disease.name)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-pink-500" />
                        <span className="text-sm font-medium">{disease.name}</span>
                      </div>
                      <Badge 
                        variant={
                          disease.level === 'High' ? 'destructive' : 
                          disease.level === 'Moderate' ? 'secondary' : 
                          'outline'
                        }
                        className="text-xs"
                      >
                        {disease.level}
                      </Badge>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      {disease.cases} cases • Trend: {disease.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <Plane className="h-6 w-6 text-pink-500" />
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              Travel Health Advisor
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Plan your travel with health and safety in mind. Check disease risks at your destination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Home Location */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Home className="h-5 w-5 text-pink-500" />
              Your Location
            </h2>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your location" 
                value={homeLocation}
                onChange={(e) => setHomeLocation(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleSearch('home')}>
                Search
              </Button>
            </div>
            {homeLocation && renderDiseaseCard('seattle')}
          </div>
          
          {/* Middle Column - Map */}
          <div className="lg:col-span-1">
            <Card className="border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm h-full">
              <CardContent className="p-0 h-full">
                <div className="h-96 w-full">
                  <GoogleMap />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Travel Location */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Plane className="h-5 w-5 text-pink-500" />
              Travel Destination
            </h2>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter destination" 
                value={travelLocation}
                onChange={(e) => setTravelLocation(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleSearch('travel')}>
                Search
              </Button>
            </div>
            {travelLocation && renderDiseaseCard('miami')}
          </div>
        </div>
        
        {/* Comparison Section */}
        {(homeLocation || travelLocation) && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Travel Health Recommendations
            </h2>
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                    <h3 className="font-medium text-blue-800">Before You Go</h3>
                    <ul className="mt-2 text-sm text-blue-700 space-y-1 list-disc list-inside">
                      <li>Check if any vaccinations are recommended for your destination</li>
                      <li>Pack a travel health kit with essential medications</li>
                      <li>Check travel advisories and entry requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <h3 className="font-medium text-yellow-800">During Your Trip</h3>
                    <ul className="mt-2 text-sm text-yellow-700 space-y-1 list-disc list-inside">
                      <li>Practice good hand hygiene</li>
                      <li>Be cautious with food and water</li>
                      <li>Use insect repellent if traveling to areas with mosquito-borne illnesses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-md border border-green-200">
                    <h3 className="font-medium text-green-800">After You Return</h3>
                    <ul className="mt-2 text-sm text-green-700 space-y-1 list-disc list-inside">
                      <li>Monitor your health for symptoms</li>
                      <li>Seek medical care if you feel sick</li>
                      <li>Tell your doctor about your recent travel</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
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

export default TravelMapPage;
