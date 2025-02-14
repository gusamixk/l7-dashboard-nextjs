import Link from "next/link"




export const MainContent = () => {
    return (
        <div className="flex gap-5 ">
        <Link href={"/dashboard/table/category"} className="bg-black  text-white p-2 rounded">Category</Link>
        <Link href={"/dashboard/table/product"} className="bg-black  text-white p-2 rounded">Products</Link>
        
    </div>

        // <div className="flex ">
        //     <Link href="/product" className="bg-gray-300 p-2 rounded">
        //     {/* <button className=">product</button> */}
        //     </Link>
        //     <Link href="/category" className="bg-gray-300 p-2 rounded">
        //     {/* <button className="bg-gray-300 p-2 rounded">category</button> */}
        //     </Link>
        // </div>

    )
}
