/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/project", // The old URL path
        destination: "/projects", // The new URL path
        permanent: true, // Indicates that this is a permanent redirect
      },
      {
        source: "/skill",
        destination: "/skills",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
