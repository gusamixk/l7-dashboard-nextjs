import { Input } from "@/components/ui/input";
import { UpdateCategoryFormSchema, UpdateCategoryFormSchemas } from "../types";
import { z } from "zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import type {updateCategoryFormSchemas } from "../schemas";

type EditCategoryFormInnerProps = {
  formId: string;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (values: UpdateCategoryFormSchema) => void;
//   handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EditCategoryFormInner = ({
  formId,
  onSubmit,
//   handleChangeTodo,

}: EditCategoryFormInnerProps) => {
  const form = useFormContext<UpdateCategoryFormSchema>();
  return (
    <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Todo</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="Enter your todo"
              // onChange={handleChangeTodo}
            />
          </FormControl>
          <FormDescription>Create your todo</FormDescription>
          {form.formState.errors.name && (
            <FormMessage>{form.formState.errors.name.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  </form>
  );
};
