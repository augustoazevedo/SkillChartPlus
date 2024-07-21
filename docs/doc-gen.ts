import { ROLES } from "../src/roles/skills";
import skills from "../src/roles/skills";

const profiles = ROLES;
const data = skills;

// Initialize a dictionary to hold the table data
const tableData = {};
profiles.forEach((profile) => (tableData[profile] = []));

// Fill the table data
data.forEach((category) => {
    category.skills.forEach((skill) => {
        profiles.forEach((profile) => {
            if (skill.roles.indexOf(profile) !== -1) {
                tableData[profile].push("x");
            } else {
                tableData[profile].push("");
            }
        });
    });
});

// Print the table in Markdown format
let markdownTable = "# Competencie Descriptions\n\n";
markdownTable += "| Competency | " + profiles.join(" | ") + " |\n";
markdownTable +=
    "|------------|" + "-------------|".repeat(profiles.length) + "\n";

data.forEach((category) => {
    markdownTable +=
        `| **${category.name}** |` + " | ".repeat(profiles.length) + "|\n";
    category.skills.forEach((skill) => {
        const row = [
            `[${skill.name}](#${skill.name
                .toLowerCase()
                .replace(/\s+/g, "-")})`,
            ...profiles.map((profile) =>
                skill.roles.indexOf(profile) !== -1 ? "x" : ""
            ),
        ];
        markdownTable += "| " + row.join(" | ") + " |\n";
    });
});

console.log(markdownTable);

// Documentation for each competency
let markdown = "";

data.forEach((category) => {
    markdown += `## ${category.name}\n\n`;
    category.skills.forEach((skill) => {
        markdown += `### ${skill.name}\n\n`;
        markdown += `**Description:** ${skill.description}\n\n`;
        markdown += `**Levels:**\n`;
        for (let level in skill.levels) {
            markdown += `- **Level ${level}:**\n\n  ${skill.levels[level]
                .split("\n")
                .join("\n  ")}\n`;
        }
        markdown += `\n`;
    });
    markdown += `\n`;
});

console.log(markdown);
