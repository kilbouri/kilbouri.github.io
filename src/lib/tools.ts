// This is a lot of data so I put it in a file.

interface Tool {
  name: string;
  iconName: string;
  variant?: string;
}

const allTools: Tool[] = [
  { name: "Azure", iconName: "azure" },
  { name: "Google Cloud", iconName: "googlecloud" },
  { name: "C", iconName: "c" },
  { name: "C#", iconName: "csharp" },
  { name: ".NET", iconName: "dot-net" },
  { name: "Java", iconName: "java" },
  { name: "Rust", iconName: "rust", variant: "plain" },
  { name: "TypeScript", iconName: "typescript" },
  { name: "JavaScript", iconName: "javascript" },
  { name: "Python", iconName: "python" },
  { name: "NodeJS", iconName: "nodejs" },
  { name: "Express", iconName: "express" },
  { name: "Discord.JS", iconName: "discordjs" },
  { name: "MongoDB", iconName: "mongodb" },
  { name: "PostgreSQL", iconName: "postgresql" },
  { name: "SQLite", iconName: "sqlite" },
  { name: "Redis", iconName: "redis" },
  { name: "GraphQL", iconName: "graphql", variant: "plain" },
  { name: "HTML5", iconName: "html5" },
  { name: "CSS3", iconName: "css3" },
  { name: "SASS", iconName: "sass" },
  { name: "LESS", iconName: "less", variant: "plain-wordmark" },
  { name: "React", iconName: "react" },
  { name: "Svelte", iconName: "svelte" },
  { name: "Bootstrap", iconName: "bootstrap" },
  { name: "TailwindCSS", iconName: "tailwindcss", variant: "plain" },
  { name: "Terraform", iconName: "terraform" },
  { name: "Git", iconName: "git" },
  { name: "GitHub", iconName: "github" },
  { name: "Linux", iconName: "linux" },
  { name: "VS Code", iconName: "vscode" },
  { name: "Docker", iconName: "docker" },
  { name: "Podman", iconName: "podman" },
  { name: "Figma", iconName: "figma" },
  { name: "NPM", iconName: "npm", variant: "original-wordmark" },
  { name: "Yarn", iconName: "yarn" },
  // { name: "Make", customUrl: "./static/gnu-logo.png" },
];

export { allTools };
