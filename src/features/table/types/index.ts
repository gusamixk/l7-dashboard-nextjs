import { z } from "zod";
import { createCategoryFormSchemas, createProductFormSchemas, updateCategoryFormSchemas } from "../schemas";


export type Category = {
  id: string;
  name: string;
  slug: string;
  products: []; 
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: string;
  image: string;
  category_id?: string | null;
  created_at?:string;
  updated_at?: string;
};

//Category
export type CreateCategoryFormSchema = {
  name: string;
  slug?: string;
};

export type UpdateCategoryFormSchema = {
  name?: string;
  status?: boolean;
};

export type CreateCategoryFormSchemas = z.infer<typeof createCategoryFormSchemas> 
export type UpdateCategoryFormSchemas = z.infer<typeof updateCategoryFormSchemas>

export type MutationCreateCategoryProps = {
 onSuccess?: () => void,
//  onError?: () => void ;
//  onMutate: () => void;
}
export type MutationUpdateCategoryProps = {
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


// Product
export type CreateProductFormSchema = {
  name: string;
  slug?: string;
  price: string;
  category_id:string;
};

export type MutationCreateProductProps = {
  onSuccess?: () => void,
 //  onError?: () => void ;
 //  onMutate: () => void;
 }
 export type CreateProductFormSchemas = z.infer<typeof createProductFormSchemas> 

 export type DeleteProductProps = {
  id: string;
  onSuccess?: () => void;
//  onError?: () => void ;
//  onMutate: () => void;
}