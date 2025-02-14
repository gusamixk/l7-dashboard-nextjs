
export type Category = {
  id: string;
  name: string;
  slug: string;
  // products: Product[];
  created_at: Date | string;
  updated_at: Date | string;
};


// export type Product = {
// id : string;
//   name : string;      
//   slug : string;     
//   price : string;  
//   // image : string;  
//   category : string;   
//   category_id: string;
//   created_at : Date | string;
//   updated_at : Date | string;
// }

//   export type CreateProductFormSchema = {
//     text: string;
//   };
  
//   export type UpdateProductFormSchema = {
//     text?: string;
//     status?: boolean;
//   };
  