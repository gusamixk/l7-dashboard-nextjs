"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCategory } from "../tabel/TableCategory";
import { TableProduct } from "../tabel/TableProduct";
import { CreateCategoryForm } from "../forms/CreateCategoryForm";
import { CreateProductForm } from "../forms/CreateProductForm";



export const MainContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ambil tab dari URL, jika tidak ada default ke "categories"
    const defaultTab = searchParams.get("tab") || "categories";
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [openDialog, setOpenDialog] = useState(false); // State untuk modal

    // Update URL saat tab berubah
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        router.push(`?tab=${tab}`, { scroll: false });
        // Update URL tanpa refresh halaman
    };

    // Sync state dengan URL jika URL berubah langsung
    useEffect(() => {
        if (searchParams.get("tab")) {
            setActiveTab(searchParams.get("tab")!);
        }
    }, [searchParams]);

    return (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6 ">
            {/* Tabs Navigation */}
            <TabsList className="flex justify-between w-[200px]">
                <div className="flex space-x-4">
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                </div>
            </TabsList>
            {/* <div className="flex justify-end">
                {activeTab === "categories" && (
                    <Button onClick={() => setOpenDialog(true)}>Create Category</Button>
                )}
            </div> */}

            {/* Content berdasarkan Tab */}
            <TabsContent value="categories">
            <CreateCategoryForm/>
            <TableCategory />
           
                {/* <CreateCategoryDialog open={openDialog} setOpen={setOpenDialog} /> */}
            </TabsContent>
            <TabsContent value="products">
                <CreateProductForm/>
                <TableProduct/>
            </TabsContent>
        </Tabs>
    );
};