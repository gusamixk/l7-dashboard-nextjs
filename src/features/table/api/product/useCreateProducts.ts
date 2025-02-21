import type { ApiResponse, MutationApiProps } from "@/types/api";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { CreateProductFormSchema, MutationCreateProductProps, Product } from "../../types";

export const createProducts = async (values: CreateProductFormSchema) => {
  
  const response = await axiosInstance.post<ApiResponse<Product>>(
    "/products",
    values,
  );
  return response.data.data;
};

export const useCreateProduct = ({onSuccess}:  MutationCreateProductProps) => {
  return useMutation({
    mutationKey: ["products"],
    mutationFn: createProducts,
    onSuccess,
   
  });
};
  