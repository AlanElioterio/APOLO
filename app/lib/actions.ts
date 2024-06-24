'use server'
 
import { signIn } from '@/auth/signIn'
import { redirect } from 'next/navigation';
 
export async function authenticate(_currentState: unknown, formData: FormData) {

  try {

    const response = await signIn('credentials', formData)
    
  } catch (error) {
    
    // if (error) {
        
    //   switch (error?.type) {

    //     case 'CredentialsSignin':
    //       console.error(error);
    //       return 'Invalid credentials.'
    //     default:
    //       console.error(error);
    //       return 'Something went wrong.'
    //   }
    // }
    throw error
  }
}