import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            name: string;
            surname: string;
            username: string;
            email: string;
            image: string;
            role: string;
            token: string;
        };
    
    }
}
