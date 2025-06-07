import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card className="border-2 border-purple-200 shadow-2xl">
          <CardHeader className="text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="mx-auto w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6"
            >
              <span className="text-white text-4xl font-bold">404</span>
            </motion.div>
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oops! Page Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              The page you're looking for seems to have gone on a content
              creation spree and can't be found right now.
            </p>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link to="/" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/case-studies">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Content
                </Link>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <Link to="/contact">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Get Help
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default NotFound;
