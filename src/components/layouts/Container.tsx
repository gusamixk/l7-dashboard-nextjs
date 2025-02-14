import { Toaster as Sooner } from "sonner";
import { TanstackProviders } from "./providers/TanstackProvider";
import { Toaster } from "../ui/toaster";


type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
    return ( 
        <div className={`container ${className}`}>
        <TanstackProviders>
        {children}
        <Sooner position="top-center" />
        <Toaster />
    </TanstackProviders>
        </div>
    )
}