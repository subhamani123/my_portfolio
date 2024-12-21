import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    { name: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", bgColor: "bg-white" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  ];

  const lang = {
    line1: 'Programming Languages: C, Java',
    line2: 'Web Development: HTML, CSS, JavaScript, React.js, Node.js, Express.js',
    line3: 'Databases: SQL, MySQL, MongoDB',
    line4: 'Tools: Visual Studio Code, Git, GitHub, Power BI',
  };

  return (
    <section id="skills" className="flex flex-col py-20 bg-primary text-white">
      <div className="text-center">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[120px] mx-auto font-bold">Skills</h1>
        <p className="pb-5">Here are some of the technologies I've worked with:</p>
      </div>
      {/* Flexbox container for alignment */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-10">
        {/* Right side: Lang content (above on mobile) */}
        <div className="w-full md:w-1/2 text-left md:pr-10 mb-10 md:mb-0">
          <p className="pb-5">{lang.line1}</p>
          <p className="pb-5">{lang.line2}</p>
          <p className="pb-5">{lang.line3}</p>
          <p className="pb-5">{lang.line4}</p>
        </div>
        {/* Left side: Skills logos (below on mobile) */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Wrap the image in a div with background color */}
              <div className={`p-2 ${skill.bgColor || ""} rounded-full`}>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-10 w-10 object-contain mb-2" // Adjusted size for better fit
                />
              </div>
              <p className="text-sm font-semibold">{skill.name}</p> {/* Reduced font size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
