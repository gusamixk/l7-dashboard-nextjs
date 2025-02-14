


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
import { CreateCategoryFormInner } from "./CreateCategoryFormInner";
import { useForm } from "react-hook-form";
import { CreateCategoryFormSchemas } from "../types";
import { createCategoryFormSchemas } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useCategories } from "../api/useCategorys";
import { useCreateCategory } from "../api/useCreateCategory";

export const CreateCategoryForm = () => {
  const {refetch : refetchCategories} = useCategories();
  const [category, setCategory] = useState<string>("");
  const { mutate: createCategory, isPending: isCreateCategoryPending } =
    useCreateCategory({
      onSuccess: () => {
        form.reset();
        toast.success("Todo added successfully");
      },
    });
  
    const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTodo(e.target.value);
  };

  // const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await createTodo({ text: todo });
  // };
  const form = useForm<CreateCategoryFormSchemas>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(createCategoryFormSchemas),
  })
  const onSubmit = (values: CreateCategoryFormSchemas) =>
    createCategory(values);
  // createTodo(values)
  // const onSubmit = (values: CreateTodoFormSchemas) => console.log(values);

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Category</CardTitle>
        <CardDescription>Add Your Category</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <CreateCategoryFormInner
            formId="category-form"
            onSubmit={onSubmit}
            // handleChangeCategory={handleChangeCategory}
          />
        </Form>

      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="category-form" disabled={isCreateCategoryPending}>
          {isCreateCategoryPending ? (
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
