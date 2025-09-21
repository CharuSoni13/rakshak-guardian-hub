import { Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-accent text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <div>
                <h3 className="text-xl font-bold">RAKSHAK</h3>
                <p className="text-sm text-primary-foreground/80">Police Dashboard</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Smart Tourist Safety Monitoring & Incident Response System developed for the 
              Smart India Hackathon. Ensuring tourist safety through community collaboration 
              and real-time monitoring.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400" />
              <span>for tourist safety in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Emergency Protocols
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Volunteer Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Training Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Rakshak - Smart India Hackathon Project. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <span>Emergency Hotline: 112</span>
              <span>Tourist Helpline: 1363</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}