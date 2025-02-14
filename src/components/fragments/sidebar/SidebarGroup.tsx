import { Bell, CircleUserRound, House, LogIn, Table, UserPlus } from "lucide-react"
import { SidebarMenuList } from "./SidebarMenuList"

export const SidebarGroupList = () => {
    const sidebarItems = [
        {
            group: "dashboard",
            list: [
                {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: <House />,
                },
                {
                    title: "Table",
                    href: "/dashboard/table",
                    icon: <CircleUserRound />,
                },
                // {
                //     title: "Category",
                //     href: "/dashboard/category",
                //     icon: <Table />,
                // },
                // {
                //     title: "Notifications",
                //     href: "/dashboard/notifications",
                //     icon: <Bell />,
                // },
            ]
        
        },
        // {
        //     group: "auth",
        //     list: [
        //         {
        //             title: "Sign In",
        //             href: "/login",
        //             icon: <LogIn />,
        //         },
        //         {
        //             title: "Sign Up",
        //             href: "/register",
        //             icon: <UserPlus />,
        //         },
        //     ]
        // }
    ]

    return (
        <>
            {sidebarItems.map((item, index) => (
                <SidebarMenuList key={index} group={item.group} sidebarList={item.list} />
            ))}
        </>
    )
}