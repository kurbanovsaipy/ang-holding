import Api from './src/utils/Api.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [Api.domain],
    },
};


export default nextConfig;

