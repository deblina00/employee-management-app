import { Button } from "@/components/ui/button";
import { GradientGithubIcon, GradientLinkedinIcon, GradientTwitterIcon, GradientUsersIcon } from "./icons/GradientIcons";

export function Footer() {
  return (
    <footer className="bg-[#f1f3f5] dark:bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GradientUsersIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
                EmployeeHub
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Simplifying employee management for businesses of all sizes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <GradientGithubIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <GradientTwitterIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <GradientLinkedinIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EmployeeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
