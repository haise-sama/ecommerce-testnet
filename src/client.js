import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fqswzxbboypgfkgihygl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxc3d6eGJib3lwZ2ZrZ2loeWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4ODMwNzgsImV4cCI6MjA2ODQ1OTA3OH0.Kk5WpoprmSc5bepcF9nPo_xzJOSkNrAEuAYewh_nz-Q';


export const supabase = createClient(supabaseUrl, supabaseKey);
