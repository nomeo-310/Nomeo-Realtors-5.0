import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcryptjs from 'bcryptjs'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { getUserByEmail } from '@/libs/actions/data.action'
import clientPromise from '@/libs/utils/mongoDBClient'


export const authOptions:AuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as any,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text'},
        password: {label: 'password', type: 'password'}, 
      },
      //@ts-ignore
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Credentials');
        };

        const user = await getUserByEmail(credentials.email);

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials')
        };

        const isCorrectPassword = await bcryptjs.compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error('Wrong Password');
        }

        return user
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt'},
  secret: process.env.NEXTAUTH_SECRET,
}