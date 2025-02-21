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
import { useEffect, useState } from "react";
import { useCategories } from "../api/useCategorys";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { UpdateCategoryFormSchema } from "../types";
import { updateCategoryFormSchemas } from "../schemas";
import { EditCategoryFormInner } from "./EditCategoryFormInner";
import { useRouter } from "next/navigation";
import { useCategoriesById } from "../api/useCategoryById";
import { useUpdateCategory } from "../api/useUpdateCategory";

type EditCategoryFormProps = {
  categoryId : string;
}

export const EditCategoryForm = ({ categoryId }: EditCategoryFormProps) => {
  const { data: categoryData } = useCategoriesById(categoryId);
  const router = useRouter();
  // console.log(todoData);
  const { mutate: UpdateCategory , isPending: isUpdateCategoryPending} =
    useUpdateCategory({


      onSuccess: () => {
        router.push("/dashboard/table/category");
        toast.success("Category Update successfully");
      },
    });

  const form = useForm<UpdateCategoryFormSchema>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(updateCategoryFormSchemas),
  })
  const onSubmit = (values: UpdateCategoryFormSchema) => {
    UpdateCategory({id: categoryId, values});
  }; 
 
  useEffect(() => {
    if (categoryData) {
      form.reset({name :categoryData.name}); 
    }
  }, [categoryData, form]);

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <EditCategoryFormInner
            formId="category-form"
            onSubmit={onSubmit}
          />
        </Form>

      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="category-form" disabled={isUpdateCategoryPending || !form.formState.isDirty}>
          {isUpdateCategoryPending ? (
            <>
              <Loader2 className="animate-spin" />
              Update...
            </>
          ) : (
            "Update"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
