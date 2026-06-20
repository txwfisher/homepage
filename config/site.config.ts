export default {
  author: "荼丛",
  description: "Tuco's Homepage",
  subtitle: "慢慢来，比较快。",
  avatar: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMGajXbYx6S9DHM_6BMsZqr7_HNvpcAAv4Naxsua7FVGu1lmV6FpgQBAAMCAANtAAM8BA.jpg", // ✅ 新增
  identities: ["野生程序员", "街头摄影师"],
  bilibili_uid: "473933020",
  startYear: 2023,

  projects: [
    {
      name: "Tuco's Home",
      description: "欢迎来到我的数字自留地 🏠",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMSajXfVsTSvAEpXdPdXuczWwsw3ugAAgQOaxsua7FVb1a15iykr2QBAAMCAAN5AAM8BA.png",
      link: "https://tucong.vip/",
    },
    {
      name: "Tea Bush",
      description: "关于代码、生活与碎碎念的收集地",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMcajXfhjIAASABEM_dXvmzt3cS0OSIAAIJDmsbLmuxVTr-qjE0--HVAQADAgADeQADPAQ.png",
      link: "https://www.tucong.vip/",
    },
    {
      name: "Legado 版本归档",
      description: "让阅读，有更多选择",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMMajXfTQNXbySZbgbp4QTyqs6AHP0AAgEOaxsua7FVDNDKx-wedTQBAAMCAAN5AAM8BA.png",
      link: "https://legado.tucong.vip/",
    },
    {
      name: "Tuco's Monitor",
      description: "基于 Cloudflare Workers + D1 + Durable Objects 的多服务器监控探针系统",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMUajXfWVDxhi10psfAnxU7bc9QozEAAgUOaxsua7FVTSt0-jwxoTYBAAMCAAN5AAM8BA.png",
      link: "https://monitor.tucong.vip/",
    },
    {
      name: "Tea Cloud",
      description: "基于 Cloudflare 的 Serverless 聚合云盘",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMWajXfXB-B_0HpfsLwBaAqcqj5m9MAAgYOaxsua7FVOrFVbJjuaBQBAAMCAAN5AAM8BA.png",
      link: "https://cloud.tucong.vip/",
    },

    {
      name: "Tea IMG",
      description: "跑在 CloudFlare 上的图床新选择",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMaajXfYp1_Xke9ugR5MfWqFsB9Y-cAAggOaxsua7FVDjhtpisgFwIBAAMCAAN5AAM8BA.png",
      link: "https://img.tucong.vip/",
    },
    {
      name: "Tea Proxy",
      description: "轻量、高效的网络加速解决方案",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMYajXfX2-qwtLL08jo0xtt-5pOTmkAAgcOaxsua7FVqFs6OTrqQWgBAAMCAAN5AAM8BA.png",
      link: "https://proxy.tucong.vip/",
    },
    {
      name: "阅读 · 链接净化导入",
      description: "智能净化链接，一键导入阅读 App",
      icon: "https://cloud.tucong.vip/file/AgACAgUAAyEGAATYW9o6AAMWajXfXB-B_0HpfsLwBaAqcqj5m9MAAgYOaxsua7FVOrFVbJjuaBQBAAMCAAN5AAM8BA.png",
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
