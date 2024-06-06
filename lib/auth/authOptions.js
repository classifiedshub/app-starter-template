import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import db from "../database/db";

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            throw new Error("No user found");
          }

          const isPasswordCorrect = await compare(
            credentials.password,
            existingUser.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid credentials");
          }

          if (existingUser.role === "VENDOR" && !existingUser.isVerified) {
            throw new Error("User not verified");
          }

          return {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email,
            role: existingUser.role,
            isVerified: existingUser.isVerified,
          };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.isVerified = token.isVerified;
      }
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.role = user.role;
        token.isVerified = user.isVerified;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
