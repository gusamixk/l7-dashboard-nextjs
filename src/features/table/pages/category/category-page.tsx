import { PageContainer } from "@/components/layouts/PageContainer"
import { TableView } from "../../components/TableView"
import { MainContent } from "@/features/table/components/MainContent"
import { TableCategory } from "@/features/category/table/TableCategory"

export const CategoryPage = () => {
    return (
        <PageContainer title="Category-Page">
            <TableView />
        </PageContainer>

    )
}