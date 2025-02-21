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
  })};
