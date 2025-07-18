import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Plus, Edit, Trash2, Search, Download, Upload } from "lucide-react";
import { GradientDownloadIcon, GradientEditIcon, GradientPlusIcon, GradientSearchIcon, GradientTrashIcon, GradientUploadIcon } from "./icons/GradientIcons";

export function FeaturesSection() {
  const features = [
    {
      icon: GradientPlusIcon,
      title: "Add Employees",
      description:
        "Quickly add new employees with comprehensive details and information.",
      badge: "Core",
    },
    {
      icon: GradientEditIcon,
      title: "Edit & Update",
      description:
        "Modify employee information with real-time updates and validation.",
      badge: "Core",
    },
    {
      icon: GradientTrashIcon,
      title: "Safe Deletion",
      description:
        "Remove employees with confirmation dialogs to prevent accidents.",
      badge: "Core",
    },
    {
      icon: GradientSearchIcon,
      title: "Smart Search",
      description:
        "Find employees quickly with powerful search and filtering options.",
      badge: "Pro",
    },
    {
      icon: GradientDownloadIcon,
      title: "Export Data",
      description:
        "Export employee data in various formats for reporting and analysis.",
      badge: "Pro",
    },
    {
      icon: GradientUploadIcon,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
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
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant={
                      feature.badge === "Core"
                        ? "default"
                        : feature.badge === "Pro" ||
                          feature.badge === "Enterprise"
                        ? "outline"
                        : "outline"
                    }
                    className={
                      feature.badge === "Core"
                        ? "bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] text-white dark:text-black border-none"
                        : feature.badge === "Pro" ||
                          feature.badge === "Enterprise"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] border"
                        : ""
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
