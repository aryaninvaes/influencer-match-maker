
import { useState } from "react";
import { 
  Search, Filter, MapPin, Languages, DollarSign, 
  Star, Users, TrendingUp, ChevronRight, ChevronLeft, 
  Eye, Instagram, Youtube, Twitter 
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface Influencer {
  id: number;
  name: string;
  avatar: string;
  category: string;
  followers: {
    instagram?: number;
    youtube?: number;
    twitter?: number;
  };
  rating: number;
  engagementRate: string;
  priceRange: string;
  location: string;
  languages: string[];
  description: string;
}

const InfluencerDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Sample categories
  const categories: Category[] = [
    { id: "fashion", name: "Fashion & Lifestyle", icon: <Users size={24} className="text-brand-blue" /> },
    { id: "tech", name: "Tech & Gaming", icon: <Users size={24} className="text-brand-royal" /> },
    { id: "beauty", name: "Beauty & Cosmetics", icon: <Users size={24} className="text-brand-gold" /> },
    { id: "fitness", name: "Fitness & Health", icon: <Users size={24} className="text-green-500" /> },
    { id: "food", name: "Food & Cooking", icon: <Users size={24} className="text-orange-500" /> },
  ];
  
  // Sample influencer data
  const influencers: Influencer[] = [
    {
      id: 1,
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=1",
      category: "fashion",
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
      category: "tech",
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
      category: "beauty",
      followers: {
        instagram: 750000,
        youtube: 350000,
        twitter: 120000
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
      category: "fitness",
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
      category: "food",
      followers: {
        instagram: 350000,
        youtube: 900000
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
      category: "fashion",
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
  ];
  
  // Filter influencers based on search query and category
  const filteredInfluencers = influencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         influencer.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || influencer.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Recently viewed influencers (limited to 3)
  const recentlyViewed = influencers.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-brand-blue">InfluenceMatch</h1>
              <Menubar className="border-none">
                <MenubarMenu>
                  <MenubarTrigger className="font-medium">Discovery</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Campaigns</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Analytics</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Messages</MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue/5">
                Need help?
              </Button>
              <Button className="bg-brand-blue hover:bg-brand-navy">
                Upgrade
              </Button>
              <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-sky flex items-center justify-center text-brand-blue font-bold">
                AB
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Find the Perfect Creator</h1>
        <p className="text-gray-600 mb-8">Discover and connect with influencers that match your brand values and audience needs</p>
        
        {/* Search and filter section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search creators by name, niche, or keywords" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter by category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center">
                <Select defaultValue="global">
                  <SelectTrigger className="w-[180px]">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Location" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="global">Global</SelectItem>
                    <SelectItem value="north_america">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center">
                <Select defaultValue="english">
                  <SelectTrigger className="w-[180px]">
                    <div className="flex items-center">
                      <Languages className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Language" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center">
                <Select defaultValue="any">
                  <SelectTrigger className="w-[180px]">
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Budget" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Budget</SelectItem>
                    <SelectItem value="low">Under $1,000</SelectItem>
                    <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                    <SelectItem value="high">$5,000 - $15,000</SelectItem>
                    <SelectItem value="premium">$15,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
        
        {/* Browse categories section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Browse Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-all cursor-pointer hover:border-brand-blue"
                onClick={() => setSelectedCategory(category.id === selectedCategory ? "all" : category.id)}
              >
                <div className="flex justify-center mb-3">{category.icon}</div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recently viewed section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recently Viewed</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map((influencer) => (
              <Card key={influencer.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-3 border-b">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{influencer.name}</h3>
                    <p className="text-sm text-muted-foreground">{influencer.category.charAt(0).toUpperCase() + influencer.category.slice(1)}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">{influencer.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {influencer.followers.instagram && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Instagram className="h-3 w-3 mr-1" />
                        {(influencer.followers.instagram / 1000).toFixed(0)}K
                      </div>
                    )}
                    {influencer.followers.youtube && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Youtube className="h-3 w-3 mr-1" />
                        {(influencer.followers.youtube / 1000).toFixed(0)}K
                      </div>
                    )}
                    {influencer.followers.twitter && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Twitter className="h-3 w-3 mr-1" />
                        {(influencer.followers.twitter / 1000).toFixed(0)}K
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{influencer.rating}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span>{influencer.engagementRate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-blue-500 mr-1" />
                      <span>{influencer.priceRange}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-red-500 mr-1" />
                      <span className="truncate">{influencer.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue hover:bg-brand-blue/5">
                    <Eye className="h-4 w-4 mr-1" />
                    Profile
                  </Button>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-navy">
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Main influencer listing */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {selectedCategory === "all" ? "All Creators" : 
                `${categories.find(c => c.id === selectedCategory)?.name || ''} Creators`}
            </h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="followers">Followers: High to Low</SelectItem>
                  <SelectItem value="engagement">Engagement: High to Low</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfluencers.map((influencer) => (
              <Card key={influencer.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-3 border-b">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img src={influencer.avatar} alt={influencer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{influencer.name}</h3>
                    <p className="text-sm text-muted-foreground">{influencer.category.charAt(0).toUpperCase() + influencer.category.slice(1)}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">{influencer.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {influencer.followers.instagram && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Instagram className="h-3 w-3 mr-1" />
                        {(influencer.followers.instagram / 1000).toFixed(0)}K
                      </div>
                    )}
                    {influencer.followers.youtube && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Youtube className="h-3 w-3 mr-1" />
                        {(influencer.followers.youtube / 1000).toFixed(0)}K
                      </div>
                    )}
                    {influencer.followers.twitter && (
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <Twitter className="h-3 w-3 mr-1" />
                        {(influencer.followers.twitter / 1000).toFixed(0)}K
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{influencer.rating}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span>{influencer.engagementRate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-blue-500 mr-1" />
                      <span>{influencer.priceRange}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-red-500 mr-1" />
                      <span className="truncate">{influencer.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue hover:bg-brand-blue/5">
                    <Eye className="h-4 w-4 mr-1" />
                    Profile
                  </Button>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-navy">
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredInfluencers.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 mb-4">No influencers match your search criteria</p>
              <Button 
                variant="outline" 
                className="text-brand-blue border-brand-blue hover:bg-brand-blue/5"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InfluencerDiscovery;
