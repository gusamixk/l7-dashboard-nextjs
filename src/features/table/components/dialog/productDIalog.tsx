import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger, 
  } from "@/components/ui/alert-dialog"; 
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; 
  import { Ellipsis, Trash } from "lucide-react"; 
  import { toast } from "sonner"; 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProducts } from "../../api/product/useProducts";
import { useDeleteProduct } from "../../api/product/useDeleteProducts";

   
  type DeleteProductDialogProps = { 
    productId: string; 
  }; 
   
  export const DeleteProductDialog = ({ productId }: DeleteProductDialogProps) => { 
    const router = useRouter(); 
    const { refetch: refetchProducts } = useProducts(); 
    const { mutate: deleteProduct, isPending: isDeleteTodoPending } = useDeleteProduct({
        id: productId,
        onSuccess: () => {
          void refetchProducts();
          toast.success("Deleted Products successfully");
        },
      }); 
    
      const handleDeleteProduct = () => { 
        deleteProduct({id : productId}); 
      };

    return ( 
      <AlertDialog> 
     
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Ellipsis className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild>
            <Link href={`/dashboard/table/category/${productId}/edit`}>Edit</Link>
          </Button>
        </DropdownMenuItem>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="text-red-600 cursor-pointer">
              Hapus
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu> 
        <AlertDialogContent> 
          <AlertDialogHeader> 
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> 
            <AlertDialogDescription> 
              This action cannot be undone. This will permanently delete your 
              account and remove your data from our servers. 
            </AlertDialogDescription> 
          </AlertDialogHeader> 
          <AlertDialogFooter> 
            <AlertDialogCancel>Cancel</AlertDialogCancel> 
            <AlertDialogAction onClick={handleDeleteProduct}> 
              Continue 
            </AlertDialogAction> 
          </AlertDialogFooter> 
        </AlertDialogContent> 
      </AlertDialog> 
    ); 
  };



















// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Ellipsis } from "lucide-react";
// import { useDeleteCategories } from "../../api/useDeleteCategory";
// import { toast } from "sonner";
// import { useCategories } from "../../api/useCategorys";


// export type DeleteCategoryProps = {
//     categoryId: string;
// }

// export const DeleteCategoriesDialog = ({ categoryId }: DeleteCategoryProps) => {
//     const { refetch: refetchCategory } = useCategories()
//     const { mutate: deleteCategory } = useDeleteCategories({
//         id: categoryId,
//         onSuccess: () => {
//             toast.success("Berhasil Dihapus"),
//                 void refetchCategory();
//         },
//     }) }


//     const handleDeleteCategory = () => {
//         deleteCategory(categoryId);
//     }

//     return (
//         <AlertDialog>
//             <AlertDialogTrigger>
//             <Ellipsis className="h-5 w-5" />
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//                 <AlertDialogHeader>
//                     <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                     <AlertDialogDescription>
//                         This action cannot be undone. This will permanently delete your account
//                         and remove your data from our servers.
//                     </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                     <AlertDialogAction onClick={handleDeleteCategory}>Delete</AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//     )
// }


