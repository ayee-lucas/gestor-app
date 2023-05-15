import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/app/components/Login/LoginForm";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  "use server";
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session?.user) {
    return <LoginForm />;
  }

  if (session?.user.role === "admin") {
    return redirect("/dashboard");
  }

  if (session?.user.role === "user") {
    return redirect("/Home");
  }

  return <div>SignInPage</div>;
}
