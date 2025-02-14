import { Input } from "@/components/ui/input";
import { CreateCategoryFormSchemas} from "../types";
import { z } from "zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { createCategoryFormSchemas } from "../schemas";


type CreateCategoryFormInnerProps = {
  formId: string;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (values: CreateCategoryFormSchemas) => void;
  // handleChangeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

  // const form = useForm<z.infer<typeof createTodoFormSchemas>({
  //   defaultValues: {
  //     text:"",
  //   },
  //   resolver: zodResolver(createTodoFormSchemas),
  // })

export const CreateCategoryFormInner = ({
  formId,
  onSubmit,
  // handleChangeCategory,
}: CreateCategoryFormInnerProps) => {
  const form = useFormContext<CreateCategoryFormSchemas>();
  return (
    <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="formId"
              placeholder="Enter your category"
              // onChange={handleChangeTodo}
            />
          </FormControl>
          <FormDescription>Create your category</FormDescription>
          {form.formState.errors.name && (
            <FormMessage>{form.formState.errors.name.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  </form>
  );
};
