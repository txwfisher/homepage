export default {
  author: "荼丛",
  description: "Tuco's Homepage",
  subtitle: "慢慢来，比较快。",
  avatar: "https://img.tucong.vip/file/1779718704829_avatar.avif", // ✅ 新增
  identities: ["野生程序员", "街头摄影师"],
  bilibili_uid: "473933020",
  startYear: 2025,

  projects: [
    {
      name: "Tuco's Home",
      description: "欢迎来到我的数字自留地 🏠",
      icon: "https://img.tucong.vip/file/1779696815365_home.png",
      link: "https://tucong.vip/",
    },
    {
      name: "Tea Bush",
      description: "关于代码、生活与碎碎念的收集地",
      icon: "https://img.tucong.vip/file/1779696815121_blog.png",
      link: "https://www.tucong.vip/",
    },
    {
      name: "Legado 版本归档",
      description: "让阅读，有更多选择",
      icon: "https://img.tucong.vip/file/1779696817342_legado.png",
      link: "https://legado.tucong.vip/",
    },
    {
      name: "Tea IMG",
      description: "跑在 CloudFlare 上的图床新选择",
      icon: "https://img.tucong.vip/file/1779696812798_img.png",
      link: "https://img.tucong.vip/",
    },
    {
      name: "Tea Proxy",
      description: "轻量、高效的网络加速解决方案",
      icon: "https://img.tucong.vip/file/1779696818870_proxy.png",
      link: "https://proxy.tucong.vip/",
    },
    {
      name: "阅读 · 链接净化导入",
      description: "智能净化链接，一键导入阅读 App",
      icon: "https://img.tucong.vip/file/1779696816140_yjdr.png",
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
