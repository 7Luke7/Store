/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.dummyjson.com",
                pathname: `/data/products/**/thumbnail.**`
            },
        ]
    }
}

module.exports = nextConfig
