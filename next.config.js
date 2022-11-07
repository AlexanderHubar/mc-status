/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.freelogovectors.net'],
  },
}

module.exports = withPWA(nextConfig)
