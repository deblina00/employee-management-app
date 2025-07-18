import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import emailjs from "@emailjs/browser"; 
import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  employeeSchema,
  employeeRoles,
  type EmployeeFormData,
  type Employee,
} from "@/types/employee";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

interface EmployeeFormProps {
  onSubmit: (employee: Employee) => void;
  editingEmployee?: Employee | null;
  onCancel?: () => void;
}

const EmployeeForm = ({
  onSubmit,
  editingEmployee,
  onCancel,
}: EmployeeFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Reset form when editing employee changes
  useEffect(() => {
    if (editingEmployee) {
      form.reset({
        name: editingEmployee.name,
        email: editingEmployee.email,
        phone: editingEmployee.phone || "",
        role: editingEmployee.role,
        joiningDate: editingEmployee.joiningDate,
      });
    } else {
      form.reset({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [editingEmployee, form]);

  const handleSubmit = async (data: EmployeeFormData) => {
    setIsSubmitting(true);

    try {
      const employee: Employee = editingEmployee
        ? {
            ...editingEmployee,
            ...data,
          }
        : {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date(),
          };

      console.log("Employee data submitted:", employee);

      // ✅ Send Email if Adding a New Employee
      if (!editingEmployee) {
        try {
          console.log("Sending email to EmailJS...");
          toast({
            title: "Testing Email...",
            description: "Attempting to send email via EmailJS",
          });
          await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
              name: data.name,
              email: data.email,
              phone: data.phone || "Not provided",
              role: data.role,
              message: "A new employee has been added.",
              time: new Date().toLocaleString(),
            },
            PUBLIC_KEY
          );

          console.log("✅ Email sent via EmailJS");
        } catch (error) {
          console.error("❌ Failed to send email:", error);
          toast({
            title: "Email Notification Failed",
            description:
              "Unable to send the email notification. Please check configuration.",
            variant: "destructive",
          });
        }
      }

      onSubmit(employee);

      if (!editingEmployee) {
        form.reset();
        toast({
          title: "Employee Added Successfully",
          description: `${employee.name} has been added to the employee database.`,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    onCancel?.();
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
            {editingEmployee ? "Edit Employee" : "Add New Employee"}
          </span>
          {editingEmployee && onCancel && (
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter employee name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {employeeRoles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="joiningDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Joining Date *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick joining date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] dark:text-black hover:opacity-90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {editingEmployee ? "Updating..." : "Adding..."}
                  </>
                ) : editingEmployee ? (
                  "Update Employee"
                ) : (
                  "Add Employee"
                )}
              </Button>

              {editingEmployee && onCancel && (
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EmployeeForm;
