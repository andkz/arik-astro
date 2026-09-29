import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Pobierz z import.meta.env (Astro) lub process.env (Node)
export const projectId = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env && process.env.SANITY_PROJECT_ID) ||
  'gkzj0x76';

export const dataset = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.SANITY_DATASET) ||
  (typeof process !== 'undefined' && process.env && process.env.SANITY_DATASET) ||
  'production';

export const apiVersion = '2024-01-01';

export const isConfigured = Boolean(projectId && projectId.trim() !== '');

export const sanityClient = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}

// ----------------- DANE ZAPASOWE (FALLBACKS) -----------------
export const FALLBACK_PROJECTS = [
  {
    _id: 'proj-1',
    slug: 'space',
    title: 'Space',
    category: 'Web Design',
    year: '2024',
    client: 'Space Exploration Lab',
    role: 'Lead UI/UX & Framer Developer',
    duration: '4 Weeks',
    mainImage: '/images/work-space.jpg',
    excerpt: 'A visionary digital portal for next-generation aerospace research and interstellar satellite technology.',
    overview: 'Space needed an immersive, modern digital presence to communicate their mission to researchers, investors, and space enthusiasts worldwide. The project focused on high-performance interactive 3D visualizations, modular content blocks, and clean typographic hierarchy.',
    challenge: 'Presenting highly complex astronomical telemetry and research whitepapers in an accessible, visually breathtaking format without sacrificing mobile load speed.',
    solution: 'We engineered a dark-mode first design system utilizing subtle ambient particle glow, fluid micro-interactions, and modular CMS architecture with instant load times.',
    result: '180% increase in inbound partnership inquiries and recognition in web design showcases for high aesthetic polish.',
    gallery: ['/images/work-space.jpg', '/images/work-nova.jpg'],
  },
  {
    _id: 'proj-2',
    slug: 'nova',
    title: 'Nova',
    category: 'Web Design',
    year: '2024',
    client: 'Nova Intelligence Inc.',
    role: 'Creative Director & Webflow Dev',
    duration: '3 Weeks',
    mainImage: '/images/work-nova.jpg',
    excerpt: 'Brand redesign and high-converting marketing site for an enterprise AI analytics platform.',
    overview: 'Nova is an AI-powered data intelligence suite. They needed a complete overhaul of their brand visual identity and a responsive website that converts enterprise tier visitors.',
    challenge: 'Differentiating Nova in a saturated AI landscape by avoiding clichéd robotic visuals in favor of refined, human-centric editorial design.',
    solution: 'Designed an editorial layout pairing custom serif typography, dynamic data charts, and interactive product demo previews.',
    result: 'Reduced bounce rate by 34% and grew enterprise demo requests by 2.4x in the first quarter post-launch.',
    gallery: ['/images/work-nova.jpg', '/images/work-sonic.jpg'],
  },
  {
    _id: 'proj-3',
    slug: 'sonic',
    title: 'Sonic',
    category: 'Web Design',
    year: '2023',
    client: 'Sonic Sound Studios',
    role: 'Full-Stack Design & CMS Build',
    duration: '2 Weeks',
    mainImage: '/images/work-sonic.jpg',
    excerpt: 'Dynamic portfolio and audio licensing portal for an award-winning sound design studio.',
    overview: 'Sonic specializes in cinematic sound design and custom audio branding for Hollywood trailers and premier video game studios.',
    challenge: 'Integrating instant lossless audio streaming seamlessly with ultra-smooth page transitions.',
    solution: 'Crafted a dark, tactile interface with custom wave-form animations, integrated audio player, and rapid CMS filtering.',
    result: 'Seamless audio playback experience with over 50,000 monthly track previews from creative directors.',
    gallery: ['/images/work-sonic.jpg', '/images/work-solar.jpg'],
  },
  {
    _id: 'proj-4',
    slug: 'solar',
    title: 'Solar',
    category: 'Web Design',
    year: '2023',
    client: 'Solar Energy Innovations',
    role: 'UI/UX & Framer Implementation',
    duration: '3 Weeks',
    mainImage: '/images/work-solar.jpg',
    excerpt: 'Sustainable green technology portal highlighting clean energy solutions for smart cities.',
    overview: 'Solar develops next-gen photovoltaic solar arrays designed to integrate organically into modern architectural facades.',
    challenge: 'Conveying scientific sustainability impact while inspiring municipal city planners with aesthetic architectural renders.',
    solution: 'Developed an interactive sustainability impact calculator alongside high-resolution interactive case study slides.',
    result: 'Awarded Sustainable Design Spotlight and featured in leading architectural technology publications.',
    gallery: ['/images/work-solar.jpg', '/images/work-space.jpg'],
  },
];

export const FALLBACK_POSTS = [
  {
    _id: 'post-1',
    slug: 'how-to-build-a-stunning-website-with-framer',
    title: 'How to Build a Stunning Website with Framer',
    publishedAt: 'Jul 29, 2024',
    category: 'Branding',
    mainImage: '/images/blog-1.webp',
    excerpt: 'Discover the principles and advanced techniques for creating high-converting, visually breathtaking websites in record time.',
    readTime: '6 min read',
    content: `
      <h2>The Shift to No-Code Precision</h2>
      <p>Modern web design has entered a new era. The days of endless back-and-forth between static Figma files and front-end development handoffs are rapidly being replaced by direct canvas-to-production workflows.</p>
      
      <p>With modern visual tools like Framer, designers gain direct control over responsive breakpoints, production-level layout physics, and fine-tuned micro-interactions without writing hundreds of lines of boilerplate code.</p>

      <h2>1. Establish a Strong Typographic Hierarchy</h2>
      <p>Typography is 90% of web design. By combining a clean, grotesque sans-serif for functional UI and contrasting it with an expressive serif italic for editorial emphasis, you instantly give your site a bespoke, high-fashion identity.</p>

      <h2>2. Master Negative Space and Pacing</h2>
      <p>Give your elements room to breathe. Cluttered layouts fatigue users. Generous margins and deliberate whitespace guide the reader's eye naturally toward primary calls to action.</p>

      <h2>3. Purposeful Micro-Interactions</h2>
      <p>Animations should never be gratuitous. Use subtle hover lifts, smooth spring transitions, and gentle fade-ins on scroll to give the interface tactile responsiveness.</p>
    `,
  },
  {
    _id: 'post-2',
    slug: '10-website-elements-for-maximum-user-engagement',
    title: '10 website elements for maximum user engagement',
    publishedAt: 'Jul 25, 2024',
    category: 'Web Design',
    mainImage: '/images/blog-2.webp',
    excerpt: 'From intuitive navigation to micro-interactions, learn the key UI/UX elements that keep visitors immersed and excited.',
    readTime: '5 min read',
    content: `
      <h2>Designing for High Retention</h2>
      <p>Engaging a user within the first three seconds is paramount. Here are the core structural elements that dramatically increase time-on-site and visitor conversion.</p>

      <h2>1. Floating Pill Navigation</h2>
      <p>Compact, blur-backed navigation bars stay accessible without obstructing valuable viewport screen real estate.</p>

      <h2>2. Interactive Process Timelines</h2>
      <p>Instead of walls of text, displaying your methodology in numbered vertical milestones gives prospects clear expectations and builds immediate trust.</p>

      <h2>3. Authentic Client Testimonials with Real Faces</h2>
      <p>Social proof backed by genuine customer photos, company logos, and specific metrics bridges the credibility gap.</p>
    `,
  },
  {
    _id: 'post-3',
    slug: 'the-importance-of-content-in-driving-website-traffic',
    title: 'The importance of content in driving website traffic',
    publishedAt: 'Jul 13, 2024',
    category: 'Branding',
    mainImage: '/images/blog-3.webp',
    excerpt: 'Quality content is king. Learn how to create valuable, SEO-optimized copy that resonates with your ideal audience.',
    readTime: '7 min read',
    content: `
      <h2>Copywriting as Design Architecture</h2>
      <p>No matter how breathtaking your animations or color palettes are, users ultimately visit your website for answers. Copywriting is the intellectual backbone of web design.</p>

      <p>To rank consistently on search engines while captivating discerning human readers, your articles must provide actionable, deeply researched insights rather than generic filler copy.</p>
    `,
  },
  {
    _id: 'post-4',
    slug: '10-common-web-development-mistakes-to-avoid',
    title: '10 common web development mistakes to avoid',
    publishedAt: 'Jul 1, 2024',
    category: 'Web Design',
    mainImage: '/images/blog-4.webp',
    excerpt: 'Avoid these critical traps in responsive design, asset loading, and typography to deliver a truly flawless user experience.',
    readTime: '4 min read',
    content: `
      <h2>The Performance Traps</h2>
      <p>Slow page loads, cumulative layout shifts, and missing asset fallbacks can decimate user retention before your first frame even renders.</p>

      <p>Always bundle fonts locally, serve modern WebP/AVIF formats with exact aspect ratios, and ensure every dynamic 3D or canvas element features an instant static placeholder.</p>
    `,
  },
  {
    _id: 'post-5',
    slug: 'why-responsive-web-design-is-critical-for-your-business',
    title: 'Why responsive web design is critical for your business',
    publishedAt: 'Jun 11, 2024',
    category: 'Branding',
    mainImage: '/images/blog-5.webp',
    excerpt: 'Over 60% of all web traffic comes from mobile devices. Here is how adaptive design boosts conversions and user trust.',
    readTime: '5 min read',
    content: `
      <h2>Mobile-First is No Longer Optional</h2>
      <p>A desktop site squeezed onto a phone screen is an instant conversion killer. True responsive design means re-architecting navigation into thumb-friendly touch targets, restructuring complex grids, and optimizing asset weights.</p>
    `,
  },
  {
    _id: 'post-6',
    slug: 'how-to-write-content-that-ranks-on-google',
    title: 'How to write content that ranks on Google',
    publishedAt: 'Jun 20, 2024',
    category: 'Content & SEO',
    mainImage: '/images/blog-6.webp',
    excerpt: 'A comprehensive guide to semantic keyword research, content architecture, and organic search optimization.',
    readTime: '8 min read',
    content: `
      <h2>Semantic SEO Mastery</h2>
      <p>Modern search engines prioritize topical authority and user intent over legacy keyword stuffing. Discover how clean HTML markup, semantic heading structures, and schema.org data propel your articles to page one.</p>
    `,
  },
];

// ----------------- FUNKCJE POBIERAJĄCE (API / FALLBACK) -----------------
export async function getProjects() {
  if (isConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(`*[_type == "project"] | order(_createdAt asc) {
        _id,
        "slug": slug.current,
        title,
        category,
        year,
        client,
        role,
        duration,
        "mainImage": coalesce(mainImage.asset->url, mainImage),
        excerpt,
        overview,
        challenge,
        solution,
        result,
        "gallery": coalesce(gallery[].asset->url, gallery)
      }`);
      if (data && data.length > 0) return data;
    } catch (e) {
      console.warn('Sanity projects fetch failed, using fallback:', e.message);
    }
  }
  return FALLBACK_PROJECTS;
}

export async function getProjectBySlug(slug) {
  if (isConfigured && sanityClient) {
    try {
      const project = await sanityClient.fetch(
        `*[_type == "project" && slug.current == $slug][0] {
          _id,
          "slug": slug.current,
          title,
          category,
          year,
          client,
          role,
          duration,
          "mainImage": coalesce(mainImage.asset->url, mainImage),
          excerpt,
          overview,
          challenge,
          solution,
          result,
          "gallery": coalesce(gallery[].asset->url, gallery)
        }`,
        { slug }
      );
      if (project) return project;
    } catch (e) {
      console.warn(`Sanity project ${slug} fetch failed, using fallback:`, e.message);
    }
  }
  return FALLBACK_PROJECTS.find(p => p.slug === slug) || FALLBACK_PROJECTS[0];
}

export async function getPosts() {
  if (isConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
        _id,
        "slug": slug.current,
        title,
        publishedAt,
        category,
        "mainImage": coalesce(mainImage.asset->url, mainImage),
        excerpt,
        readTime,
        content
      }`);
      if (data && data.length > 0) return data;
    } catch (e) {
      console.warn('Sanity posts fetch failed, using fallback:', e.message);
    }
  }
  return FALLBACK_POSTS;
}

export async function getPostBySlug(slug) {
  if (isConfigured && sanityClient) {
    try {
      const post = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
          _id,
          "slug": slug.current,
          title,
          publishedAt,
          category,
          "mainImage": coalesce(mainImage.asset->url, mainImage),
          excerpt,
          readTime,
          content
        }`,
        { slug }
      );
      if (post) return post;
    } catch (e) {
      console.warn(`Sanity post ${slug} fetch failed, using fallback:`, e.message);
    }
  }
  return FALLBACK_POSTS.find(p => p.slug === slug) || FALLBACK_POSTS[0];
}

