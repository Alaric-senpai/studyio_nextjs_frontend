'use client';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export type Report = {
    id:number;
    title:string;
    priority: 'LOW'|'MID'|'HIGH';
    doctype:string;
    location:string;
    filesize:string;
    createdAt:Date;
    updatedAt:Date;   
}

export const ReportColumns:ColumnDef<Report>[]=[
    {
        accessorKey:'title',
        header: 'Report title',
    },
    {
        accessorKey:'doctype',
        header: 'Report type'
    },
    {
        accessorKey: 'priority',
        header: 'Document priority',
    },
    {
        accessorKey: 'filesize',
        header: 'file size'
    },
    {
        accessorKey: 'location',
        header: 'file url',
    },
    {
        accessorKey: 'createdAt',
        header:'Added on'
    },
    {
        accessorKey: 'updatedAt',
        header: 'last updated'
    },
    {
        id:'Actions',
        cell: ({row})=>{
            const report = row.original
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
                    onClick={() => navigator.clipboard.writeText(report.location)}
                  >
                    Copy Location
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Update report</DropdownMenuItem>
                  <DropdownMenuItem>Delete User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
            
        }
    }
]