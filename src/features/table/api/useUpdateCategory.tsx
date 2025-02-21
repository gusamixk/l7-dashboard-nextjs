import { axiosInstance } from "@/lib/axios"
import { ApiResponse } from "@/types/api"
import { Category, MutationUpdateCategoryProps, UpdateCategoryFormSchema } from "../types"
import { useMutation } from "@tanstack/react-query";

export const UpdateCategory = async ({id, values} : {id: string, values: UpdateCategoryFormSchema}) => {
    const response = await axiosInstance.put<ApiResponse<Category>>(
      `/categories/${id}`,
      values,
    );
    return response.data.data;
};

export const useUpdateCategory = ({onSuccess} : MutationUpdateCategoryProps) => {
    return useMutation({
      mutationKey: ["update", "categories"],
      mutationFn: UpdateCategory,
      onSuccess,
    })
}