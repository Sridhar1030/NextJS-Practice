/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This disables linting errors during `next build`
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      ...(process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME
        ? [{ hostname: process.env.NEXT_PUBLIC_CONTENTSTACK_IMAGE_HOSTNAME }]
        : [
            { hostname: "images.contentstack.io" },
            { hostname: "*-images.contentstack.com" },
          ]),
    ],
  },
};

module.exports = nextConfig; // use CommonJS unless "type": "module" in package.json
