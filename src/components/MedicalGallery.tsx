
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Activity, Shield } from "lucide-react";

const MedicalGallery = () => {
  const medicalImages = [
    {
      id: 1,
      title: "WHO Health Guidelines",
      description: "Following international health standards",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      icon: Shield
    },
    {
      id: 2,
      title: "Community Health",
      description: "Protecting Washington communities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
      icon: Users
    },
    {
      id: 3,
      title: "Medical Research",
      description: "Advanced health monitoring technology",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
      icon: Activity
    },
    {
      id: 4,
      title: "Healthcare Heroes",
      description: "Supporting frontline medical workers",
      image: "https://images.unsplash.com/photo-1584467735871-8297656e5285?w=300&h=200&fit=crop",
      icon: Heart
    }
  ];

  return (
    <Card className="border-pink-200 shadow-lg shadow-pink-100/30 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-3 border-b border-pink-100 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <CardTitle className="text-lg font-semibold flex items-center text-gray-800">
          <Heart className="mr-2 h-5 w-5 text-pink-500" />
          Health & Medical Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {medicalImages.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 right-2 p-1 bg-white/90 rounded-full">
                  <item.icon className="h-3 w-3 text-pink-500" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-xs opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
          <p className="text-sm text-gray-700 text-center">
            <strong className="text-pink-600">Washington Guardian</strong> - Your trusted partner in community health protection
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalGallery;
