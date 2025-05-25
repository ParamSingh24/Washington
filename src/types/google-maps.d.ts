
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element | null, opts?: MapOptions);
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
      addListener(eventName: string, handler: Function): void;
    }
    
    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(map?: Map, anchor?: Marker): void;
    }
    
    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      styles?: MapTypeStyle[];
    }
    
    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      icon?: Symbol | Icon | string;
    }
    
    interface InfoWindowOptions {
      content?: string | Node;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface LatLng {
      lat(): number;
      lng(): number;
    }
    
    interface Symbol {
      path: SymbolPath;
      scale?: number;
      fillColor?: string;
      fillOpacity?: number;
      strokeColor?: string;
      strokeWeight?: number;
    }
    
    interface Icon {
      url: string;
      scaledSize?: Size;
    }
    
    interface Size {
      width: number;
      height: number;
    }
    
    interface MapTypeStyle {
      featureType?: string;
      stylers?: any[];
    }
    
    enum SymbolPath {
      CIRCLE = 0
    }
  }
}

export {};
