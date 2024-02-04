import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/User';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session }) {
            // Store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile }) {
            try {
                // Connect to the database (MongoDB in this case)
                await connectToDB();

                // Check if the user already exists
                const userExists = await User.findOne({ email: profile.email });

                // If not, create a new document and save the user in MongoDB
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                // Return true to indicate successful sign-in
                return true;
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                // Return false to indicate an error during sign-in
                return false;
            }
        },
    }
});

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
