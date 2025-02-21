'use client';
import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export type Users = {
    id:number;
    email:string;
    name:string;
    role:'ADMIN'|'PARENT'|'DEVELOPER'|'TEACHER'|'STUDENT';
    gender:'MALE'|'FEMALE';
    createdAt:Date;
    updatedAt:Date;
    isActive:boolean;
}
export enum Role {
    'ADMIN',
    'PARENT',
    'DEVELOPER',
    'TEACHER',
    'STUDENT'
}
export enum Gender {
    'MALE',
    'FEMALE'
}

export const userColumns: ColumnDef<Users>[]= [
    {
        accessorKey: 'isActive',
        header: 'isActive'
    },
    {
        accessorKey: 'name',
        header: 'fullname'
    },
    {
        accessorKey: 'role',
        header: 'User Role'
    },
    {
        accessorKey: 'email',
        header: 'Email Address'
    },
    {
        accessorKey: 'gender',
        header: 'Gender',
    },
    {
        accessorKey: 'createdAt',
        header: 'Created On'
    },
    {
        accessorKey: 'updatedAt',
        header: 'Last updated'
    },
    {
        id:'Actions',
        cell: ({row})=>{
            const user = row.original
            return(
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(user.email)}
                  >
                    Copy user Email
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Suspend User</DropdownMenuItem>
                  <DropdownMenuItem>Delete User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
            
        }
    }
]
