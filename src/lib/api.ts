import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, content, cover_image_url, published_at')
    .order('published_at', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }

  return data;
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, content, cover_image_url, published_at')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Failed to fetch post');
  }

  return data;
}
