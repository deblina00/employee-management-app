import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientUsersIcon } from "./icons/GradientIcons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <GradientUsersIcon className="h-6 w-6" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
            EmployeeHub
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                size="sm"
                className="px-6 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] dark:text-black hover:opacity-90 transition"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
