import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import dbConnect from "@/app/utils/DatabaseConnection";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

dbConnect();

const url = process.env.NEXTAUTH_URL as string;

console.log({ nextauth: `${url}/api/User/login}` });

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
     
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const res = await fetch("http://localhost:3000/api/User/login", {
          method: "POST",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        console.log({user: user});

        if (res.ok && user) {
          return user;
        } else {
          console.log(res);
          return false;
        }
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
    error: "/account/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
