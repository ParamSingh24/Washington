
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Bell,
  MessageCircle,
  Map,
  User,
  Settings,
  Heart,
  Plane
} from "lucide-react";

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = React.useState('/');
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: <Activity className="h-5 w-5" /> },
    { path: '/symptoms', label: 'Report Symptoms', icon: <Bell className="h-5 w-5" /> },
    { path: '/map', label: 'Outbreak Map', icon: <Map className="h-5 w-5" /> },
    { path: '/travel', label: 'Travel Health', icon: <Plane className="h-5 w-5" /> },
    { path: '/chat', label: 'Medical Assistant', icon: <MessageCircle className="h-5 w-5" /> },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-xl border-b border-pink-300/30 shadow-md shadow-pink-200/20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold shadow-lg">
            <Heart className="h-5 w-5" />
          </div>
          <span className="hidden md:inline-block font-['Inter'] font-bold text-xl text-white">
            Washington Guardian
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1 mx-4">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={() => setCurrentRoute(item.path)}
              className={cn(
                "flex items-center px-4 py-2 rounded-lg transition-all duration-200",
                currentRoute === item.path 
                  ? "text-white bg-white/20 shadow-inner" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-pink-300/30 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-lg z-50 shadow-lg shadow-pink-200/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={() => setCurrentRoute(item.path)}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3",
                currentRoute === item.path 
                  ? "text-white" 
                  : "text-white/80"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
