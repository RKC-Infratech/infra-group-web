
-- Add a contact_number field to contact_submissions for storing phone numbers
ALTER TABLE public.contact_submissions
ADD COLUMN contact_number text;
