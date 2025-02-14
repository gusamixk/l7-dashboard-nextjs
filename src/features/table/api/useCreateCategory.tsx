import type { ApiResponse, MutationApiProps } from "@/types/api";
import type { CreateCategoryFormSchema, MutationCreateCategoryProps, Category } from "../types";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const createCategory = async (values: CreateCategoryFormSchema) => {
  
  const response = await axiosInstance.post<ApiResponse<Category>>(
    "/categories",
    values,
  );
  console.log (response.data.data);
  return response.data.data;
};

export const useCreateCategory = ({onSuccess}:  MutationCreateCategoryProps) => {
  return useMutation({
    mutationKey: ["categories"],
    mutationFn: createCategory,
    onSuccess,
   
  });
};
  // const [state, setState] = useState<MutationApiProps<Todo>>({
  //   data: {} as Todo,
  //   isPending: false,
  //   isError: false,
  //   error: "",

//   const mutate = async (values: CreateTodoFormSchema) => {
//     try {
//       const todo = await createTodo(values);
//       setState((prev) => ({
//         ...prev,
//         data: todo.data ?? ({} as Todo),
//         isPending: true,
//       }));
//     } catch (error) {
//       if (error instanceof Error) {
//         setState((prev) => ({
//           ...prev,
//           isError: true,
//           error: error.message,
//         }));
//       }
//     } finally {
//       setState((prev) => ({ ...prev, isPending: false }));
//     }
//   };

//   return { ...state, mutate };
// };
