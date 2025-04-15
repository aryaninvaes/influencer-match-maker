
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Instagram, Facebook, Twitter, Youtube, Twitch, Users, Search } from "lucide-react";
import { Button } from "./ui/button";

interface CreatorsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  influencers: any[]; // Using any[] temporarily, ideally should be properly typed
}

const CreatorsDialog = ({ isOpen, onClose, influencers }: CreatorsDialogProps) => {
  const PlatformIcon = {
    instagram: Instagram,
    facebook: Facebook, 
    twitter: Twitter,
    youtube: Youtube,
    twitch: Twitch,
    tiktok: Users
  };

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(0) + "K";
    }
    return count;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Creators Directory</h2>
            
            {/* Search and filters section */}
            <div className="bg-white rounded-lg mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    placeholder="Search creators by name, niche, or keywords" 
                    className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Platform" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Category" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Creators grid */}
          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {influencers.map((influencer) => (
                <Card key={influencer.id} className="overflow-hidden hover:shadow-md transition-all">
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
                            {followers ? formatFollowers(followers) : platform}
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
                        <span>{influencer.priceRange}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-red-500 mr-1">📍</span>
                        <span>{influencer.location}</span>
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
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatorsDialog;
