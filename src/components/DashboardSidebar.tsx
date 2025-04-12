
import { BarChart, Home, LayoutDashboard, MessageSquare, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/business-dashboard",
    active: true,
  },
  {
    title: "Campaigns",
    icon: BarChart,
    href: "/business-dashboard?tab=campaigns",
  },
  {
    title: "Creators",
    icon: Users,
    href: "/business-dashboard?tab=creators",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/business-dashboard?tab=messages",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/business-dashboard?tab=settings",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-r from-brand-teal to-brand-navy"></div>
          <span className="text-xl font-bold">IM</span>
        </Link>
      </div>
      
      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                  item.active
                    ? "bg-brand-teal/10 text-brand-teal"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
