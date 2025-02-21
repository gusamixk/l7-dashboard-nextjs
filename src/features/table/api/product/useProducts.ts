import { axiosInstance } from "@/lib/axios";
import { ApiResponse, DataResponse } from "@/types/api";
import { ReceiptPoundSterling } from "lucide-react";
import { Product } from "../../types";
import { useQuery } from "@tanstack/react-query";

export const getProducts = async () => {
    const response =await axiosInstance.get<ApiResponse<DataResponse<Product>>>("/products");
    return response.data.data;
}

export const useProducts = () => {
    return useQuery ({
        queryKey: ["mutate", "products"],
        queryFn: getProducts,
    })
};