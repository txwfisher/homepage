export default {
  author: "Yuki",
  description: "Yuki's Homepage",
  subtitle: "白驹过隙 忽然而已",
  identities: ["学生", "ACGN爱好者"],
  bilibili_uid: "1919386217",
  startYear: 2024,
  projects: [
    {
      name: "Yuki's Homepage",
      description: "一个由 Nextjs 驱动的个人主页",
      icon: "https://avatars.githubusercontent.com/u/113767212",
      link: "https://github.com/pzjawa/homepage",
    },
  ],
  skills: [
    {
      name: "Git",
      icon: "/skills/Git.svg",
    },
    {
      name: "NextJS",
      icon: "/skills/NextJS.svg",
    },
    {
      name: "Photoshop",
      icon: "/skills/Photoshop.svg",
    },
    {
      name: "Premiere",
      icon: "/skills/Premiere.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/skills/TailwindCSS.svg",
    },
  ],
  socials: [
    {
      name: "Blog",
      icon: "line-md:edit-full-twotone",
      link: "/",
    },
    {
      name: "Email",
      icon: "line-md:email-alt-twotone",
      link: "mailto:pzjawa@qq.com",
    },
    {
      name: "GitHub",
      icon: "line-md:github-twotone",
      link: "https://github.com/pzjawa",
    },
  ],
} as const;
