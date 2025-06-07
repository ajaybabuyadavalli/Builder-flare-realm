import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { BarChart3, Eye, Heart, MessageSquare } from "lucide-react";

const CreatorAnalytics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1.2M</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Likes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">85K</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Comments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12K</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4.2%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreatorAnalytics;
