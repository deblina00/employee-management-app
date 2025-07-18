import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import { GradientShieldIcon, GradientUsersIcon, GradientZapIcon } from "./icons/GradientIcons";

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
            Employee Management
            <br />
            Made Simple
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your workforce management with our intuitive platform.
            Add, edit, and organize employee data with ease and security.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] dark:text-black"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignInButton>
          </SignedOut>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <GradientUsersIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
            <p className="text-muted-foreground">
              Intuitive interface for managing all your employee data
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <GradientShieldIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Safe</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with Clerk authentication
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <GradientZapIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Built with modern tech for optimal performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
