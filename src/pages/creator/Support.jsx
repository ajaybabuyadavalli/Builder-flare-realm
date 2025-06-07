import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { HelpCircle, Mail, Phone } from "lucide-react";

const CreatorSupport = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Subject" />
                <Textarea placeholder="Describe your issue" rows={4} />
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">FAQ</h3>
                  <p className="text-sm text-muted-foreground">
                    Common questions and answers
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <Mail className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-sm text-muted-foreground">
                    support@influbazzar.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <Phone className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">
                    +91-9000000000
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorSupport;
