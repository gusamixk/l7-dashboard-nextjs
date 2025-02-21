/*************  ✨ Codeium Command 🌟  *************/
import { PageContainer } from "@/components/layouts/PageContainer";
import { EditCategoryForm } from "../../forms/EditCategoryForm";



type EditCategoryPageProps = {
    params: Promise<{id: string}>;
};

export const EditCategoryPage = async ({params}: EditCategoryPageProps) => {
    const categoryId = (await params).id
    return (
       <PageContainer>
            <EditCategoryForm categoryId={categoryId}/>
       </PageContainer> 
    )
}
