"use server"
import { createSupabaseServerClient } from '@/libs/SupabaseServer';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';






export async function HandleSignUp(formData:FormData){
    const name = formData.get("name") as string;
    const email = formData.get("email")as string;
    const password = formData.get("password") as string;
    console.log("Received form data:", { name, email, password });

    if(!name || !email || !password){
        console.error("Missing required fields");
    }

     const supabase = await createSupabaseServerClient()

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if(error){
        console.error("Error signing up:", error);
        return {
            success: false, 
            error: error.message || "An unexpected error occurred. Please try again." 
        }
    }
    return {
        success:true,
        message:"User signed up successfully",
        user:data.user
    }
    

}

export async function HandleSignIn(formData:FormData){
    const email = formData.get("email")as string;
    const password = formData.get("password") as string;
    console.log("Received form data:", { email, password });

    try {
        const supabase = await createSupabaseServerClient()

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if(error){
            console.error("Error signing in:", error);
            return {
                success: false, 
                error: error.message || "An unexpected error occurred. Please try again." 
            }
        }
       
        return {
            success:true,
            message:"User signed in successfully",
            user:data.user
        }
    } catch (error) {
        console.error("Unexpected error during sign in:", error);
        return {
            success: false,
            error: "An unexpected error occurred. Please try again."
        }
    }
}

export async function HandleGoogleSignIn() {
    try {
        const supabase = await createSupabaseServerClient();
        const headersList = await headers();
        const origin = headersList.get('origin') || 'http://localhost:3000';

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${origin}/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        });

        if (error) {
            console.error("Error with Google sign-in:", error);
            return { 
                success: false, 
                error: error.message 
            };
        }

        // Redirect to Google OAuth page
        if (data.url) {
            redirect(data.url);
        }

        return { 
            success: false,
            error: "No redirect URL received from Supabase"
        };

    } catch (error) {
        
        if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
            throw error;
        }
        
        console.error("Unexpected error:", error);
        return { 
            success: false, 
            error: "An unexpected error occurred. Please try again." 
        };
    }
}

export async function HandleSignOut() {
    try {
        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        
        return { success: true };
    } catch (error) {
        console.error("Error signing out:", error);
        return { 
            success: false, 
            error: "Failed to sign out" 
        };
    }
}