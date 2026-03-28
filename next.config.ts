import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/formations",
        permanent: true,
      },
      {
        source: "/admissions",
        destination: "/inscription",
        permanent: true,
      },
      {
        source: "/cours-machine-learning",
        destination: "/courses/cours-machine-learning-alger",
        permanent: true,
      },
      {
        source: "/formation-reseau",
        destination: "/courses/formation-reseau-alger",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
