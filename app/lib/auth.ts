import NextAuth, { DefaultSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import authConfig from "../config/auth-config";
const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
    callbacks: {
        async redirect({ url, baseUrl }) {
            const nextUrl = new URL(url);
            if (nextUrl.search.includes("comingFromThisUrl")) {
                const [key, value] = nextUrl.search.split("=");
                return decodeURIComponent(value);
            } else {
                return `${baseUrl}/dashboard`;
            }
        },
        async signIn({ user, account }) {
            try {
                if (
                    user === null ||
                    user === undefined ||
                    user?.email === null ||
                    user?.email === undefined ||
                    account === null ||
                    account === undefined ||
                    account?.provider === null ||
                    account?.provider === undefined ||
                    account?.providerAccountId === null ||
                    account?.providerAccountId === undefined
                ) {
                    // Handle the null case here, for example, throw an error or return false
                    throw new Error("User email is null");
                }
                const isAdminEmail =
                    user.email !== "nguyenhoangtrais2@gmail.com";
                const exitstingUser = await prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                });

                // const user1 = await prisma.user.findUnique({
                //     where: { email: user.email as string },
                // });
                if (!exitstingUser) {
                    const newUser = await prisma.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            role: isAdminEmail ? "admin" : "user",
                        },
                    });
                    user.id = newUser.id;
                } else {
                    user.id = exitstingUser.id;
                }
                const userAccount = await prisma.account.findUnique({
                    where: {
                        provider_providerAccountID: {
                            provider: account.provider,
                            providerAccountID: account.providerAccountId,
                        },
                    },
                });
                if (!userAccount) {
                    await prisma.account.create({
                        data: {
                            userID: user.id,
                            type: account.type,
                            provider: account.provider,
                            providerAccountID: account.providerAccountId,
                            refreshToken: account.refresh_token,
                            accessToken: account.access_token,
                            expiresAt: account.expires_at
                                ? Math.floor(account.expires_at / 1000)
                                : null,
                            tokenType: account.token_type,
                            idToken: account.id_token,
                            scope: account.scope,
                        },
                    });
                }
            } catch (e: any) {
                throw new Error(e.message);
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                const userDB = await prisma.user.findUnique({
                    where: { id: user.id as string },
                });
                if (userDB) {
                    token.id = userDB.id as string;
                    token.role = userDB.role;
                }
            }

            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = Object.assign({}, session.user, {
                accessToken: token.accessToken,
                id: token.id,
                role: token.role,
            });
        

            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET,
    ...authConfig,
});
