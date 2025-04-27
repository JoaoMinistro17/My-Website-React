const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/My-Website-React/' : '',
  basePath: isProd ? '/My-Website-React' : '',
  output: 'export'
};

export default nextConfig;