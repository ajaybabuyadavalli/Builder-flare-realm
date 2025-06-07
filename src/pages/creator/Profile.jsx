import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const CreatorProfile = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="/api/placeholder/150/150" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
              <CardTitle>Creator Name</CardTitle>
              <p className="text-muted-foreground">@creatorhandle</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Followers:</span>
                  <span>125K</span>
                </div>
                <div className="flex justify-between">
                  <span>Engagement:</span>
                  <span>4.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span>Beauty</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Bio: Beauty enthusiast sharing daily tips and tricks</p>
                <p>Location: Mumbai, India</p>
                <Button>Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
