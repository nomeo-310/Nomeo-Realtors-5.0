import * as z from 'zod'

export const agentSignUpSchema = z.object({
  surname: z.string().trim().min(5, {message: 'Minimum of 5 characters'}).toLowerCase(),
  lastname: z.string().trim().min(5, {message: 'Minimum of 5 characters'}).toLowerCase(),
  email: z.string().min(1, {message: 'Email is required'}).email({message: 'Invalid email address'}).trim().toLowerCase(),
  password: z.string().min(8, {message: 'Password must be atleast 8 characters'}),
  profileImage: z.object({ public_id: z.string().url({message: 'Image not uploaded'}), secure_url: z.string().url()}),
  image: z.string().url(),
  city: z.string({message: 'Your city of residence is required and cannot be empty'}),
  state: z.string({message: 'Your state of residence is required and cannot be empty'}),
  agencyName: z.string({message: 'Name of agency is required and cannot be empty'}),
  officeAddress: z.string({message: 'Office address is required and cannot be empty'}),
  mobileNumber: z.string({message: 'Your mobile number is required and cannot be empty'}),
  officeNumber: z.string({message: 'Your office number is required and cannot be empty'}),
  inspectionFee: z.number({message: 'Your inspection fee per hour is required and cannot be empty'}),
  bio: z.string().optional(),
  agencyWebsite: z.string().optional()
});