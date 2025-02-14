"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useCategories } from "../api/useCategorys";
import { renderElements } from "@/utils/render-elements";
import { Category } from "../types";
import { Button } from "@/components/ui/button";
import { DeleteCategoryDialog } from "../components/dialog/categoryDialog";
export const TableBodyCategory = () => {

    const { data: category, isLoading: isTodoLoading } = useCategories();

    // if (isTodoLoading) {
    //   return <TodoTableBodySkeleton />;
    // }

    return (

        <TableBody>
            {renderElements({
                of: category?.data,
                render: (category: Category, index: number) => (
                    <TableRow key={category.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell className="text-right flex items-center justify-end gap-3">
                                <div className="flex justify-center">
                                    <DeleteCategoryDialog categoryId={category.id} />
                                </div>
                        </TableCell>
                
                    </TableRow>
                ),
            })}
        </TableBody>

    )
}
