import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

const CreatorEarnings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Earnings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹1,25,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹45,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Last Payout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹25,000</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between p-2 border-b">
                <span>Beauty Campaign</span>
                <span>₹15,000</span>
              </div>
              <div className="flex justify-between p-2 border-b">
                <span>Tech Review</span>
                <span>₹25,000</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Fashion Post</span>
                <span>₹5,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatorEarnings;
