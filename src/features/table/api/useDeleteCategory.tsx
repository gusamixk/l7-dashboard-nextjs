import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { DeleteCategoryProps, Category } from "../types";
import { useMutation } from "@tanstack/react-query";

export const DeleteCategories = async (id: DeleteCategoryProps) => {
    const response = await axiosInstance.delete<ApiResponse<Category>>(
      `/categories/${id.id}`
    );
    return response.data.data;
  };
  
  export const useDeleteCategories = ({onSuccess}:  DeleteCategoryProps) => {
    return useMutation({
      mutationKey: ["mutate", "delete-category"],
      mutationFn: DeleteCategories,
      onSuccess,
    });
  };