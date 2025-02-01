
import { IconCloud } from "./ui/icon-cloud";
const slugs1 = [
    // Programming Languages
    "javascript",
    "typescript",
    "python",
    "cplusplus",
    "java",
    "bash",
    "sql",
  
    // Web Development
    "react",
    "nextdotjs",
    "node-dot-js",
    "express",
    "html5",
    "css3",
    "tailwindcss",
    "material-ui",
  
    // DevOps and CI/CD
    "docker",
    "kubernetes",
    "terraform",
    "githubactions",
    "jenkins",
    "circleci",
    "argo",
    "prometheus",
    "grafana",
  
    // Databases
    "mongodb",
    "postgresql",
    "redis",
    "mysql",
  
    // Cloud Platforms and Services
    "amazonaws",
    "googlecloud",
    "firebase",
  
    // Tools and IDEs
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "jira",
    "nginx",
    "vercel",
    "prisma",
    "rabbitmq",
    "apachekafka",
    "sonarqube",
    "arduino",
    "helm",
    "drizzle",
    "turborepo",
    "shadcn",
    "shell",
  ];

const slugs2 = [
  // Programming Languages
  "javascript",
  "typescript",
  "python",

  // Web Development
  "react",
  "nextdotjs",
  "node-dot-js",

  // DevOps and CI/CD
  "docker",
  "kubernetes",
  "githubactions",

  // Databases
  "postgresql",
  "mongodb",

  // Tools and Platforms
  "git",
  "github",
  "visualstudiocode",
];

  
const slugs = [
  "typescript",
  "javascript",
  "nextdotjs",
  "java",
  "react",
  "docker",
  "kubernetes",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "githubactions",
  "cypress",
  "docker",
  "git",
  "shell",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "tailwindcss",
  "figma",
];

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "./ui/terminal";
import React from 'react'
import Image from "next/image";
const About = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-8 ">
            <div className="">
        <Image
                        src="/me.jpg"
                        alt="Developer Illustration"
                        width={400}
                        height={400}
                        className="object-cover rounded-xl"
                      />
                      </div>
                      <IconCloudDemo/>
                      <TerminalDemo/>
        
        
         </div>
    </div>
  )
}

export default About
function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; booting up profile...</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Identity Verified: Siddhant Bali</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Specialization: DevOps | Cloud | Security</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Backend: Node.js | FastAPI | PostgreSQL</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Queues: Redis | Kafka | RabbitMQ</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Frontend: Next.js | React.js | Tailwind</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6500} className="text-green-500">
          <span>✔ UI: ShadCN | Material UI | Figma</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7500} className="text-green-500">
          <span>✔ DevOps: Kubernetes | Docker | Terraform</span>
        </AnimatedSpan>

        <AnimatedSpan delay={8500} className="text-green-500">
          <span>✔ Cloud: Google Cloud | CI/CD Pipelines</span>
        </AnimatedSpan>

        <AnimatedSpan delay={9500} className="text-green-500">
          <span>✔ Programming: C++ | Python | TypeScript</span>
        </AnimatedSpan>

        <AnimatedSpan delay={10500} className="text-green-500">
          <span>✔ Scripting: Bash | SQL | Java</span>
        </AnimatedSpan>

        <AnimatedSpan delay={11500} className="text-green-500">
          <span>✔ Research: HCI | Distributed Systems</span>
        </AnimatedSpan>

        <AnimatedSpan delay={12500} className="text-blue-500">
          <span>ℹ System Log:</span>
          <span className="pl-2">Associations: IIITD | HCD | CB | AIIMS</span>
        </AnimatedSpan>

        <TypingAnimation delay={13500} className="text-muted-foreground">
          Success! Profile loaded.
        </TypingAnimation>
      </Terminal>
    );
}



function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full max-w-sm items-center justify-center overflow-hidden rounded-lg">
      <IconCloud images={images} />
    </div>
  );
}
