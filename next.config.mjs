
// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.rollingstone.com',
          pathname: '/wp-content/**',
        },
        {
            protocol: 'https',
            hostname: 'musicainstantanea.com.br',
            pathname: '/wp-content/**',
          },
          {
            protocol: 'https',
            hostname: 's2-gshow.glbimg.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdns-images.dzcdn.net',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.pitchfork.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 's.glbimg.com',
            pathname: '/**',
          },
      ],
    },
  }
   
  export default nextConfig



