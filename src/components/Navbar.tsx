import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, Map, AlertTriangle, BarChart3, Users, Settings, Bell, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import your custom logo
import logo from "@/assets/logo.png"; // replace with your logo path

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
  const activeAlerts = 3; // Mock data

  return (
    <nav className="bg-amber-500 shadow-lg border-b border-yellow-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Brand */}
          <div className="  flex items-center space-x-3">
            <img src={logo} alt="RAKSHAK Logo" className=" h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">RAKSHAK</h1>
              <span className="text-xs text-white/80">Police Dashboard</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-md transition-all
                      ${isActive
                        ? "bg-yellow-700 text-white shadow-inner"
                        : "text-white hover:bg-yellow-600/70"
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4 text-yellow-200" />
                    <span className="font-medium">{item.name}</span>
                    {item.name === "Alerts" && activeAlerts > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="ml-1 animate-pulse"
                      >
                        {activeAlerts}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Notification Bell */}
          <div className="hidden md:flex items-center ml-4">
            <Button variant="ghost" size="sm" className="relative text-white hover:bg-yellow-600/70">
              <Bell className="h-5 w-5 text-yellow-200" />
              {activeAlerts > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs animate-ping">
                  {activeAlerts}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-yellow-600/70"
            >
              {isOpen ? <X className="h-6 w-6 text-yellow-200" /> : <Menu className="h-6 w-6 text-yellow-200" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-2 pt-2 pb-3 bg-yellow-900 border-t border-yellow-700/40 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`
                    w-full justify-start space-x-2 rounded-md px-4 py-2
                    ${isActive 
                      ? "bg-yellow-700 text-white" 
                      : "text-white hover:bg-yellow-600/70"
                    }
                  `}
                >
                  <item.icon className="h-4 w-4 text-yellow-200" />
                  <span>{item.name}</span>
                  {item.name === "Alerts" && activeAlerts > 0 && (
                    <Badge className="ml-auto animate-pulse">
                      {activeAlerts}
                    </Badge>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
