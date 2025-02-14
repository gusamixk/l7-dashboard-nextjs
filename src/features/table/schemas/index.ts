import { z } from "zod";


export const createCategoryFormSchemas = z.object({
    name: z.string().min(1, "Nama kategori wajib diisi").max(50, "Nama maksimal 50 karakter"),
  slug: z.string().optional()
})