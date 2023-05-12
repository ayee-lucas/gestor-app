import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SingUp() {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return redirect('/Home')
    }

    return (
    <div className="dark:bg-indigo-950 bg-indigo-700 min-h-screen w-full">
    </div>
  );


}