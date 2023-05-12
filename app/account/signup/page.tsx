import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SingUp() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return redirect("/Home");
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-2">
      <div className="w-full h-full "></div>
      <div className="w-full h-full bg-indigo-700 flex flex-col justify-center items-start text-white px-8">
        <h1 className="font-black text-3xl py-3">RoomFly</h1>
        <h1 className=" text-4xl font-light">
          Seamless Services and Exquisite Lodging for Unforgettable Getaways
        </h1>
        <p className="py-2 pl-1">
          At RoomFly, we go beyond traditional lodging platforms by curating a
          handpicked selection of exquisite accommodations that embody elegance,
          style, and sophistication. From boutique hotels to luxurious resorts,
          our platform offers a diverse range of options to cater to your unique
          preferences
        </p>
      </div>
    </div>
  );
}
