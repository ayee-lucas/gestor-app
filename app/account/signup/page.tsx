import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SingUp() {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return redirect('/Home')
    }

    return (
    <div className="min-h-screen w-full grid grid-cols-2">
      <div className="w-full h-full "></div>
      <div className="w-full h-full bg-indigo-700 flex flex-col justify-center items-center">
        <h1></h1>

      </div>
    </div>
  );


}