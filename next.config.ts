import 输入 { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.tucong.vip",
        port: "",
        pathname: "/file/**",
      },
    ],
  },
};

export default config;
