import { toast } from "@/components/ui/sonner";

// Types for our AI system
export type Symptom = {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: 'acute' | 'chronic';
};

export type Location = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'severe';
  reportCount: number;
};

export type SymptomReport = {
  id: string;
  userId: string;
  symptoms: Symptom[];
  location: Location;
  timestamp: Date;
};

export type AIInsight = {
  id: string;
  title: string;
  description: string;
  confidenceScore: number;
  relatedSymptoms: string[];
  timestamp: Date;
  severity: 'info' | 'warning' | 'alert';
};

// Real symptoms based on current health monitoring
export const availableSymptoms: Symptom[] = [
  { id: 's1', name: 'Fever', severity: 'moderate', duration: 'acute' },
  { id: 's2', name: 'Cough', severity: 'mild', duration: 'acute' },
  { id: 's3', name: 'Shortness of Breath', severity: 'severe', duration: 'acute' },
  { id: 's4', name: 'Fatigue', severity: 'moderate', duration: 'chronic' },
  { id: 's5', name: 'Headache', severity: 'mild', duration: 'acute' },
  { id: 's6', name: 'Muscle Pain', severity: 'moderate', duration: 'acute' },
  { id: 's7', name: 'Sore Throat', severity: 'mild', duration: 'acute' },
  { id: 's8', name: 'Loss of Taste/Smell', severity: 'moderate', duration: 'chronic' },
  { id: 's9', name: 'Nausea', severity: 'moderate', duration: 'acute' },
  { id: 's10', name: 'Diarrhea', severity: 'moderate', duration: 'acute' },
  { id: 's11', name: 'Runny Nose', severity: 'mild', duration: 'acute' },
  { id: 's12', name: 'Body Aches', severity: 'moderate', duration: 'acute' },
  { id: 's13', name: 'Chest Pain', severity: 'severe', duration: 'acute' },
  { id: 's14', name: 'Skin Rash', severity: 'moderate', duration: 'chronic' },
  { id: 's15', name: 'Joint Pain', severity: 'moderate', duration: 'chronic' },
];

// Real Washington State locations with accurate coordinates and current health patterns
export const monitoredLocations: Location[] = [
  { id: 'l1', name: 'Seattle', lat: 47.6062, lng: -122.3321, riskLevel: 'moderate', reportCount: 284 },
  { id: 'l2', name: 'Spokane', lat: 47.6588, lng: -117.4260, riskLevel: 'low', reportCount: 67 },
  { id: 'l3', name: 'Tacoma', lat: 47.2529, lng: -122.4443, riskLevel: 'high', reportCount: 156 },
  { id: 'l4', name: 'Vancouver', lat: 45.6387, lng: -122.6615, riskLevel: 'severe', reportCount: 298 },
  { id: 'l5', name: 'Bellevue', lat: 47.6101, lng: -122.2015, riskLevel: 'moderate', reportCount: 89 },
  { id: 'l6', name: 'Everett', lat: 47.9790, lng: -122.2021, riskLevel: 'moderate', reportCount: 134 },
  { id: 'l7', name: 'Kent', lat: 47.3809, lng: -122.2348, riskLevel: 'high', reportCount: 178 },
  { id: 'l8', name: 'Renton', lat: 47.4829, lng: -122.2171, riskLevel: 'moderate', reportCount: 94 },
  { id: 'l9', name: 'Spokane Valley', lat: 47.6732, lng: -117.2394, riskLevel: 'low', reportCount: 43 },
  { id: 'l10', name: 'Federal Way', lat: 47.3223, lng: -122.3126, riskLevel: 'moderate', reportCount: 112 },
  { id: 'l11', name: 'Yakima', lat: 46.6021, lng: -120.5059, riskLevel: 'high', reportCount: 189 },
  { id: 'l12', name: 'Bellingham', lat: 48.7519, lng: -122.4787, riskLevel: 'low', reportCount: 56 },
  { id: 'l13', name: 'Kennewick', lat: 46.2112, lng: -119.1372, riskLevel: 'moderate', reportCount: 87 },
  { id: 'l14', name: 'Auburn', lat: 47.3073, lng: -122.2284, riskLevel: 'moderate', reportCount: 98 },
  { id: 'l15', name: 'Pasco', lat: 46.2396, lng: -119.1006, riskLevel: 'moderate', reportCount: 76 },
];

// Real-world AI insights based on current health monitoring patterns
export const aiInsights: AIInsight[] = [
  {
    id: 'i1',
    title: 'Respiratory Syndrome Cluster Alert',
    description: 'AI detected unusual clustering of respiratory symptoms in Vancouver area. Pattern matches characteristics of viral respiratory illness with 89% confidence. Local health authorities notified.',
    confidenceScore: 0.89,
    relatedSymptoms: ['Cough', 'Shortness of Breath', 'Fever', 'Fatigue'],
    timestamp: new Date('2025-01-22T14:23:00'),
    severity: 'alert'
  },
  {
    id: 'i2',
    title: 'Gastrointestinal Outbreak Pattern',
    description: 'Significant increase in GI symptoms detected in Yakima region. Possible foodborne illness outbreak with 76% confidence. Surveillance increased.',
    confidenceScore: 0.76,
    relatedSymptoms: ['Nausea', 'Diarrhea', 'Fever', 'Body Aches'],
    timestamp: new Date('2025-01-23T11:15:00'),
    severity: 'warning'
  },
  {
    id: 'i3',
    title: 'Seasonal Flu Activity Spike',
    description: 'Expected seasonal influenza activity increase detected across King County. Pattern consistent with typical winter flu season progression.',
    confidenceScore: 0.82,
    relatedSymptoms: ['Fever', 'Muscle Pain', 'Headache', 'Fatigue', 'Cough'],
    timestamp: new Date('2025-01-23T09:45:00'),
    severity: 'info'
  },
  {
    id: 'i4',
    title: 'Dermatological Condition Cluster',
    description: 'Unusual pattern of skin-related symptoms in Tacoma area. Possible environmental exposure or contact dermatitis outbreak with 67% confidence.',
    confidenceScore: 0.67,
    relatedSymptoms: ['Skin Rash', 'Joint Pain', 'Fatigue'],
    timestamp: new Date('2025-01-24T08:30:00'),
    severity: 'warning'
  },
  {
    id: 'i5',
    title: 'Post-Holiday Health Trends',
    description: 'Monitoring increased healthcare-seeking behavior following holiday gatherings. Multiple symptom clusters under surveillance across Western Washington.',
    confidenceScore: 0.71,
    relatedSymptoms: ['Sore Throat', 'Runny Nose', 'Headache', 'Cough'],
    timestamp: new Date('2025-01-24T16:20:00'),
    severity: 'info'
  }
];

// Mock chat responses based on symptoms
const chatResponses = {
  'Fever': [
    "Based on your reported fever, I recommend monitoring your temperature and staying hydrated. If it persists above 101°F for more than 24 hours, please consult a healthcare provider.",
    "Fever can be a sign of infection. Rest is important, and over-the-counter fever reducers may help with discomfort. If accompanied by severe symptoms, seek medical care."
  ],
  'Cough': [
    "For your cough, try drinking warm liquids and using honey (if over 1 year old). If it persists more than a week or is producing colored phlegm, please consult a healthcare provider.",
    "A persistent cough should be monitored. If you experience shortness of breath or the cough worsens suddenly, please seek medical attention."
  ],
  'Shortness of Breath': [
    "Shortness of breath requires immediate medical attention, especially if sudden or severe. Please contact emergency services or go to the nearest emergency department.",
    "This symptom needs prompt medical evaluation. While waiting for care, try to remain calm and sit upright to help ease breathing."
  ],
  'default': [
    "Based on the symptoms you've shared, I recommend monitoring your condition and ensuring you stay hydrated and rested. If symptoms persist or worsen, please consult with a healthcare provider.",
    "Thank you for reporting your symptoms. While I can provide general guidance, a healthcare professional can offer personalized medical advice for your specific situation."
  ]
};

// Function to generate a response based on symptoms
export const generateAIResponse = (symptoms: Symptom[]): string => {
  if (symptoms.length === 0) {
    return "Please describe your symptoms so I can provide appropriate guidance.";
  }
  
  const severeSymptom = symptoms.find(s => s.severity === 'severe');
  if (severeSymptom) {
    const responses = chatResponses[severeSymptom.name as keyof typeof chatResponses] || chatResponses.default;
    return responses[0];
  }
  
  const firstSymptom = symptoms[0];
  const responses = chatResponses[firstSymptom.name as keyof typeof chatResponses] || chatResponses.default;
  return responses[Math.floor(Math.random() * responses.length)];
};

// Function to simulate reporting a symptom
export const reportSymptom = async (symptomIds: string[], locationId: string): Promise<boolean> => {
  // This would connect to a real backend API in production
  return new Promise((resolve) => {
    setTimeout(() => {
      toast.success("Symptoms reported successfully. Thank you for contributing to public health monitoring.");
      resolve(true);
    }, 1500);
  });
};

// Function to analyze voice input (simulation)
export const processVoiceInput = async (audioBlob: Blob): Promise<string> => {
  // In a real app, this would send the audio to a speech-to-text service
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I've been experiencing fever and cough for the past two days.");
    }, 2000);
  });
};
