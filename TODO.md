# TODO: Switch from Strapi to Supabase

## Steps to Complete
- [x] Install @supabase/supabase-js package
- [x] Update src/lib/api.ts to use Supabase client instead of Strapi GraphQL
- [x] Update src/env.d.ts to add types for PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY
- [ ] Followup: Set up Supabase project and 'posts' table if not done (columns: id, title, slug, excerpt, content, cover_image_url, published_at) - API test shows 404, table likely not created yet
- [x] Followup: Test API functions after changes - API test shows 404, table not created yet
- [ ] Followup: Verify Keystatic blog functionality remains intact - Keystatic packages not installed, causing dev server errors
