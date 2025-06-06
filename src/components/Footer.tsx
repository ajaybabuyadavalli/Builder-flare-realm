import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export const Footer = memo(() => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Become a Creator", href: "/signup?role=creator" },
        { name: "Post a Campaign", href: "/signup?role=brand" },
        { name: "Partner with Us", href: "/signup?role=agency" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "FAQ", href: "/faq" },
        { name: "Community", href: "/community" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Creator Guide", href: "/guide/creator" },
        { name: "Brand Guide", href: "/guide/brand" },
        { name: "API Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="font-bold text-xl">Influbazzar</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Connecting brands, creators, and agencies in one premium
              influencer collaboration marketplace. Built for Bharat, empowering
              creators and D2C brands.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Influbazzar. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Social Links and Language */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                EN
              </Button>
              <span className="text-muted-foreground">|</span>
              <Button variant="ghost" size="sm">
                ������ं
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://instagram.com/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/company/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>support@influbazzar.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91-9000000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
