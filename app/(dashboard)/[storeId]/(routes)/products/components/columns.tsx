"use client"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string
  name: string
  price: string
  category: string
  size: string
  color: string
  isFeatured: boolean
  isArchived: boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "isArchived",
    header: "Archived"
  },
  {
    accessorKey: "isFeatured",
    header: "Featured"
  },
  {
    accessorKey: "price",
    header: "Price"
  },
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "size",
    header: "Size"
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div 
          className="h-6 w-6 rounded-full border" 
          style={{ backgroundColor: row.original.color}} 
        />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
