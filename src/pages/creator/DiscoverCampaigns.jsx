import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const DiscoverCampaigns = () => {
  const campaigns = [
    {
      title: "Beauty Product Launch",
      brand: "GlowCo",
      budget: "₹15,000",
      category: "Beauty",
    },
    {
      title: "Tech Review Campaign",
      brand: "TechGuru",
      budget: "₹25,000",
      category: "Technology",
    },
    {
      title: "Fashion Collection",
      brand: "StyleHub",
      budget: "₹20,000",
      category: "Fashion",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Discover Campaigns</h1>
        <div className="grid gap-6">
          {campaigns.map((campaign, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
                <p className="text-muted-foreground">
                  {campaign.brand} • {campaign.category}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    {campaign.budget}
                  </span>
                  <Button>Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverCampaigns;
