import { z } from "zod";
import { createCategoryFormSchemas } from "../schemas";


export type Category = {
  id: string;
  name: string;
  slug: string;
  products: []; 
  created_at: Date | string;
  updated_at: Date | string;
};



export type CreateCategoryFormSchema = {
  name: string;
  slug?: string;
};

export type UpdateCategoryFormSchema = {
  text?: string;
  status?: boolean;
};

export type CreateCategoryFormSchemas = z.infer<typeof createCategoryFormSchemas> 

export type MutationCreateCategoryProps = {
 onSuccess?: () => void,
//  onError?: () => void ;
//  onMutate: () => void;
}
export type DeleteCategoryProps = {
  id: string;
  onSuccess?: () => void;
//  onError?: () => void ;
//  onMutate: () => void;
}