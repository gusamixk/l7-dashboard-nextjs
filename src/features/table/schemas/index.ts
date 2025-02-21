import { z } from "zod";


export const createCategoryFormSchemas = z.object({
    name: z.string().min(1, "Nama kategori wajib diisi").max(50, "Nama maksimal 50 karakter"),
    slug: z.string().optional()
})

export const updateCategoryFormSchemas = createCategoryFormSchemas.partial();


export const createProductFormSchemas = z.object({
    name: z.string().min(1, "Nama produk wajib diisi").max(100, "Nama produk maksimal 100 karakter"),
    price: z.string().min(1, "Harga produk wajib diisi").regex(/^\d+$/, "Harga harus berupa angka"),
    category_id: z.string().min(1, "Kategori wajib dipilih"),
})