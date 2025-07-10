
import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeGrid from "./EmployeeGrid";
import type { Employee } from "@/types/employee";
import { toast } from "@/hooks/use-toast";

const STORAGE_KEY = "employee-management-data";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  });

  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        const employeesWithDates = parsedData.map((emp: any) => ({
          ...emp,
          joiningDate: new Date(emp.joiningDate),
          createdAt: new Date(emp.createdAt),
        }));
        setEmployees(employeesWithDates);
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      toast({
        title: "Error Loading Data",
        description: "Failed to load saved employee data.",
        variant: "destructive",
      });
    }
  }, []);

  // Save employees to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      toast({
        title: "Error Saving Data",
        description: "Failed to save employee data.",
        variant: "destructive",
      });
    }
  }, [employees]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prev: Employee[]) => [employee, ...prev]);
    console.log("Added employee:", employee);
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    setEmployees((prev: Employee[]) =>
      prev.map((emp: Employee) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
    toast({
      title: "Employee Updated",
      description: `${updatedEmployee.name} has been updated successfully.`,
    });
  };

  const deleteEmployee = (employeeId: string) => {
    const employeeToDelete = employees.find((emp) => emp.id === employeeId);
    setEmployees((prev: Employee[]) =>
      prev.filter((emp) => emp.id !== employeeId)
    );
    toast({
      title: "Employee Deleted",
      description: `${employeeToDelete?.name} has been removed.`,
    });
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0">
          <EmployeeForm
            onSubmit={editingEmployee ? updateEmployee : addEmployee}
            editingEmployee={editingEmployee}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="flex-1 min-w-0">
          <EmployeeGrid
            employees={employees}
            onEdit={handleEditEmployee}
            onDelete={deleteEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
