import { axiosInstance } from "@/lib/axios";
import type {
  ApiResponse,
  QueryApiProps,
  DataResponse,
  MetaProps,
} from "@/types/api";
import type { Category} from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

 
export const getCategoriesById = async (id?: string) => {
    if(!id) throw new Error("id is required")
  const response =
    await axiosInstance.get<ApiResponse<Category>>(`/categories/${id}`);
  return response.data.data;
};


export const useCategoriesById = (id : string ) => {
  return useQuery ({
    queryKey: ["categories"],
    queryFn: () => getCategoriesById(id),
  });
}