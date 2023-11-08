/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      env: {
        URL: "https://store-api-4je2.onrender.com/store"
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
