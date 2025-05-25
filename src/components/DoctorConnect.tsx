
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Video, MessageCircle, Clock, User, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DoctorConnect = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      rating: 4.9,
      availability: "Available now",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine",
      rating: 4.8,
      availability: "Available in 15 min",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Family Medicine",
      rating: 4.9,
      availability: "Available in 30 min",
      image: "https://images.unsplash.com/photo-1594824475096-6100b6dda264?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const handleConnect = (doctorName: string, type: string) => {
    toast({
      title: `Connecting via ${type}`,
      description: `Connecting you with ${doctorName}...`,
      duration: 3000,
    });
  };

  return (
    <Card className="border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-3 border-b border-pink-100 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <CardTitle className="text-lg font-semibold flex items-center text-gray-800">
          <Phone className="mr-2 h-5 w-5 text-pink-500" />
          Connect with Professional Doctors
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {doctors.map(doctor => (
          <div key={doctor.id} className="flex items-center space-x-4 p-4 rounded-lg border border-pink-100 hover:bg-pink-50/50 transition-colors">
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{doctor.rating}</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Clock className="h-3 w-3 mr-1" />
                  <span className="text-xs">{doctor.availability}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                size="sm"
                onClick={() => handleConnect(doctor.name, "Video Call")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                <Video className="h-3 w-3 mr-1" />
                Video
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleConnect(doctor.name, "Phone Call")}
                className="border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                <Phone className="h-3 w-3 mr-1" />
                Call
              </Button>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            💡 <strong>Quick tip:</strong> Video consultations provide the most comprehensive assessment for your health concerns.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorConnect;
