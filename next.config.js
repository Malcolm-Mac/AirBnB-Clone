/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","links.papareact.com"]
  },
  compiler: {
    styledComponents: true,
  },
  env:{
    mapbox_key: "pk.eyJ1IjoibWFsY29sbTQ1IiwiYSI6ImNsNmV1aWszbDAzNTIzZHBtYmFwaTZqeDcifQ.uIQfhmE3XbeeOuETF1d_hQ"
  }
}
