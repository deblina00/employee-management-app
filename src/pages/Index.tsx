import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import EmployeeManagement from "@/components/EmployeeManagement";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-12">
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8 max-w-md mx-auto p-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Employee Management System
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your employees with ease. Sign in to get started.
              </p>
            </div>

            <div className="space-y-4">
              <SignInButton mode="modal">
                <Button size="lg" className="w-full">
                  Sign In to Continue
                </Button>
              </SignInButton>

              <p className="text-sm text-muted-foreground">
                Secure authentication powered by Clerk
              </p>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <h1 className="text-2xl font-bold">Employee Management</h1>
              <UserButton afterSignOutUrl="/" />
            </div>
          </header>
          <main className="container py-6">
            <EmployeeManagement />
          </main>
        </div>
      </SignedIn>
    </div>
  );
};

export default Index;
