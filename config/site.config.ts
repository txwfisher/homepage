export default {
  author: "荼丛",
  description: "Tuco's Homepage",
  subtitle: "慢慢来，比较快。",
  identities: ["野生程序员", "街头摄影师"],
  bilibili_uid: "473933020",
  startYear: 2025,
  
  projects: [
    {
      name: "Tuco's Home",
      description: "欢迎来到我的数字自留地 🏠",
      icon: "/images/home.png",
      link: "https://tucong.vip/",
    },
    {
      name: "Tea Bush",
      description: "关于代码、生活与碎碎念的收集地",
      icon: "/images/blog.png",
      link: "https://www.tucong.vip/",
    },
    {
      name: "Legado 版本归档",
      description: "让阅读，有更多选择",
      icon: "/images/legado.png", // ✅ 已修正：确保这里是 legado.png
      link: "https://legado.tucong.vip/",
    },
    {
      name: "Tea IMG",
      description: "跑在 CloudFlare 上的图床新选择",
      icon: "/images/img.png", // 确保你的仓库里上传的是 himg.png
      link: "https://img.tucong.vip/",
    },
    {
      name: "Tea Proxy",
      description: "轻量、高效的网络加速解决方案",
      icon: "/images/proxy.png",
      link: "https://proxy.tucong.vip/",
    },
    {
      name: "阅读 · 链接净化导入",
      description: "智能净化链接，一键导入阅读 App",
      icon: "/images/yjdr.png",
      link: "https://purge.tucong.vip/",
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
    { name: "Email", icon: "line-md:email-alt-twotone", link: "mailto:txwfisher@gmail.com" },
    { name: "GitHub", icon: "line-md:github-twotone", link: "https://github.com/txwfisher" },
  ],
} as const;
