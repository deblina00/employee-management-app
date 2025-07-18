import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, Download, Upload } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Plus,
      title: "Add Employees",
      description:
        "Quickly add new employees with comprehensive details and information.",
      badge: "Core",
    },
    {
      icon: Edit,
      title: "Edit & Update",
      description:
        "Modify employee information with real-time updates and validation.",
      badge: "Core",
    },
    {
      icon: Trash2,
      title: "Safe Deletion",
      description:
        "Remove employees with confirmation dialogs to prevent accidents.",
      badge: "Core",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find employees quickly with powerful search and filtering options.",
      badge: "Pro",
    },
    {
      icon: Download,
      title: "Export Data",
      description:
        "Export employee data in various formats for reporting and analysis.",
      badge: "Pro",
    },
    {
      icon: Upload,
      title: "Bulk Import",
      description:
        "Import multiple employees at once using CSV or Excel files.",
      badge: "Enterprise",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your workforce effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge
                    variant={
                      feature.badge === "Core"
                        ? "default"
                        : feature.badge === "Pro"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
