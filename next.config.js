/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    domains: [
      'localhost',
      'lh3.googleusercontent.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
      'psyhope.s3.ap-northeast-1.amazonaws.com',
      'cdn.discordapp.com',
      'upload.wikipedia.org',
      'cdn-icons-png.flaticon.com',
      'psyhope.s3.ap-northeast-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
