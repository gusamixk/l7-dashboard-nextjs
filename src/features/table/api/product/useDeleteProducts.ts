import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { DeleteProductProps, Product } from "../../types";

export const DeleteProduct = async (id: DeleteProductProps) => {
    const response = await axiosInstance.delete<ApiResponse<Product>>(
      `/products/${id.id}`
    );
    return response.data.data;
  };
  
  export const useDeleteProduct = ({onSuccess}:  DeleteProductProps) => {
    return useMutation({
      mutationKey: ["mutate", "delete-category"],
      mutationFn: DeleteProduct,
      onSuccess,
    });
  };