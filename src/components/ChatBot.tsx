
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, Plus, Image, Heart, Phone } from "lucide-react";
import { availableSymptoms, generateAIResponse, Symptom } from "@/lib/ai-utils";
import { toast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your Washington Guardian AI assistant. How can I help you with your health concerns today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsProcessing(true);

    const matchedSymptoms = identifySymptoms(input);
    setSelectedSymptoms(matchedSymptoms);

    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const aiResponse = generateAIResponse(matchedSymptoms);
      
      const newBotMessage: Message = {
        id: `bot-${Date.now()}`,
        content: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
      setIsProcessing(false);
      
      if (matchedSymptoms.length > 0) {
        toast({
          title: `${matchedSymptoms.length} symptom${matchedSymptoms.length > 1 ? 's' : ''} identified`,
          description: "The AI is analyzing your symptoms.",
          variant: "default",
          duration: 3000,
        });
      }
    }, 1500);
  };

  const identifySymptoms = (input: string): Symptom[] => {
    return availableSymptoms.filter(symptom => 
      input.toLowerCase().includes(symptom.name.toLowerCase())
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const simulateVoiceInput = () => {
    setIsProcessing(true);
    
    toast({
      title: "Voice recording started",
      description: "Listening to your health concerns...",
      duration: 2000,
    });
    
    setTimeout(() => {
      const voiceText = "I've been having a fever and cough since yesterday. My temperature is around 100°F.";
      setInput(voiceText);
      setIsProcessing(false);
      
      inputRef.current?.focus();
      
      toast({
        title: "Voice captured",
        description: "You can edit the text before sending.",
        duration: 3000,
      });
    }, 2000);
  };
  
  const simulateImageUpload = () => {
    toast({
      title: "Feature coming soon",
      description: "Image uploads for symptom analysis will be available soon.",
      duration: 3000,
    });
  };

  const connectToDoctor = () => {
    toast({
      title: "Connecting to Doctor",
      description: "We're finding an available healthcare professional for you.",
      duration: 3000,
    });
  };

  return (
    <Card className="flex flex-col h-full max-h-[600px] border-pink-300/30 shadow-lg shadow-pink-100/30 bg-white/95 backdrop-blur-sm">
      <CardContent className="flex-1 p-0 flex flex-col h-full min-h-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-pink-50/50 min-h-0">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                    : "bg-white border border-pink-100"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white rounded-2xl px-4 py-3 border border-pink-100 shadow-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {selectedSymptoms.length > 0 && (
          <div className="px-4 py-2 bg-pink-50 border-t border-pink-100 flex-shrink-0">
            <p className="text-xs text-pink-600 font-medium">Identified symptoms:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {selectedSymptoms.map(symptom => (
                <span 
                  key={symptom.id}
                  className="text-xs bg-white px-2 py-0.5 rounded-full border border-pink-200 shadow-sm hover:bg-pink-50 transition-colors"
                >
                  {symptom.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 border-t border-pink-100 bg-white flex-shrink-0">
          <div className="flex space-x-2 mb-3">
            <Button
              type="button"
              size="sm"
              onClick={connectToDoctor}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Connect to Doctor
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={simulateVoiceInput}
              disabled={isProcessing}
              className="text-pink-500 border-pink-200 hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 flex-shrink-0"
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Voice input</span>
            </Button>
            
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={simulateImageUpload}
              disabled={isProcessing}
              className="text-pink-500 border-pink-200 hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 flex-shrink-0"
            >
              <Image className="h-4 w-4" />
              <span className="sr-only">Upload image</span>
            </Button>
            
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your health concern..."
              disabled={isProcessing}
              className="flex-1 border-pink-200 focus-visible:ring-pink-400"
            />
            
            <Button
              type="button"
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim() || isProcessing}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white flex-shrink-0"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>

          <div className="flex justify-center mt-3">
            <div className="flex items-center text-xs text-pink-400 space-x-1">
              <Heart className="h-3 w-3" />
              <span>Washington Guardian AI</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
