
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Plus, Instagram, Facebook, Twitter, Youtube, Twitch, Users } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BusinessDashboard = () => {
  const [showCreatorsDirectory, setShowCreatorsDirectory] = useState(false);

  const [activeTab, setActiveTab] = useState("overview");

  const categories = [
    { name: "Fashion", count: "2,450+", color: "bg-brand-mint/20 text-brand-teal" },
    { name: "Beauty", count: "1,890+", color: "bg-brand-coral/20 text-brand-coral" },
    { name: "Food", count: "1,240+", color: "bg-yellow-100 text-yellow-600" },
    { name: "Fitness", count: "980+", color: "bg-green-100 text-green-600" },
    { name: "Gaming", count: "1,350+", color: "bg-brand-navy/20 text-brand-navy" },
    { name: "Travel", count: "760+", color: "bg-indigo-100 text-indigo-600" },
    { name: "Technology", count: "1,120+", color: "bg-blue-100 text-blue-600" },
  ];

  const influencers = [
    {
      id: 1,
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=1",
      category: "Fashion",
      platforms: { instagram: true, youtube: true },
      followers: {
        instagram: 250000,
        youtube: 500000
      },
      rating: 4.8,
      engagementRate: "3.2%",
      priceRange: "$1,000 - $2,500",
      location: "New York, USA",
      languages: ["English", "Spanish"],
      description: "Fashion and lifestyle content creator specializing in sustainable fashion and minimalist living."
    },
    {
      id: 2,
      name: "Jordan Lee",
      avatar: "https://i.pravatar.cc/150?img=2",
      category: "Technology",
      platforms: { youtube: true, twitter: true },
      followers: {
        youtube: 1200000,
        twitter: 300000
      },
      rating: 4.9,
      engagementRate: "5.7%",
      priceRange: "$3,000 - $5,000",
      location: "San Francisco, USA",
      languages: ["English"],
      description: "Tech reviewer and expert focusing on the latest gadgets, smartphones and gaming equipment."
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=3",
      category: "Beauty",
      platforms: { instagram: true, youtube: true, tiktok: true },
      followers: {
        instagram: 750000,
        youtube: 350000,
        tiktok: 120000
      },
      rating: 4.7,
      engagementRate: "4.1%",
      priceRange: "$2,000 - $3,500",
      location: "Miami, USA",
      languages: ["English", "Spanish"],
      description: "Beauty guru passionate about skincare routines, makeup tutorials and hair styling guides."
    },
    {
      id: 4,
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=4",
      category: "Fitness",
      platforms: { instagram: true, youtube: true },
      followers: {
        instagram: 500000,
        youtube: 800000
      },
      rating: 4.6,
      engagementRate: "3.8%",
      priceRange: "$1,500 - $3,000",
      location: "Los Angeles, USA",
      languages: ["English"],
      description: "Certified personal trainer sharing workout routines, nutrition advice and transformation stories."
    },
    {
      id: 5,
      name: "Emma Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      category: "Food",
      platforms: { instagram: true, youtube: true, facebook: true },
      followers: {
        instagram: 350000,
        youtube: 900000,
        facebook: 150000
      },
      rating: 4.9,
      engagementRate: "6.2%",
      priceRange: "$2,000 - $4,000",
      location: "Chicago, USA",
      languages: ["English", "Chinese"],
      description: "Culinary expert creating easy-to-follow recipes, food photography tips and restaurant reviews."
    },
    {
      id: 6,
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=6",
      category: "Fashion",
      platforms: { instagram: true, twitter: true },
      followers: {
        instagram: 300000,
        twitter: 150000
      },
      rating: 4.5,
      engagementRate: "2.9%",
      priceRange: "$1,000 - $2,000",
      location: "Seoul, South Korea",
      languages: ["English", "Korean"],
      description: "Men's fashion influencer specializing in streetwear, sneakers and urban style guides."
    },
    {
      id: 7,
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/150?img=7",
      category: "Travel",
      platforms: { instagram: true, youtube: true },
      followers: {
        instagram: 420000,
        youtube: 310000
      },
      rating: 4.7,
      engagementRate: "4.5%",
      priceRange: "$1,800 - $3,200",
      location: "London, UK",
      languages: ["English", "French"],
      description: "Travel enthusiast documenting adventures across the globe with tips on budget-friendly luxury experiences."
    },
    {
      id: 8,
      name: "Ryan Park",
      avatar: "https://i.pravatar.cc/150?img=8",
      category: "Gaming",
      platforms: { youtube: true, twitch: true, tiktok: true },
      followers: {
        youtube: 650000,
        twitch: 180000,
        tiktok: 500000
      },
      rating: 4.8,
      engagementRate: "7.3%",
      priceRange: "$2,500 - $4,500",
      location: "Toronto, Canada",
      languages: ["English"],
      description: "Pro gamer and content creator specializing in FPS games with entertaining commentary and strategy guides."
    },
  ];

  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(0) + "K";
    }
    return count;
  };

  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const PlatformIcon = {
    instagram: Instagram,
    facebook: Facebook, 
    twitter: Twitter,
    youtube: Youtube,
    twitch: Twitch,
    tiktok: Users
  };

  const platformNames = {
    instagram: "Instagram",
    facebook: "Facebook",
    twitter: "Twitter",
    youtube: "YouTube",
    twitch: "Twitch",
    tiktok: "TikTok"
  };

  const InfluencerCard = ({ influencer }) => (
    <Card className="overflow-hidden hover:shadow-md transition-all h-full">
      <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-3 border-b">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold">{influencer.name}</h3>
          <p className="text-sm text-muted-foreground">{influencer.category}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{influencer.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {Object.entries(influencer.platforms || {}).map(([platform, isActive]) => {
            if (!isActive) return null;
            const Icon = PlatformIcon[platform] || Users;
            const followers = influencer.followers?.[platform];
            
            return (
              <div key={platform} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                <Icon className="h-3 w-3 mr-1" />
                {followers ? formatFollowers(followers) : platformNames[platform]}
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
          <div className="flex items-center">
            <span className="font-medium text-yellow-500 mr-1">★</span>
            <span>{influencer.rating}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-green-500 mr-1">↗</span>
            <span>{influencer.engagementRate}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-blue-500 mr-1">$</span>
            <span className="truncate">{influencer.priceRange}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-red-500 mr-1">📍</span>
            <span className="truncate">{influencer.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue hover:bg-brand-blue/5">
          Profile
        </Button>
        <Button size="sm" className="bg-brand-blue hover:bg-brand-navy">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button className="bg-brand-teal hover:bg-brand-navy">
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recently Viewed</h2>
            <Button variant="link" className="text-brand-blue p-0">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {influencers.slice(0, 5).map((influencer) => (
                <CarouselItem key={influencer.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <InfluencerCard influencer={influencer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Creators For You</h2>
            <Button variant="link" className="text-brand-blue p-0">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {influencers.map((influencer) => (
                <CarouselItem key={influencer.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <InfluencerCard influencer={influencer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Based on Your Criteria</h2>
            <Button variant="link" asChild className="text-brand-blue p-0">
              <Link to="/creators">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {influencers.map((influencer) => (
                <CarouselItem key={influencer.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <InfluencerCard influencer={influencer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboard;
