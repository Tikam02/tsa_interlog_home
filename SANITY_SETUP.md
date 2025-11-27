# Sanity CMS Setup Guide

This project is configured to use Sanity CMS for managing blog content. Follow these steps to set up and use Sanity.

## Prerequisites

- A Sanity account (sign up at [sanity.io](https://www.sanity.io))
- Node.js and npm installed

## Setup Steps

### 1. Create a Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize a new Sanity Studio project
# Run this in a separate directory (e.g., ./sanity-studio)
sanity init
```

When prompted:
- Choose "Create new project"
- Give your project a name (e.g., "TSA Interlog Blog")
- Use default dataset configuration (production)
- Choose "Clean project with no predefined schemas"

### 2. Configure Sanity Studio

After initialization, copy the blog schema from this project to your Sanity Studio:

1. Copy the schema files from `src/sanity/schemas/` to your Sanity Studio's `schemas/` directory
2. Import the schemas in your Sanity Studio's `schemaTypes/index.ts`:

```typescript
import { blogSchema } from './blog'

export const schemaTypes = [blogSchema]
```

### 3. Set Up Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

To get your project ID:
- Go to [sanity.io/manage](https://www.sanity.io/manage)
- Select your project
- Copy the Project ID

To create an API token:
- Go to your project settings
- Navigate to API → Tokens
- Click "Add API token"
- Give it a name and select "Editor" permissions
- Copy the token

### 4. Deploy Sanity Studio

```bash
cd your-sanity-studio-directory
sanity deploy
```

Choose a studio hostname (e.g., `tsa-blog`). Your studio will be available at `https://tsa-blog.sanity.studio`

### 5. Add CORS Origins

In your Sanity project settings:
1. Go to API → CORS Origins
2. Add your Next.js development URL: `http://localhost:3000`
3. Add your production URL: `https://tsatradelog.com`

## Using Sanity CMS

### Adding Blog Posts

1. Go to your Sanity Studio URL
2. Click "Blog Post" in the sidebar
3. Click "Create new Blog Post"
4. Fill in the required fields:
   - Title
   - Slug (auto-generated from title)
   - Author information
   - Main Image
   - Published date
   - Excerpt
   - Body content
   - Tags
5. Click "Publish"

### Fetching Blog Posts in Next.js

The project includes utility functions for fetching blog data:

```typescript
import { getAllPosts, getPostBySlug, getRecentPosts } from '@/sanity/utils';

// Get all blog posts
const posts = await getAllPosts();

// Get a specific post by slug
const post = await getPostBySlug('my-blog-post');

// Get recent posts (limited)
const recentPosts = await getRecentPosts(3);
```

### Image Handling

Use the `urlFor` helper to generate optimized image URLs:

```typescript
import { urlFor } from '@/sanity/utils';
import Image from 'next/image';

<Image
  src={urlFor(post.mainImage).width(800).height(600).url()}
  alt={post.title}
  width={800}
  height={600}
/>
```

## Next Steps

To fully integrate Sanity into your blog:

1. Update the blog listing page (`src/app/blog/page.tsx`) to fetch from Sanity
2. Update the blog details page (`src/app/blog-details/page.tsx`) to use dynamic routes
3. Create a dynamic route at `src/app/blog/[slug]/page.tsx` for individual blog posts
4. Replace hardcoded blog data with Sanity queries

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/sanity-nextjs-app-router)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
