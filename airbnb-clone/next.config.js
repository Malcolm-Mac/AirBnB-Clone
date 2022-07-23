/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","links.papareact.com"]
  },
  compiler: {
    styledComponents: true,
  },
}
