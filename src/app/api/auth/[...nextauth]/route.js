const { default: NextAuth } = require("next-auth");
import { dbConnect } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await dbConnect("user-collection").findOne({
          email: credentials.email,
        });
        const isPasswordOK = user.password === password;
        if (isPasswordOK) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const exUser = await dbConnect("user-collection").findOne({
          email: user?.email,
        });

        if (!exUser) {
          await dbConnect("user-collection").insertOne({
            name: user.name,
            email: user.email,
            provider: account.provider,
          });
        }
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/product`;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
