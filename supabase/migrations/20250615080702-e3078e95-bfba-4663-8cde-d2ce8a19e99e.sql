
-- Allow all users (even unauthenticated) to insert contact form data into contact_submissions
CREATE POLICY "Allow insert for all (public contact form)" 
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- (Recommended, but optional) You can restrict select if you want to hide leads from public:
-- REVOKE ALL ON public.contact_submissions FROM anon;
