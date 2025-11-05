-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  texto TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages (public form)
CREATE POLICY "Anyone can submit contact messages"
  ON public.contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view contacts (for admin purposes)
CREATE POLICY "Only authenticated users can view contacts"
  ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true);