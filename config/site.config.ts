export default {
  author: "荼丛",
  description: "Tuco's Homepage",
  subtitle: "慢慢来，比较快。",
  identities: ["野生程序员", "街头摄影师"],
  bilibili_uid: "473933020", // 若需更换可告知
  startYear: 2024,
  projects: [
    {
      name: "Tuco's Home",
      description: "个人主页",
      icon: "/public/file/tx.png",
      link: "https://tucong.vip/", // 建议补充实际链接
    },
    {
      name: "Tea Bush",
      description: "我的博客",
      icon: "/public/file/tx.png",
      link: "https://www.tucong.vip/", // 补充自你提供的博客入口
    },
    {
      name: "Legado 版本归档",
      description: "让阅读，有更多选择",
      icon: "/public/file/Legado.png",
      link: "https://legado.tucong.vip/", // 补充自你提供的归档站
    },
    {
      name: "Tea IMG",
      description: "基于 CloudFlare 的文件托管服务",
      icon: "/public/file/img.png",
      link: "https://img.tucong.vip/", // 补充自你提供的图床
    },
    {
      name: "Tea Proxy",
      description: "一个简单的代理加速服务",
      icon: "/public/file/proxy.png",
      link: "https://proxy.tucong.vip/", // 补充自你提供的代理站
    },
    {
      name: "阅读 · 链接净化导入",
      description: "在线链接净化与导入工具",
      icon: "/public/file/yjdr.png",
      link: "https://purge.tucong.vip/", // 补充自你提供的净化工具
    },
  ],
  skills: [
    { name: "Git", icon: "/skills/Git.svg" },
    { name: "NextJS", icon: "/skills/NextJS.svg" },
    { name: "Photoshop", icon: "/skills/Photoshop.svg" },
    { name: "Premiere", icon: "/skills/Premiere.svg" },
    { name: "TailwindCSS", icon: "/skills/TailwindCSS.svg" },
  ],
  socials: [
    { name: "Blog", icon: "line-md:edit-full-twotone", link: "https://www.tucong.vip/" },
    { name: "Email", icon: "line-md:email-alt-twotone", link: "mailto:txwfisher@gmail.com" }, // 若需更换邮箱可告知
    { name: "GitHub", icon: "line-md:github-twotone", link: "https://github.com/txwfisher" },
  ],
} as const;
