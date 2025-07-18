import { SignedIn, SignedOut } from "@clerk/clerk-react";
import EmployeeManagement from "@/components/EmployeeManagement";
import { Header } from "@/components/Header";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SignedOut>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Header />
            </div>
          </header>
          <main className="container px-8 py-6">
            <EmployeeManagement />
          </main>
        </div>
      </SignedIn>
    </div>
  );
};

export default Index;
