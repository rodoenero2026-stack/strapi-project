import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator"; 
const SkeletonProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            
            <Skeleton className="h-[400px] w-full rounded-xl" />
            
            <div className="space-y-4">
                <Skeleton className="h-10 w-[80%]" /> 
                <Skeleton className="h-6 w-[120px] rounded-full" /> 
                
                <Separator className="my-4" /> 
                
                <div className="space-y-2"> 
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[60%]" />
                </div>
                
                <Skeleton className="h-12 w-[150px] mt-10" /> 
                <Skeleton className="h-12 w-full rounded-full mt-6" /> 
            </div>
        </div>
    );
};

export default SkeletonProduct;