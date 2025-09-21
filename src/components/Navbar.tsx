import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Map, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Menu,
  X,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Maps", href: "/maps", icon: Map },
  { name: "Alerts", href: "/alerts", icon: AlertTriangle },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Community", href: "/community", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeAlerts = 3; // Mock data - will be dynamic

  return (
    <nav className="bg-gradient-primary shadow-elevated border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-primary-foreground mr-3" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary-foreground">RAKSHAK</h1>
                <p className="text-xs text-primary-foreground/80">Police Dashboard</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`
                      flex items-center space-x-2 px-4 py-2 relative
                      ${isActive 
                        ? "bg-secondary text-secondary-foreground shadow-sm" 
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                    {item.name === "Alerts" && activeAlerts > 0 && (
                      <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                        {activeAlerts}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Notification Bell */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 relative">
              <Bell className="h-5 w-5" />
              {activeAlerts > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {activeAlerts}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-primary border-t border-primary-foreground/20">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`
                      w-full justify-start space-x-2
                      ${isActive 
                        ? "bg-secondary text-secondary-foreground" 
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {item.name === "Alerts" && activeAlerts > 0 && (
                      <Badge variant="destructive" className="ml-auto">
                        {activeAlerts}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}