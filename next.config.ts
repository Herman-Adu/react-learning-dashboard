import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
        port: '3000'
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      },
      {
        hostname: 'ik.imagekit.io',
        protocol: 'https'
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: ''
      }
    ]
  } /* config options here */
}

export default nextConfig
