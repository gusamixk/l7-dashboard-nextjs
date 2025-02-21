"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useProducts } from "../api/product/useProducts";
import { useCreateProduct } from "../api/product/useCreateProducts";
import { CreateProductFormInner } from "./CreateProuductFormInner";
import { createProductFormSchemas } from "../schemas";
import { CreateProductFormSchema, CreateProductFormSchemas } from "../types";

export const CreateProductForm = () => {
  const {refetch : refetchProducts} = useProducts();
  const [product, setProduct] = useState<string>("");
  const { mutate: createProduct, isPending: isCreateProductPending } =
    useCreateProduct({
      onSuccess: () => {
        void refetchProducts();
        form.reset();
        toast.success("Product added successfully");
      },
    });

  const form = useForm<CreateProductFormSchemas>({
    defaultValues: {
      name: "",
      price: "",
      category_id:"",
    },
    resolver: zodResolver(createProductFormSchemas),
  })
  const onSubmit = (values: CreateProductFormSchemas) =>
    createProduct(values);



  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Product</CardTitle>
        <CardDescription>Add Your Product</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <CreateProductFormInner
            formId="product-form"
            onSubmit={onSubmit}
            // handleChangeCategory={handleChangeCategory}
          />
        </Form>
      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="product-form" disabled={isCreateProductPending}>
          {isCreateProductPending ? (
            <>
              <Loader2 className="animate-spin" />
              Adding...
            </>
          ) : (
            "Add"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
