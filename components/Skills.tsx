import siteConfig from "@/config/site.config";
import Image from "next/image";

const Skills = () => {
  const skills = siteConfig.skills;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* 技能网格 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            {/* 技能图标容器 */}
            <div className="relative flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 dark:bg-gray-700/50">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              {/* 技能名称 */}
              <h3 className="text-center text-sm font-semibold text-gray-800 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
