import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";

const MyCampaigns = () => {
  const campaigns = [
    {
      title: "Beauty Product Launch",
      status: "Active",
      progress: "75%",
      earnings: "₹12,000",
    },
    {
      title: "Tech Review",
      status: "Completed",
      progress: "100%",
      earnings: "₹25,000",
    },
    {
      title: "Fashion Post",
      status: "Pending",
      progress: "0%",
      earnings: "₹8,000",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">My Campaigns</h1>
        <div className="grid gap-6">
          {campaigns.map((campaign, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{campaign.title}</CardTitle>
                  <Badge
                    variant={
                      campaign.status === "Active"
                        ? "default"
                        : campaign.status === "Completed"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <span>Progress: {campaign.progress}</span>
                  <span>Earnings: {campaign.earnings}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;
