//src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

 const supabaseUrl = 'https://trwcsdcimfutfsrzmfxm.supabase.co';
 const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyd2NzZGNpbWZ1dGZzcnptZnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MjIyNDcsImV4cCI6MjA0ODA5ODI0N30.WqBZ3kfZqaLqOX88L3w3F40BeKAWdE0-ch5FjBVnR8g';
 const supabase = createClient(supabaseUrl, supabaseKey);
//
 export default supabase;
