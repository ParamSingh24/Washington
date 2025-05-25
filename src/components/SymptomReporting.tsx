
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { availableSymptoms, monitoredLocations, reportSymptom } from "@/lib/ai-utils";
import { toast } from "@/components/ui/sonner";

const SymptomReporting = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>(monitoredLocations[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      toast.error("Please select at least one symptom to report.");
      return;
    }

    setIsSubmitting(true);

    try {
      await reportSymptom(selectedSymptoms, selectedLocation);
      setShowThankYou(true);
      setSelectedSymptoms([]);
    } catch (error) {
      toast.error("There was an error reporting your symptoms. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowThankYou(false);
    setSelectedSymptoms([]);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Report Your Symptoms</CardTitle>
      </CardHeader>
      <CardContent>
        {showThankYou ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Thank You for Your Report</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your contribution helps us monitor public health and detect outbreaks early.
            </p>
            <Button onClick={resetForm}>Report Another Symptom</Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="location" className="block text-sm font-medium mb-1">
                  Your Location
                </Label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                >
                  {monitoredLocations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Select Your Symptoms
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableSymptoms.map(symptom => (
                    <div key={symptom.id} className="flex items-start space-x-2">
                      <Checkbox 
                        id={symptom.id} 
                        checked={selectedSymptoms.includes(symptom.id)}
                        onCheckedChange={() => handleSymptomToggle(symptom.id)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label 
                          htmlFor={symptom.id} 
                          className="text-sm font-medium cursor-pointer"
                        >
                          {symptom.name}
                          {symptom.severity === 'severe' && (
                            <span className="ml-1 text-xs text-red-500 font-normal">(Severe)</span>
                          )}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting || selectedSymptoms.length === 0}
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                Your data is anonymized and used only for public health monitoring. Personal identifiable information is never shared.
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SymptomReporting;
