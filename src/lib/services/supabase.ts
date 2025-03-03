import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to save lead data
export async function saveLead(leadData) {
    try {
        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    email: leadData.email,
                    company_name: leadData.companyName,
                    industry: leadData.industry,
                    pain_points: leadData.painPoints,
                    tech_stack: leadData.techStack,
                    time_spent: leadData.timeSpent,
                    company_description: leadData.companyDescription,
                    language_preference: leadData.languagePreference,
                    created_at: new Date()
                }
            ])
            .select();

        if (error) throw error;
        return { success: true, data };
    } catch (error) {
        console.error('Error saving lead:', error);
        return { success: false, error };
    }
}

// Helper function to check if email already exists
export async function checkEmailExists(email) {
    try {
        const { data, error } = await supabase
            .from('leads')
            .select('email')
            .eq('email', email)
            .maybeSingle();

        if (error) throw error;
        return { exists: !!data, data };
    } catch (error) {
        console.error('Error checking email:', error);
        return { error };
    }
} 