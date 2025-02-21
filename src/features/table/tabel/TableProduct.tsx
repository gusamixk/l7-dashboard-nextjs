import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableBodyCategory } from "./TableBodyCategory";
import { TableBodyProduct } from "./TableBodyProduct";

export const TableProduct = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Create at</TableHead>
          <TableHead>Update at</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBodyProduct/>
    </Table>
  );
};
