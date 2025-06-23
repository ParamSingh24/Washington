import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { monitoredLocations } from '@/lib/ai-utils';

const DEFAULT_API_KEY = "AIzaSyAraVzrGGD7HF-NmhdgdUMx14LYSp6vOc4";

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('googleMapsApiKey') || DEFAULT_API_KEY);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (apiKey && mapRef.current && !isLoaded) {
      const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places']
      });

      loader.load().then(() => {
        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: { lat: 47.6062, lng: -122.3321 }, // Seattle
          zoom: 8,
          styles: [
            {
              featureType: 'poi.medical',
              stylers: [{ visibility: 'on' }]
            }
          ]
        });

        setMap(mapInstance);
        setIsLoaded(true);

        // Add markers for each location
        monitoredLocations.forEach(location => {
          let markerColor = '#22C55E'; // green
          if (location.riskLevel === 'moderate') markerColor = '#EAB308'; // yellow
          if (location.riskLevel === 'high') markerColor = '#F97316'; // orange
          if (location.riskLevel === 'severe') markerColor = '#EF4444'; // red

          const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: mapInstance,
            title: `${location.name}: ${location.reportCount} reports (${location.riskLevel} risk)`,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: Math.max(8, location.reportCount / 5),
              fillColor: markerColor,
              fillOpacity: 0.8,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div class="p-2">
                <h3 class="font-semibold text-sm">${location.name}</h3>
                <p class="text-xs text-gray-600">${location.reportCount} symptom reports</p>
                <p class="text-xs">Risk Level: <span class="font-medium" style="color: ${markerColor}">${location.riskLevel}</span></p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(mapInstance, marker);
          });
        });
      }).catch(error => {
        console.error('Error loading Google Maps:', error);
      });
    }
  }, [apiKey, isLoaded]);

  const handleApiKeySubmit = () => {
    localStorage.setItem('googleMapsApiKey', apiKey);
    window.location.reload();
  };

  if (!apiKey) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Google Maps Integration</h3>
        <p className="text-sm text-gray-600 mb-4 text-center max-w-md">
          To display real Google Maps, please enter your Google Maps API key. 
          Get one from the Google Cloud Console.
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="password"
            placeholder="Enter Google Maps API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border-pink-300 focus:border-pink-500"
          />
          <Button 
            onClick={handleApiKeySubmit}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
          >
            Load Map
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Your API key will be stored locally in your browser
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden border border-pink-200 shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading Google Maps...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
