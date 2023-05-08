import NextAuth from "next-auth/next";
import dbConnect from "@/app/utils/DatabaseConnection";
import CredentialsProvider from "next-auth/providers/credentials";

dbConnect();


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log({
          datafetched: { credentials },
        });

        const { username, password } = credentials as any;

        console.log({ username, password });

        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/User/login}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });


        const user = await res.json();

        console.log({ user });

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],

  pages: {
    signIn: "/account/login",
  },
});

export { handler as GET, handler as POST };
