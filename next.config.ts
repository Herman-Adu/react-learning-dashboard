import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      },
      {
        hostname: 'ik.imagekit.io',
        protocol: 'https'
      }
    ]
  } /* config options here */
}

export default nextConfig
