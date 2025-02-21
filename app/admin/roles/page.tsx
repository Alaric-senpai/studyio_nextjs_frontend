'use client';
import { useState } from "react";
import { Search, Plus, Shield, User, Users, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Role {
  id: number;
  name: string;
  description: string;
  users: number;
  permissions: {
    [key: string]: boolean;
  };
}

const initialRoles: Role[] = [
  {
    id: 1,
    name: "Administrator",
    description: "Full system access with all permissions",
    users: 3,
    permissions: {
      "View Dashboard": true,
      "Manage Users": true,
      "Manage Roles": true,
      "View Reports": true,
      "Edit Settings": true,
    },
  },
  {
    id: 2,
    name: "Teacher",
    description: "Access to teaching-related features",
    users: 45,
    permissions: {
      "View Dashboard": true,
      "Manage Users": false,
      "Manage Roles": false,
      "View Reports": true,
      "Edit Settings": false,
    },
  },
  {
    id: 3,
    name: "Student",
    description: "Limited access to student features",
    users: 500,
    permissions: {
      "View Dashboard": true,
      "Manage Users": false,
      "Manage Roles": false,
      "View Reports": false,
      "Edit Settings": false,
    },
  },
];

const Index = () => {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePermissionChange = (roleId: number, permission: string) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role.id === roleId) {
          return {
            ...role,
            permissions: {
              ...role.permissions,
              [permission]: !role.permissions[permission],
            },
          };
        }
        return role;
      })
    );
    
    toast({
      title: "Permission Updated",
      description: "The role permissions have been successfully updated.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Roles & Permissions</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Manage user roles and their permissions</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="mr-2 h-4 w-4" />
            Add New Role
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            className="pl-10 bg-background/50 backdrop-blur-sm"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <div key={role.id} className="bg-card text-card-foreground rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{role.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{role.description}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Users className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm text-muted-foreground">{role.users} users</span>
              </div>

              <div className="space-y-4">
                {Object.entries(role.permissions).map(([permission, enabled]) => (
                  <div key={permission} className="flex items-center justify-between">
                    <span className="text-sm">{permission}</span>
                    <Switch
                      checked={enabled}
                      onCheckedChange={() => handlePermissionChange(role.id, permission)}
                      className="permission-switch"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;