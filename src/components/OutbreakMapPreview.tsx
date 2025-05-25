
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleMap from "@/components/GoogleMap";
import { monitoredLocations } from "@/lib/ai-utils";
import { Activity, MapPin } from "lucide-react";

const OutbreakMapPreview = () => {
  const highRiskCount = monitoredLocations.filter(loc => loc.riskLevel === 'high' || loc.riskLevel === 'severe').length;
  const totalReports = monitoredLocations.reduce((sum, loc) => sum + loc.reportCount, 0);

  return (
    <Card className="overflow-hidden border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm hover:shadow-pink-200/50 transition-shadow duration-300">
      <CardHeader className="pb-3 border-b border-pink-100 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center text-gray-800">
            <Activity className="mr-2 h-5 w-5 text-pink-500" />
            Real-Time Health Monitoring
          </CardTitle>
          <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs rounded-full shadow-sm">
            Live Data
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <GoogleMap />
        
        <div className="px-4 py-4 border-t border-pink-100 bg-gradient-to-r from-pink-50/50 to-purple-50/50">
          <div className="grid grid-cols-3 gap-4 mb-3">
            <div className="text-center">
              <div className="text-lg font-bold text-pink-600">{totalReports}</div>
              <div className="text-xs text-gray-600">Total Reports</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">{highRiskCount}</div>
              <div className="text-xs text-gray-600">High Risk Areas</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{monitoredLocations.length}</div>
              <div className="text-xs text-gray-600">Monitored Cities</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm flex items-center">
              <MapPin className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500 font-semibold">Severe alert</span> 
              <span className="text-gray-600 ml-1">detected in Vancouver area</span>
            </p>
            <button className="text-xs text-pink-600 hover:text-pink-700 hover:underline transition-colors">
              View detailed analysis
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OutbreakMapPreview;
