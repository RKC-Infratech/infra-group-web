
-- Table: contact_submissions (for leads)
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text,
  created_at timestamp with time zone DEFAULT now()
);

-- Table: projects
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  firm text NOT NULL,
  type text NOT NULL,
  location text NOT NULL,
  year text NOT NULL,
  details text NOT NULL,
  image text,
  client text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Table: gallery
CREATE TABLE public.gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image text NOT NULL,
  description text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security for all tables (so you can optionally add policies later)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Public read/select access for now (can adjust later)
CREATE POLICY "Public read contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (true);

CREATE POLICY "Public read projects"
  ON public.projects
  FOR SELECT
  USING (true);

CREATE POLICY "Public read gallery"
  ON public.gallery
  FOR SELECT
  USING (true);
