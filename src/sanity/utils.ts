import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Get a pre-configured url-builder from Sanity
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs from Sanity image sources
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Fetch all blog posts
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    mainImage,
    publishedAt,
    excerpt,
    tags
  }`;

  return await client.fetch(query);
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    mainImage,
    publishedAt,
    excerpt,
    body,
    tags
  }`;

  return await client.fetch(query, { slug });
}

// Fetch recent blog posts (limited number)
export async function getRecentPosts(limit: number = 3) {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    author,
    mainImage,
    publishedAt,
    excerpt,
    tags
  }`;

  return await client.fetch(query);
}
