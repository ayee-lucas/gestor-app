import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            name: string;
            surname: string;
            username: string;
            role: string;
            token: string;
        } & DefaultSession["user"];
    
    }
}
