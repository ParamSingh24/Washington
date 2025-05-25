
import React from "react";
import Navigation from "@/components/Navigation";
import SymptomReporting from "@/components/SymptomReporting";

const SymptomPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-guardian-secondary">Report Your Symptoms</h1>
          <p className="text-muted-foreground">
            Help us monitor public health by anonymously reporting your symptoms
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <SymptomReporting />
          
          <div className="mt-8 bg-guardian-light rounded-lg p-4">
            <h2 className="text-lg font-semibold text-guardian-secondary mb-2">Why Report Your Symptoms?</h2>
            <div className="space-y-4 text-sm">
              <p>
                By reporting your symptoms, you're contributing to a vital early warning system for disease outbreaks. Here's how it helps:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-md border">
                  <h3 className="font-medium">Early Detection</h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    Helps identify outbreaks days or weeks before traditional surveillance systems
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md border">
                  <h3 className="font-medium">Community Protection</h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    Enables faster public health responses to protect your community
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md border">
                  <h3 className="font-medium">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    Helps authorities allocate resources where they're needed most
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md border">
                  <h3 className="font-medium">Privacy Protected</h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    All data is anonymized and securely processed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 mt-8">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; 2025 Washington Guardian. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SymptomPage;
