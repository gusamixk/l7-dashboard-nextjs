import { Button } from "@/components/ui/button"; 
 import { 
   Card, 
   CardContent, 
   CardDescription, 
   CardFooter, 
   CardHeader, 
   CardTitle, 
 } from "@/components/ui/card"; 
 import { Loader2 } from "lucide-react"; 
  
 type CreateCategoryFormLayoutProps = { 
   formId: string; 
   children: React.ReactNode; 
   isPending: boolean; 
 }; 
  
 export const CreateCategoryFormLayout = ({ 
   formId, 
   children, 
   isPending, 
 }: CreateCategoryFormLayoutProps) => { 
   return ( 
     <Card> 
       <CardHeader> 
         <CardTitle>Category ADD</CardTitle> 
         <CardDescription>Stay organized with your daily tasks</CardDescription> 
       </CardHeader> 
       <CardContent>{children}</CardContent> 
       <CardFooter className="place-content-end"> 
         <Button form={formId} disabled={isPending} className="px-10"> 
           {isPending ? ( 
             <> 
               <Loader2 className="animate-spin" /> 
               Adding... 
             </> 
           ) : ( 
             "Add" 
           )} 
         </Button> 
       </CardFooter> 
     </Card> 
   ); 
 };