

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import { format } from "date-fns";
import { Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { Employee } from "@/types/employee";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";

interface EmployeeGridProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (employeeId: string) => void;
}

const EmployeeGrid = ({ employees, onEdit, onDelete }: EmployeeGridProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(
    null
  );

  const handleDeleteClick = (employee: Employee) => {
    setEmployeeToDelete(employee);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (employeeToDelete) {
      onDelete(employeeToDelete.id);
      setDeleteDialogOpen(false);
      setEmployeeToDelete(null);
    }
  };

  const ActionButtons = ({ data }: { data: Employee }) => (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(data)}
        className="h-8 w-8 p-0"
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleDeleteClick(data)}
        className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );

  const columnDefs: ColDef<Employee>[] = [
    {
      field: "name",
      headerName: "Name",
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 150,
      valueFormatter: (params) => params.value || "Not provided",
    },
    {
      field: "role",
      headerName: "Role",
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 120,
      editable: true,
      // Use the AG Grid select cell editor with allowed role values
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Developer", "Designer", "Manager"],
      },
      cellRenderer: (params: any) => {
        const roleColors: Record<string, string> = {
          Developer: "bg-blue-100 text-blue-800",
          Designer: "bg-purple-100 text-purple-800",
          Manager: "bg-green-100 text-green-800",
        };
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          roleColors[params.value] || "bg-gray-100 text-gray-800"
        }">${params.value}</span>`;
      },
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      sortable: true,
      filter: "agDateColumnFilter",
      flex: 1,
      minWidth: 130,
      valueFormatter: (params) =>
        params.value ? format(new Date(params.value), "MMM dd, yyyy") : "",
    },
    {
      headerName: "Actions",
      cellRenderer: ActionButtons,
      sortable: false,
      filter: false,
      width: 100,
      pinned: "right",
    },
  ];

  const defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="bg-gradient-to-r from-[#36D1DC] to-[#09245f] dark:from-[#F8FF00] dark:to-[#3AD59F] bg-clip-text text-transparent">
              Dashboard
            </span>
            <Badge variant="secondary" className="text-sm">
              {employees.length}{" "}
              {employees.length === 1 ? "Employee" : "Employees"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="ag-theme-alpine h-96 w-full">
            <AgGridReact
              theme="legacy"
              rowData={employees}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 20, 50, 100]}
              animateRows={true}
              // rowSelection="single"
              rowSelection={{ type: "single" } as any}
            />
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Employee</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <strong>{employeeToDelete?.name}</strong>? This action cannot be
              undone and will permanently remove the employee from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Employee
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EmployeeGrid;
