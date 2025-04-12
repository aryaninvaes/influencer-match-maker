
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bell, MessageSquare, Plus, Search, Settings, Users } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search creators..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                />
              </div>
              <Button className="bg-brand-teal hover:bg-brand-navy">
                <Plus className="mr-2 h-4 w-4" />
                New Campaign
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="creators">Creators</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Active Campaigns</CardTitle>
                    <CardDescription>Your current marketing efforts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-brand-teal">12</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Connected Creators</CardTitle>
                    <CardDescription>Influencers working with you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-brand-teal">34</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Campaign Reach</CardTitle>
                    <CardDescription>Total audience reached</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-brand-teal">1.2M</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Recent Campaigns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-mint to-brand-teal"></div>
                            <div>
                              <h3 className="font-medium">Summer Collection {i+1}</h3>
                              <p className="text-sm text-gray-500">8 creators • Running</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-brand-teal">
                      View All Campaigns
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Top Performing Creators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-coral to-brand-navy"></div>
                            <div>
                              <h3 className="font-medium">Creator Name {i+1}</h3>
                              <p className="text-sm text-gray-500">Fashion • 500K followers</p>
                            </div>
                          </div>
                          <div className="text-brand-teal font-medium">4.9% ER</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-brand-teal">
                      View All Creators
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="campaigns">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Your Campaigns</h2>
                <p className="text-gray-500">Manage your influencer marketing campaigns here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="creators">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Creator Network</h2>
                <p className="text-gray-500">Browse and connect with influencers for your campaigns.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Campaign Analytics</h2>
                <p className="text-gray-500">View performance metrics for all your marketing efforts.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <p className="text-gray-500">Manage your business profile and preferences.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;
