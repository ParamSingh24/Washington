
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aiInsights } from "@/lib/ai-utils";
import { Brain } from "lucide-react";

const AIInsights = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <Card className="neo-card border-white/10">
      <CardHeader className="pb-2 border-b border-white/10 bg-gradient-to-r from-background/80 to-background/40">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Brain className="mr-2 h-5 w-5 text-guardian-primary" />
            AI Health Insights
          </CardTitle>
          <Badge variant="outline" className="bg-guardian-primary/10 text-guardian-primary border-0">
            {aiInsights.length} New
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
          {aiInsights.map(insight => (
            <div key={insight.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm">{insight.title}</h3>
                <Badge 
                  variant={
                    insight.severity === 'alert' ? 'destructive' : 
                    insight.severity === 'warning' ? 'default' : 
                    'outline'
                  }
                  className={`ml-2 text-xs ${
                    insight.severity === 'alert' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 
                    insight.severity === 'warning' ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30' : 
                    'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                  }`}
                >
                  {insight.severity === 'alert' ? 'Critical' : 
                   insight.severity === 'warning' ? 'Warning' : 'Info'}
                </Badge>
              </div>
              
              <p className="mt-1 text-xs text-muted-foreground">{insight.description}</p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {insight.relatedSymptoms.map(symptom => (
                  <Badge key={symptom} variant="secondary" className="text-xs bg-white/5 hover:bg-white/10 text-foreground">
                    {symptom}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-2 pt-1 border-t border-white/5 text-xs text-muted-foreground">
                <span>{formatDate(insight.timestamp)}</span>
                <div className="flex items-center">
                  <span className="mr-1">AI Confidence:</span>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-guardian-primary rounded-full" 
                      style={{ width: `${(insight.confidenceScore * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-3 text-center">
          <a href="#" className="text-xs text-guardian-primary hover:text-guardian-accent transition-colors">View all insights</a>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
