
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, MessageCircle, PlusCircle, ZoomIn } from "lucide-react";

const QuickActions = () => {
  return (
    <Card className="neo-card">
      <CardHeader className="pb-2 border-b bg-gradient-to-r from-white to-slate-50">
        <CardTitle className="text-lg font-semibold text-gray-800">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <Button className="w-full bg-gradient-to-r from-guardian-primary to-guardian-secondary hover:from-guardian-secondary hover:to-guardian-primary text-white rounded-lg shadow-md transition-all duration-300" size="lg">
          <Bell className="mr-2 h-4 w-4" />
          Report Symptoms
        </Button>
        
        <Button variant="outline" className="w-full border border-guardian-primary/20 bg-white text-guardian-primary hover:bg-guardian-primary/10 rounded-lg" size="lg">
          <MessageCircle className="mr-2 h-4 w-4 text-guardian-primary" />
          Chat with AI Assistant
        </Button>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button variant="ghost" className="w-full text-gray-700 hover:text-guardian-primary hover:bg-guardian-primary/10 rounded-lg" size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Health Data
          </Button>
          
          <Button variant="ghost" className="w-full text-gray-700 hover:text-guardian-primary hover:bg-guardian-primary/10 rounded-lg" size="sm">
            <ZoomIn className="mr-2 h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
        
        <div className="mt-4 p-3 glass-effect rounded-lg">
          <h3 className="text-sm font-medium text-guardian-primary mb-2">Did you know?</h3>
          <p className="text-xs text-slate-600">
            Your anonymous symptom reports power our AI-driven outbreak detection system, creating a community shield against emerging health threats.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
