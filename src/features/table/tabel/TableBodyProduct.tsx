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
import { useProducts } from "../api/product/useProducts";
import { renderElements } from "@/utils/render-elements";
import { Product } from "../types";
import { Button } from "@/components/ui/button";
import { DeleteCategoryDialog } from "../components/dialog/categoryDialog";
import { DeleteProductDialog } from "../components/dialog/productDIalog";
export const TableBodyProduct = () => {

    const { data: product, isLoading: isProductLoading } = useProducts();

    console.log(product?.data);
    return (

        <TableBody>
            {renderElements({
                of: product?.data,
                render: (product: Product, index: number) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.slug}</TableCell>
                        <TableCell>{product.price}</TableCell>  
                        <TableCell>{product.created_at}</TableCell>
                        <TableCell>{product.updated_at}</TableCell>
                        <TableCell className="text-right flex items-center justify-end gap-3">
                                <div className="flex justify-center">
                                    <DeleteProductDialog productId={product.id} />
                                </div>
                        </TableCell>
                    </TableRow>
                ),
            })}
        </TableBody>

    )
}
