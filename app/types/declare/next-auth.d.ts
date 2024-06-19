import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        // refreshToken: string;
        user: {
            id: string;
            role: string;
            accessToken: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
        role: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
        accessToken?: string;
    }
}
