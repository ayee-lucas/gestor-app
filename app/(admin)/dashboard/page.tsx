import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Error401 from "@/app/components/Error401";
import Navigation from "@/app/components/Dashboard/Navigation";

export default async function DashboardPage() {

    const session = await getServerSession(authOptions);

    if(!session?.user){
        redirect("/account/login")
    }
    
    if(session?.user.role === "user"){
        return(
            <div className="h-screen dark:bg-">
                <Error401/>
            </div>
        )
    }

    return (
         <div className="flex h-screen w-full dark:bg-[#100724]">  
            <Navigation/>
        </div>
            
    )
} 