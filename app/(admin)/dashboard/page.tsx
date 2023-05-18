import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Error401 from "@/app/components/Error401";
import Navigation from "@/app/components/Dashboard/Navigation";

const url = process.env.NEXTAUTH_URL as string;

async function getUsers() {
    const res = await fetch(`${url}/api/User/listusers`, {
      next: {revalidate: 100}
    });
  
    if (!res.ok) throw new Error(res.statusText);
  
    const users = await res.json();
  
    return users;
  }

export default async function DashboardPage() {
    
    const userData = await getUsers();

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