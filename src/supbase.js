import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eqbixuajlqjaoebbwzca.supabase.co'
const supabaseKey = "sb_publishable_55gOGmxfIHw75uOSQqRsHg_v0sw_ctE"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;