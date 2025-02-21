import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { CategorySelect } from "../components/SelectOption";
import { CreateProductFormSchemas } from "../types";

type CreateProductFormInnerProps = {
  formId: string;
  onSubmit: (values: CreateProductFormSchemas) => void;
};

export const CreateProductFormInner = ({
  formId,
  onSubmit,
}: CreateProductFormInnerProps) => {
  const form = useFormContext<CreateProductFormSchemas>();

  return (
    <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your product name"
                />
              </FormControl>
              <FormDescription>Create your product</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter your price product"
                />
              </FormControl>
              <FormDescription>Create your product price</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <CategorySelect name="category_id" label="Category" />
      </div>
    </form>
  );
};