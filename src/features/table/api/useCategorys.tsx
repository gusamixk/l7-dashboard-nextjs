"use client";
import { axiosInstance } from "@/lib/axios";
import type {
  ApiResponse,
  QueryApiProps,
  DataResponse,
  MetaProps,
} from "@/types/api";
import type { Category } from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const getCategories = async () => {
  const response =
    await axiosInstance.get<ApiResponse<DataResponse<Category>>>("/categories");
    console.log("API Response:", response.data.data );
  return response.data.data;
};


export const useCategories = () => {
  return useQuery ({
    queryKey: ["mutate","categories"],
    queryFn: getCategories,
  })
  // const [state, setState] = useState<QueryApiProps<Todo[]>>({
  //   data: [],
  //   meta: {} as MetaProps,
  //   isLoading: true,
  //   isError: false,
  //   error: "",
  };

//   const fetchTodos = async () => {
//     try {
//       const todos = await getTodos();
//       setState((prev) => ({
//         ...prev,
//         data: todos?.data?.data ?? [],
//         meta: todos.data?.meta ?? ({} as MetaProps),
//         isLoading: true,
        
//       }));
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         setState((prev) => ({
//           ...prev,
//           isError: false,
//           error: error.message,
          
//         }));
//       }
//     } finally {
//       setState((prev) => ({ ...prev, isLoading: false }));
//     }
//   };

//   useEffect(() => {
//     void fetchTodos();
//   }, []);

//   return { ...state };
// };
