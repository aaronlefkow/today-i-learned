import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kmpxpxapfwhaobkyyzsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttcHhweGFwZndoYW9ia3l5enNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2MDk5MTYsImV4cCI6MjAyMzE4NTkxNn0.4yDyNnvBXJUv5-Ttax8tqPt2O-A-Y_tADfcCF3q_hjY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
