import Link from 'next/link';
import { MainContent } from './MainContent';
import { TableCategory } from '../tabel/TableCategory';
import { CreateCategoryForm } from '../forms/CreateCategoryForm';

export const TableView = () =>{
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-2 bg-white">
       <CreateCategoryForm/>
        <MainContent/>
        <TableCategory />
      </main>
    </div>
  );
}