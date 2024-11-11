import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: [
    //   "cdn.tuk.dev",
    //   "images.unsplash.com",
    //   "plus.unsplash.com",
    //   "cdn.dribbble.com",
    //   "cdn.pixabay.com",
    //   "i.pravatar.cc",
    //   "via.placeholder.com",
    // ],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.tuk.dev' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.dribbble.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
    ],

  },
};

export default nextConfig;
