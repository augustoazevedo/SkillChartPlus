export const PRODUCT_MANAGER = "Product Manager";
export const SOFTWARE_ENGINEER = "Software Engineer";
export const UX_DESIGNER = "UX Designer";
export const ENGINEERING_MANAGER = "Engineering Manager";
export const DATA_ENGINEER = "Data Engineer";
export const DATA_SCIENTIST = "Data Scientist";
export const DATA_ANALYST = "Data Analyst";

export const ROLES = [
    PRODUCT_MANAGER,
    SOFTWARE_ENGINEER,
    UX_DESIGNER,
    ENGINEERING_MANAGER,
    DATA_ENGINEER,
    DATA_SCIENTIST,
    DATA_ANALYST,
];

export default [
    {
        name: "Domain knowledge",
        color: "#9747FF",
        skills: [
            {
                name: "Industry",
                description:
                    "Understanding of the workings and trends of a specific industry",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Industry L1\n\nYou have a basic understanding of the industry landscape, including current trends and challenges.\n\nYou are familiar with the industry's major players and their offerings, and you actively work to expand your knowledge of the industry.\n\n",
                    "2": "Industry L2\n\nYou possess comprehensive knowledge of the industry, including emerging trends, opportunities, and potential threats. You can analyze market shifts and anticipate future developments.\n\nYou effectively apply industry knowledge to product development and strategy.\n\n",
                    "3": "Industry L3\n\nYou have an expert-level understanding of the industry, with a proven track record of leveraging this knowledge to drive product success.\n\nYou are recognized as an industry thought leader and can influence market trends and developments.\n\nYou guide product strategy based on deep industry insights.\n\n",
                },
            },
            {
                name: "Competitors",
                description:
                    "Knowledge of the strengths, weaknesses, and strategies of competing businesses in the same industry",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Competitors L1\n\nYou are aware of key competitors and their products. You understand basic competitive analysis techniques and assist in gathering competitive intelligence.\n\nYou recognize potential opportunities for product differentiation.\n\n",
                    "2": "Competitors L2\n\nYou conduct in-depth competitive analysis and identify strengths and weaknesses of competing products.\n\nYou develop strategies to create a unique value proposition for the product.\n\n",
                    "3": "Competitors L3\n\nYou are an expert in understanding the competitive landscape and anticipating competitor moves.\n\nYou drive product strategy and positioning based on deep competitive insights. You ensure the product maintains a competitive edge in the market.\n\n",
                },
            },
            {
                name: "Regulations",
                description:
                    "Familiarity with the laws, rules, and regulations that govern a specific industry.",
                roles: [PRODUCT_MANAGER],
                levels: {
                    "1": "Regulations L1\n\nYou have a limited understanding of relevant laws, regulations, and compliance requirements.\n\nYou actively work to expand your knowledge and ensure the product is developed with compliance in mind.\n\n",
                    "2": "Regulations L2\n\nYou possess comprehensive knowledge of the regulatory landscape, including current and upcoming regulations.\n\nYou ensure that the product complies with all necessary requirements and identify potential risks.\n\n",
                    "3": "Regulations L3\n\nYou are an expert in navigating the complex regulatory environment and anticipating changes in the regulatory landscape.\n\nYou guide the product team in developing compliant solutions and mitigating risks associated with regulatory non-compliance.\n\n",
                },
            },
        ],
    },
    {
        name: "Process",
        color: "#0D99FF",
        skills: [
            {
                name: "Planning & execution",
                description:
                    "Planning and executing tasks and initiatives while monitoring progress and adjusting as needed",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Planning & execution L1\n\nYou need help in structuring work, struggle to meet deadlines and focus on tasks.\n\nYou do not adequately follow up on and close tasks.\n\n",
                    "2": "Planning & execution L2\n\nYou can structure your work and execute it in a timely manner, follow up and close tasks.\n\nYou generally ensure tasks are completed and rarely miss important details.\n\nYou maintain clear focus on your work.\n\n",
                    "3": "Planning & execution L3\n\nYou structure, define, and scope your own work as well as the team's work in a way that leads to effectively meeting deadlines.\n\nYou consistently follow up and improve based on the follow-up.\n\nYou effectively delegate tasks, set up processes, and monitor progress on your tasks as well as delegated tasks. You avoid unnecessary crunches.\n\n",
                },
            },
            {
                name: "Roadmap planning",
                description:
                    "Developing a long-term plan for achieving business goals and objectives",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    ENGINEERING_MANAGER,
                ],
                levels: { "1": "", "2": "", "3": "" },
            },
            {
                name: "Backlog management",
                description:
                    "Managing a backlog of tasks, prioritizing them based on  needs",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Backlog management L1\n\nYou actively collaborate with team members to gather requirements and create user stories, ensuring they are clearly defined and aligned with goals.\n\nYou are open to feedback and strive to improve your skills in managing and refining the product backlog.\n\n",
                    "2": "Backlog management L2\n\nYou break down large tasks into smaller, manageable tasks, ensuring that the backlog is well-organized and easily understood by team members. You effectively prioritize and communicate the rationale behind prioritization decisions. You consistently measure and track progress, and continuously improve backlog management processes and overall team performance.\n\n",
                    "3": "Backlog management L3\n\nYou possess a deep mastery of backlog management.\n\nYou consistently analyze market trends, customer feedback, and business objectives to prioritize backlog items effectively. Your leadership in backlog refinement and cross-functional collaboration ensures that the development team remains focused and aligned, resulting in high-quality product releases.\n\n",
                },
            },
            {
                name: "Launch strategy",
                description:
                    "Planinng and execution of successful product or service launches",
                roles: [PRODUCT_MANAGER],
                levels: { "1": "", "2": "", "3": "" },
            },
        ],
    },
    {
        name: "Agile Methodologies",
        color: "#32CD32",
        skills: [
            {
                name: "Scrum",
                description:
                    "Integrating practices into the Scrum agile process",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Scrum L1\n\nYou have a basic understanding of the Scrum framework and its ceremonies. You can participate in Scrum meetings and contribute to the backlog with guidance.\n\n",
                    "2": "Scrum L2\n\nYou actively participate in Scrum ceremonies, providing valuable insights to the backlog and sprints. You can work effectively within a Scrum team and adapt processes to fit the Scrum framework.\n\n",
                    "3": "Scrum L3\n\nYou are an expert in Scrum, capable of acting as a Product Owner or Scrum Master. You integrate practices seamlessly into the Scrum process and ensure that team needs are prioritized and met throughout the development cycle.\n\n",
                },
            },
            {
                name: "Kanban",
                description:
                    "Using Kanban to manage work and optimize workflows",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Kanban L1\n\nYou have a basic understanding of Kanban principles. You can visualize your work on a Kanban board and understand the basic flow of tasks.\n\n",
                    "2": "Kanban L2\n\nYou can implement and manage a Kanban board effectively. You understand how to prioritize tasks, manage workflow, and identify bottlenecks in the process.\n\n",
                    "3": "Kanban L3\n\nYou are an expert in Kanban, optimizing workflows and promoting continuous improvement. You use Kanban to manage complex projects and ensure efficient and smooth task completion.\n\n",
                },
            },
            {
                name: "Lean Development",
                description:
                    "Applying Lean principles to optimize software development processes",
                roles: [SOFTWARE_ENGINEER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Lean Development L1\n\nYou have a basic understanding of Lean principles and practices. You can participate in Lean activities such as identifying waste and implementing small improvements.\n\n",
                    "2": "Lean Development L2\n\nYou actively apply Lean principles, focusing on eliminating waste and improving efficiency in the development process. You collaborate with cross-functional teams to implement Lean practices.\n\n",
                    "3": "Lean Development L3\n\nYou are an expert in Lean development, leading the adoption of Lean principles across the organization. You drive continuous improvement initiatives and ensure that Lean practices are integrated into the development lifecycle.\n\n",
                },
            },
            {
                name: "Lean UX",
                description:
                    "Applying Lean UX principles to iterate quickly and efficiently",
                roles: [UX_DESIGNER],
                levels: {
                    "1": "Lean UX L1\n\nYou have a basic understanding of Lean UX principles and practices. You can participate in Lean UX activities such as rapid prototyping and user testing.\n\n",
                    "2": "Lean UX L2\n\nYou actively apply Lean UX principles, iterating quickly based on user feedback and data. You collaborate with cross-functional teams to integrate Lean UX into the product development process.\n\n",
                    "3": "Lean UX L3\n\nYou are an expert in Lean UX, leading the adoption of its principles across the organization. You drive rapid iteration cycles and ensure that user feedback is continuously incorporated into the product.\n\n",
                },
            },
        ],
    },
    {
        name: "Data/Analytics",
        color: "#FFA629",
        skills: [
            {
                name: "Problem solving",
                description:
                    "Identifing, analyzing, and solving problems effectively",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Problem solving L1\n\nYou may be lacking analytical rigour in your reasoning and may have difficulty solving problems independently.\n\nYou may require a lot of guidance in problem-solving.\n\n",
                    "2": "Problem solving L2\n\nYou follow sound logic and have a good understanding of the problem-solving process.\n\nYou can work independently with the steps involved, including framing and breaking down ambiguous problems and collecting relevant information to make decisions.\n\n",
                    "3": "Problem solving L3\n\nYou are able to use logic, insights, and prior knowledge to effectively define and structure problems.\n\nYou can synthesize findings from analyses and develop impactful recommendations.\n\nYou also have the ability to coach team members in problem-solving fundamentals.\n\n",
                },
            },
            {
                name: "Data Analysis",
                description:
                    " Collecting and analyzing data to gain insights and make informed decisions",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Data Analysis L1\n\nYou have a limited understanding of data analysis and how to use data to inform product decisions. You require guidance on how to analyze data and communicate insights to stakeholders.\n\n",
                    "2": "Data Analysis L2\n\nYou can use data to inform product decisions and can effectively analyze data to identify trends and patterns. You are building your skills in communicating data insights to stakeholders.\n\n",
                    "3": "Data Analysis L3\n\nYou can use data to drive product decisions and can effectively analyze complex data sets.\n\nYou can communicate data insights to stakeholders in a clear and actionable manner.\n\n",
                },
            },
            {
                name: "Metrics identification",
                description:
                    "Identifying relevant metrics that measure progress towards business goals",
                roles: [PRODUCT_MANAGER, UX_DESIGNER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Metrics identification L1\n\nSometimes, you may struggle to define metrics for given product and need guidance.\n\nYou may require specific direction on how to choose metrics that align with product goals\n\n",
                    "2": "Metrics identification L2\n\nYou have a good understanding of metrics identification and can select relevant metrics that align with product objectives.\n\n",
                    "3": "Metrics identification L3\n\nYou have a deep understanding of the product's user journey and identify key touchpoints where metrics can be used to measure success and drive improvement.\n\nYou are able to create or select the most appropriate metrics framework based on the product's stage of development, and business objectives.\n\n",
                },
            },
            {
                name: "Metrics prioritization",
                description:
                    "Prioritizing metrics based on their importance and impact on business objectives",
                roles: [PRODUCT_MANAGER],
                levels: {
                    "1": "Metrics prioritization L1\n\nSometimes, you may struggle with prioritization and need guidance.\n\nYou may focus on the irrelevant metrics first\n\n",
                    "2": "Metrics prioritization L2\n\nYou prioritize and focus on the most relevant metrics to drive product success.\n\nYou structure your metrics properly and prioritize them between primary and secondary metrics.\n\nYou have the ability to clearly discuss the pros and cons of various metrics, and make a solid argument for the choices that you made.\n\n",
                    "3": "Metrics prioritization L3\n\nYou are an expert in metrics prioritization, adeptly identifying and prioritizing primary, secondary, and guardrail metrics that drive the product's success.\n\nYou possess a deep understanding of the product's market, competitive landscape, and customer needs, allowing you to effectively align metrics to the product strategy.\n\n",
                },
            },
            {
                name: "Data Engineering",
                description:
                    "Designing, building, and maintaining scalable data pipelines and architectures",
                roles: [DATA_ENGINEER],
                levels: {
                    "1": "Data Engineering L1\n\nYou have basic knowledge of ETL (Extract, Transform, Load) processes and data manipulation. You can build simple data pipelines with guidance.\n\n",
                    "2": "Data Engineering L2\n\nYou design and maintain scalable data pipelines and architectures. You optimize data workflows and ensure data quality and integrity.\n\n",
                    "3": "Data Engineering L3\n\nYou are an expert in data engineering, capable of building and maintaining complex data pipelines and architectures. You lead data engineering projects and mentor other data engineers.\n\n",
                },
            },
            {
                name: "Data Analysis",
                description: "Analyzing data to extract actionable insights",
                roles: [DATA_ANALYST, DATA_SCIENTIST],
                levels: {
                    "1": "Data Analysis L1\n\nYou can perform basic descriptive analysis and generate insights from data. You are familiar with basic data analysis tools and techniques.\n\n",
                    "2": "Data Analysis L2\n\nYou conduct exploratory and inferential analysis, including hypothesis testing and regression. You can derive actionable insights from complex datasets.\n\n",
                    "3": "Data Analysis L3\n\nYou are an expert in data analysis, capable of performing advanced analyses and providing strategic recommendations. You mentor others in data analysis techniques and tools.\n\n",
                },
            },
            {
                name: "Data Visualization",
                description:
                    "Creating effective visual representations of data",
                roles: [DATA_ANALYST, DATA_SCIENTIST],
                levels: {
                    "1": "Data Visualization L1\n\nYou have basic knowledge of data visualization tools like Excel, Tableau, or Power BI. You can create simple charts and graphs.\n\n",
                    "2": "Data Visualization L2\n\nYou create interactive and effective visualizations to communicate insights. You apply design principles to ensure clarity and impact.\n\n",
                    "3": "Data Visualization L3\n\nYou are an expert in data visualization, capable of designing advanced dashboards and visual reports. You lead data visualization projects and mentor others in best practices.\n\n",
                },
            },
            {
                name: "Data Science",
                description:
                    "Applying statistical and machine learning techniques to solve business problems",
                roles: [DATA_SCIENTIST],
                levels: {
                    "1": "Data Science L1\n\nYou have basic knowledge of data science techniques, including machine learning and basic statistics. You can build simple models with guidance.\n\n",
                    "2": "Data Science L2\n\nYou apply machine learning techniques to solve business problems, analyze large datasets, and build predictive models. You can evaluate model performance and iterate on improvements.\n\n",
                    "3": "Data Science L3\n\nYou are an expert in data science, capable of developing and implementing advanced machine learning models. You lead data science projects and provide strategic insights based on data analysis.\n\n",
                },
            },
            {
                name: "Big Data Technologies",
                description:
                    "Working with large-scale data processing frameworks and tools",
                roles: [DATA_ENGINEER, DATA_SCIENTIST],
                levels: {
                    "1": "Big Data Technologies L1\n\nYou have basic knowledge of big data technologies such as Hadoop and Spark. You can run simple data processing tasks on these platforms.\n\n",
                    "2": "Big Data Technologies L2\n\nYou design and implement data processing workflows using big data technologies. You optimize performance and manage large-scale data processing jobs.\n\n",
                    "3": "Big Data Technologies L3\n\nYou are an expert in big data technologies, capable of architecting complex data processing solutions. You lead big data projects and ensure efficient data handling at scale.\n\n",
                },
            },
            {
                name: "Database Management",
                description:
                    "Designing and managing databases for efficient data storage and retrieval",
                roles: [DATA_ENGINEER, DATA_ANALYST, DATA_SCIENTIST],
                levels: {
                    "1": "Database Management L1\n\nYou have basic knowledge of database management systems (DBMS) and can write simple queries. You understand basic database concepts and structures.\n\n",
                    "2": "Database Management L2\n\nYou design and manage database schemas, optimize queries, and ensure data integrity. You can handle database administration tasks and performance tuning.\n\n",
                    "3": "Database Management L3\n\nYou are an expert in database management, capable of architecting complex database solutions. You lead database design and optimization projects and ensure best practices are followed.\n\n",
                },
            },
            {
                name: "Data Governance",
                description:
                    "Implementing data governance practices to ensure data quality and compliance",
                roles: [DATA_ENGINEER, DATA_SCIENTIST, DATA_ANALYST],
                levels: {
                    "1": "Data Governance L1\n\nYou have basic knowledge of data governance principles and practices. You understand the importance of data quality and compliance.\n\n",
                    "2": "Data Governance L2\n\nYou implement data governance practices, including data quality monitoring, data lineage, and compliance with data regulations. You ensure data policies are followed.\n\n",
                    "3": "Data Governance L3\n\nYou are an expert in data governance, capable of defining and enforcing comprehensive data governance frameworks. You lead data governance initiatives and ensure organizational compliance with data standards.\n\n",
                },
            },
            {
                name: "Cloud Data Solutions",
                description:
                    "Designing and managing data solutions in the cloud",
                roles: [DATA_ENGINEER, DATA_SCIENTIST],
                levels: {
                    "1": "Cloud Data Solutions L1\n\nYou have basic knowledge of cloud data services such as AWS, Azure, or Google Cloud. You can deploy and manage simple data solutions in the cloud.\n\n",
                    "2": "Cloud Data Solutions L2\n\nYou design and manage cloud-based data solutions, utilizing cloud services for data storage, processing, and analysis. You ensure scalability and reliability of cloud data solutions.\n\n",
                    "3": "Cloud Data Solutions L3\n\nYou are an expert in cloud data solutions, capable of architecting complex cloud-based data systems. You lead cloud migration projects and optimize cloud resource usage for data processing.\n\n",
                },
            },
        ],
    },
    {
        name: "UX/UI",
        color: "#14AE5C",
        skills: [
            {
                name: "Visual (UI)",
                description:
                    "Designing visually appealing and easy to use products",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Visual (UI) L1\n\nYou may have a limited understanding of composition, color theory, and typography. You may struggle to detect inconsistencies in designs and branding assets.\n\nYou are not aware of industry patterns and trends.\n\n",
                    "2": "Visual (UI) L2\n\nYou have a good understanding of composition, color theory, typography, and design principles. You can identify inconsistencies and suggest improvements to your product designs.\n\nYou are up to date on industry patterns and trends and can make informed decisions about design choices.\n\n",
                    "3": "Visual (UI) L3\n\nYou possess a deep understanding of composition, color theory, typography, and design principles, and can use this knowledge to provide guidance and mentorship to junior team members.\n\nYou have a strong sense of the brand and can ensure that all design work is consistent with the brand identity.\n\nAdditionally, you stay up to date on industry trends and can identify opportunities to innovate and improve the visual design of the product.\n\n",
                },
            },
            {
                name: "User Interface Design (UI)",
                description:
                    "Creating effective and intuitive user interfaces that provide a visually pleasing experience",
                roles: [UX_DESIGNER],
                levels: {
                    "1": "User Interface Design (UI) L1\n\nYou have a basic understanding of composition, color theory, and typography. You can create simple UI elements and follow existing design guidelines.\n\n",
                    "2": "User Interface Design (UI) L2\n\nYou have a good understanding of design principles and can create effective and intuitive user interfaces. You can design complex UI components and ensure consistency across different parts of the product.\n\n",
                    "3": "User Interface Design (UI) L3\n\nYou are an expert in UI design, able to set standards and guide other designers. You create innovative and visually appealing interfaces that enhance user satisfaction and engagement.\n\n",
                },
            },
            {
                name: "User experience",
                description:
                    "Designing and creating user-centered digital experiences",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "User experience L1\n\nYou have a basic understanding of user experience design principles and the importance of providing a positive UX. You actively collaborate with UX designers to gather feedback from users and improve the product's usability. You strive to improve your skills in UX design, ensuring that user needs are at the forefront of product development.\n\n",
                    "2": "User experience L2\n\nYou design a smooth UX for your products.\n\nYou structure the content in a way that is intuitive and easy to navigate for users. You evaluate the usability of the product and identify areas for improvement and prioritize them based on their impact on the user experience.\n\n",
                    "3": "User experience L3\n\nYou design an enjoyable UX for your products.\n\nYour deep understanding of user-centric design enables you to drive exceptional user experiences that differentiate the product in the market.\n\n",
                },
            },
            {
                name: "UX practices",
                description: " Implementing best practices and methodologies",
                roles: [PRODUCT_MANAGER, UX_DESIGNER, ENGINEERING_MANAGER],
                levels: {
                    "1": "UX practices L1\n\nYou’re building your knowledge of the discovery process and have a limited understanding of it. You hesitate to bring customers into the process.\n\nYou have a basic understanding of when and how to validate your work through research.\n\n",
                    "2": "UX practices L2\n\nYou use practices and tools to understand customer problems & identify opportunities/needs.\n\nYou can do your own research if necessary.\n\nYou find and validate the solutions to the problems identified.\n\n",
                    "3": "UX practices L3\n\nYou use a wide range of discovery techniques to reach an optimal outcome.\n\nConsistently make good decisions about what to build and how.\n\nContinuously in direct contact with our customers and is deeply invested in their needs.\n\n",
                },
            },
            {
                name: "User research",
                description:
                    "Conducting research to understand user behavior, needs, and preferences",
                roles: [PRODUCT_MANAGER, UX_DESIGNER],
                levels: {
                    "1": "User research L1\n\nYou have little or no expertise in effectively identifying user requirements and often find it difficult to obtain valuable insights from interviews.\n\n",
                    "2": "User research L2\n\nYou are skilled in identifying target customer segments and understanding their unique needs and preferences.\n\nYou design and conduct user research to gather valuable insights.\n\nYou effectively translate customer feedback into actionable product improvements.\n\n",
                    "3": "User research L3\n\nYou are an expert in uncovering customer insights and predicting future customer needs.\n\nYou establish a customer-centric culture within the product team and drive product decisions based on deep customer understanding.\n\nYou develop strategies for maximizing customer satisfaction and long-term success.\n\n",
                },
            },
            {
                name: "Prototyping",
                description:
                    "Creating interactive prototypes to test ideas and user flows",
                roles: [UX_DESIGNER],
                levels: {
                    "1": "Prototyping L1\n\nYou have a basic knowledge of prototyping tools like Figma, Sketch, or Adobe XD. You can create simple wireframes and basic interactive prototypes.\n\n",
                    "2": "Prototyping L2\n\nYou are capable of creating medium-fidelity interactive prototypes to test ideas and user flows. You can iterate on prototypes based on feedback and improve their fidelity.\n\n",
                    "3": "Prototyping L3\n\nYou are an expert in high-fidelity prototyping, capable of creating detailed prototypes that simulate the final user experience. You effectively use prototypes for user testing and stakeholder presentations.\n\n",
                },
            },
            {
                name: "Information Architecture",
                description:
                    "Organizing and labeling content in a clear and logical manner",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                ],
                levels: {
                    "1": "Information Architecture L1\n\nYou have a basic understanding of information architecture principles such as content organization and labeling. You can create simple sitemaps and user flows.\n\n",
                    "2": "Information Architecture L2\n\nYou are capable of creating detailed sitemaps, user flows, and wireframes that reflect clear and logical information architecture. You ensure that content is well-organized and easy to navigate.\n\n",
                    "3": "Information Architecture L3\n\nYou are an expert in information architecture, optimizing content structure and navigation for complex products. You create intuitive and scalable architectures that enhance the overall user experience.\n\n",
                },
            },
            {
                name: "Interaction Design",
                description:
                    "Creating intuitive interactions that enhance the user experience",
                roles: [UX_DESIGNER],
                levels: {
                    "1": "Interaction Design L1\n\nYou have a basic knowledge of interaction design and usability principles. You can create simple interactive elements and follow established interaction patterns.\n\n",
                    "2": "Interaction Design L2\n\nYou can design intuitive interactions that enhance the user experience. You create and test interactive prototypes to refine user flows and interactions.\n\n",
                    "3": "Interaction Design L3\n\nYou are an expert in interaction design, developing complex and innovative interactions. You use advanced techniques to create seamless and engaging user experiences that set your product apart.\n\n",
                },
            },
        ],
    },
    {
        name: "Software Development",
        color: "#FFCD29",
        skills: [
            {
                name: "Technical understanding",
                description:
                    "Understanding and applying technical knowledge and skills",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Technical understanding L1\n\nYou have little knowledge or understanding of software development and code reviews, and are unable to create code independently.\n\n",
                    "2": "Technical understanding L2\n\nYou possess basic software development skills and understand how different parts of the tech stack work together, as well as what needs to happen for the code to function.\n\nYou have a good understanding of data structures, algorithms, and basic knowledge of HTML, CSS, and SQL.\n\n",
                    "3": "Technical understanding L3\n\nYou are knowledgeable and can coach other team members with basic software development skills.\n\nYou have a good understanding of the side effects of coding decisions, and you understand what drives poor performance and can adjust accordingly.\n\n",
                },
            },
            {
                name: "Programming",
                description:
                    "Writing efficient and maintainable code using various programming languages",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Programming L1\n\nYou have basic knowledge of a programming language and can write simple scripts. You are learning best coding practices and using basic tools.\n\n",
                    "2": "Programming L2\n\nYou have a good understanding of multiple programming languages and can write complex programs. You follow best coding practices and contribute to code reviews.\n\n",
                    "3": "Programming L3\n\nYou are an expert in multiple programming languages, with a proven track record of developing high-quality software. You set coding standards and mentor other developers.\n\n",
                },
            },
            {
                name: "Data Structures and Algorithms",
                description:
                    "Applying data structures and algorithms to solve complex problems",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Data Structures and Algorithms L1\n\nYou have basic knowledge of data structures and algorithms. You can implement simple algorithms and understand their use cases.\n\n",
                    "2": "Data Structures and Algorithms L2\n\nYou apply data structures and algorithms effectively to solve complex problems. You can optimize existing algorithms and understand algorithmic complexity.\n\n",
                    "3": "Data Structures and Algorithms L3\n\nYou are an expert in data structures and algorithms, capable of creating new and innovative algorithms. You optimize algorithms for performance and efficiency.\n\n",
                },
            },
            {
                name: "Software Design",
                description:
                    "Designing software solutions that are scalable, maintainable, and efficient",
                roles: [SOFTWARE_ENGINEER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Software Design L1\n\nYou have basic knowledge of software design principles and practices. You can create simple design diagrams and understand design patterns.\n\n",
                    "2": "Software Design L2\n\nYou design efficient and scalable software solutions using established design patterns. You can create detailed design documents and collaborate with others on design decisions.\n\n",
                    "3": "Software Design L3\n\nYou are an expert in software design, capable of architecting complex systems. You define design standards, review designs of others, and mentor junior engineers on best design practices.\n\n",
                },
            },
            {
                name: "Software Architecture",
                description:
                    "Defining and implementing software architecture that supports robust applications",
                roles: [SOFTWARE_ENGINEER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Software Architecture L1\n\nYou have basic knowledge of software architecture principles. You can contribute to architecture discussions and understand architectural diagrams.\n\n",
                    "2": "Software Architecture L2\n\nYou design and implement software architecture that supports scalable and maintainable applications. You evaluate architectural alternatives and make recommendations.\n\n",
                    "3": "Software Architecture L3\n\nYou are an expert in software architecture, capable of defining and implementing architecture for large and complex systems. You lead architecture reviews and guide the team in architectural decisions.\n\n",
                },
            },
            {
                name: "System Architecture",
                description:
                    "Designing and implementing system architecture for distributed and cloud-based systems",
                roles: [SOFTWARE_ENGINEER, ENGINEERING_MANAGER],
                levels: {
                    "1": "System Architecture L1\n\nYou have basic knowledge of system architecture principles, including distributed systems and cloud computing. You can contribute to system architecture discussions.\n\n",
                    "2": "System Architecture L2\n\nYou design and implement system architecture for distributed and cloud-based systems. You integrate various components and services effectively.\n\n",
                    "3": "System Architecture L3\n\nYou are an expert in system architecture, capable of designing highly scalable and resilient systems. You lead system architecture reviews and ensure best practices are followed.\n\n",
                },
            },
            {
                name: "Quality assurance",
                description: ": Ensuring the quality of products or services ",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Quality assurance L1\n\nYou have no knowledge or involvement in the team's quality assurance work.\n\nYou test 'the wrong things,' miss scenarios or use cases, and cannot differentiate between general ideas and feedback from bugs and errors.\n\nYou cannot clearly describe found bugs and show no interest in contributing to quality assurance work.\n\n",
                    "2": "Quality assurance L2\n\nYou have knowledge of and show initiative to participate in the team's quality assurance work.\n\nYou understand what needs to be tested and perform relevant tests.\n\nYou can distinguish between improvements and bugs, and you report found bugs in a compliant manner.\n\n",
                    "3": "Quality assurance L3\n\nYou can test the right things, including corner cases, without being too broad.\n\nYou can precisely fix bugs found during QA to reduce the risk of introducing new issues.\n\nYou have excellent judgment of what needs to be fixed during the QA process and what can be fixed later.\n\nYou can set up the QA process and are good at identifying which changes have increased risk.\n\nYou consistently take the initiative to improve QA work.\n\n",
                },
            },
            {
                name: "DevOps and CI/CD",
                description:
                    "Implementing DevOps practices and continuous integration/continuous deployment pipelines",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "DevOps and CI/CD L1\n\nYou have basic knowledge of DevOps practices and CI/CD tools. You can contribute to the setup of basic CI/CD pipelines.\n\n",
                    "2": "DevOps and CI/CD L2\n\nYou implement and manage CI/CD pipelines effectively. You automate deployment processes and ensure seamless integration between development and operations.\n\n",
                    "3": "DevOps and CI/CD L3\n\nYou are an expert in DevOps practices, capable of leading the implementation of complex CI/CD pipelines. You optimize processes and tools to improve deployment efficiency and reliability.\n\n",
                },
            },
            {
                name: "Security",
                description:
                    "Ensuring the security of software applications and systems",
                roles: [SOFTWARE_ENGINEER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Security L1\n\nYou have basic knowledge of software security principles. You can identify and fix simple security vulnerabilities.\n\n",
                    "2": "Security L2\n\nYou implement security best practices in software development. You conduct security assessments and apply security measures to protect applications and data.\n\n",
                    "3": "Security L3\n\nYou are an expert in software security, capable of defining and enforcing security policies. You lead security audits and ensure compliance with security standards.\n\n",
                },
            },
            {
                name: "Database and Storage",
                description:
                    "Designing and managing database schemas and storage solutions",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Database and Storage L1\n\nYou have basic knowledge of database management systems (DBMS). You can write simple queries and understand basic database concepts.\n\n",
                    "2": "Database and Storage L2\n\nYou design and optimize database schemas, write complex queries, and manage databases effectively. You ensure data integrity and performance.\n\n",
                    "3": "Database and Storage L3\n\nYou are an expert in database and storage solutions, capable of architecting scalable and efficient data storage systems. You lead database design reviews and ensure best practices are followed.\n\n",
                },
            },
            {
                name: "Cloud Computing",
                description:
                    "Designing and managing applications and services in the cloud",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Cloud Computing L1\n\nYou have basic knowledge of cloud computing services. You can deploy simple applications to the cloud and understand basic cloud concepts.\n\n",
                    "2": "Cloud Computing L2\n\nYou design and manage applications in the cloud, utilizing cloud services for storage, computing, and networking. You ensure scalability and reliability of cloud applications.\n\n",
                    "3": "Cloud Computing L3\n\nYou are an expert in cloud computing, capable of architecting complex cloud-based solutions. You lead cloud migration projects and optimize cloud resource usage.\n\n",
                },
            },
        ],
    },
    {
        name: "Behavior",
        color: "#FF6347",
        skills: [
            {
                name: "Communication",
                description:
                    "Collaborating with others and integrating feedback into work",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Communication L1\n\nYou can convey basic information within the team and across teams. You might sometimes find it challenging to involve others in your work.\n\n",
                    "2": "Communication L2\n\nYou consistently share information, both written and verbally, with team members, ensuring information is rarely lost or misinterpreted. You can write clear and concise project documents and facilitate effective meetings.\n\n",
                    "3": "Communication L3\n\nYou effectively collect and share information within and across teams. You coach the team towards effective written communication and are skilled at facilitating insightful meetings and workshops.\n\n",
                },
            },
            {
                name: "Teamwork",
                description:
                    "Collaborating effectively with multidisciplinary team members",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                ],
                levels: {
                    "1": "Teamwork L1\n\nYou can collaborate with team members and contribute to team efforts. You might sometimes require assistance to work effectively in a team setting.\n\n",
                    "2": "Teamwork L2\n\nYou collaborate effectively with other team members, contributing to a positive and productive work environment. You participate actively in team discussions and projects.\n\n",
                    "3": "Teamwork L3\n\nYou lead and facilitate collaboration among multidisciplinary team members, promoting integration and alignment within the team. You handle conflicts constructively and help the team reach consensus.\n\n",
                },
            },
            {
                name: "Empathy",
                description: "Applying empathy in user-centered design",
                roles: [UX_DESIGNER],
                levels: {
                    "1": "Empathy L1\n\nYou understand the importance of empathy in user-centered design. You can gather user feedback and consider user needs in your designs.\n\n",
                    "2": "Empathy L2\n\nYou apply empathy in research and design, understanding and responding to user needs and frustrations. You incorporate user feedback into your work to improve the user experience.\n\n",
                    "3": "Empathy L3\n\nYou deeply integrate empathy throughout the design process, advocating for user needs and ensuring solutions effectively address these needs. You lead efforts to foster a user-centered culture within the team.\n\n",
                },
            },
            {
                name: "Adaptability",
                description: "Adapting to changes and new challenges",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Adaptability L1\n\nYou can adjust your work based on feedback and changing project requirements. You might find adapting to changes and new challenges difficult at times.\n\n",
                    "2": "Adaptability L2\n\nYou adapt to project changes and feedback from users and stakeholders. You adjust your designs and approaches based on new information and evolving requirements.\n\n",
                    "3": "Adaptability L3\n\nYou quickly adapt to new information, feedback, and changes in project scope, ensuring the final product meets user and business needs. You thrive in dynamic environments and help the team navigate changes effectively.\n\n",
                },
            },
        ],
    },
    {
        name: "Leadership",
        color: "#C9A7EB",
        skills: [
            {
                name: "Team Management",
                description: "Managing and guiding team members",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Team Management L1\n\nYou require guidance on managing the team, setting team goals, and providing feedback to team members.\n\n",
                    "2": "Team Management L2\n\nYou can manage a team effectively, including setting team goals and providing feedback to team members.\n\nYou are building your skills in coaching and mentoring team members.\n\n",
                    "3": "Team Management L3\n\nYou can manage multiple teams and can effectively coach and mentor team members to drive performance.\n\nYou can create a positive team culture and can manage team dynamics effectively.\n\n",
                },
            },
            {
                name: "Inspirational leadership",
                description: "Inspiring and motivating team members",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Inspirational leadership L1\n\nYou may struggle in having a positive impact on team morale, resolving issues with other team members, and don't consistently reinforce company values.\n\n",
                    "2": "Inspirational leadership L2\n\nYou consistently project a positive, can-do attitude, adapt to team dynamics, help resolve conflicts, and lead by example by consciously acting in line with company values.\n\n",
                    "3": "Inspirational leadership L3\n\nYou establish an environment that fosters shared pride in team accomplishments by building on the contributions of the whole team.\n\nYou effectively manage conflicts within the team and actively reinforce and communicate company values.\n\n",
                },
            },
            {
                name: "Considerate leadership",
                description:
                    "Practicing empathy and consideration towards team members",
                roles: [
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Considerate leadership L1\n\nYou rarely identify the needs of other team members or help them out and seldom consider other team members.\n\n",
                    "2": "Considerate leadership L2\n\nYou frequently take time for other team members when they need help and take on additional responsibilities when asked, even if it's outside your direct area of responsibility, for the greater good of the team.\n\n",
                    "3": "Considerate leadership L3\n\nYou proactively seek opportunities to help team members and are trusted as a go-to person. You contribute to the well-being of the team.\n\n",
                },
            },
            {
                name: "Developing leaders",
                description: "Mentoring and coaching others",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Developing leaders L1\n\nYou give feedback infrequently and it's rarely effective.\n\nYou react defensively to receiving feedback and show little interest in improving the team's way of working.\n\n",
                    "2": "Developing leaders L2\n\nYou continuously provide effective feedback to team members, are receptive to feedback, and coach team members when needed.\n\nYou take on a constructive role in retrospectives.\n\n",
                    "3": "Developing leaders L3\n\nYou act as a dedicated coach and consistently offer insightful feedback on strengths, development needs, and ways to improve.\n\nYou lead by example and are approached by team members seeking advice and coaching.\n\nYou actively contribute to enhancing the overall team performance.\n\n",
                },
            },
            {
                name: "Talent Development",
                description:
                    "Providing effective feedback and guidance for team development",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Talent Development L1\n\nYou can offer basic feedback and guidance to team members. You may require assistance in providing constructive feedback and developing mentoring relationships.\n\n",
                    "2": "Talent Development L2\n\nYou consistently provide effective and constructive feedback to team members. You mentor and guide others in their professional development, helping them improve their skills and performance.\n\n",
                    "3": "Talent Development L3\n\nYou are an expert mentor, dedicated to the growth and development of team members. You provide insightful feedback on strengths, development needs, and ways to improve. You lead by example and are sought after for advice and coaching.\n\n",
                },
            },
            {
                name: "Strategic Vision",
                description:
                    "Defining and guiding the strategic direction aligned with business goals",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Strategic Vision L1\n\nYou have a basic understanding of the company's vision and strategic goals. You can contribute to discussions on strategic direction and understand how your work aligns with broader objectives.\n\n",
                    "2": "Strategic Vision L2\n\nYou contribute actively to defining the strategic direction of your team or project. You align your work and the team's efforts with the company's strategic goals, ensuring that short-term tasks contribute to long-term objectives.\n\n",
                    "3": "Strategic Vision L3\n\nYou are an expert in strategic vision, capable of setting and guiding the strategic direction for your team or organization. You align projects and initiatives with business goals and influence decisions at all levels to ensure strategic alignment.\n\n",
                },
            },
            {
                name: "Decision Making",
                description:
                    "Making informed and effective decisions to drive project and team success",
                roles: [PRODUCT_MANAGER, ENGINEERING_MANAGER],
                levels: {
                    "1": "Decision Making L1\n\nYou can make basic decisions with some guidance and support. You gather relevant information and consider different perspectives, but may require help in complex decision-making situations.\n\n",
                    "2": "Decision Making L2\n\nYou make informed decisions based on data and analysis. You consider the impact of your decisions on the team and project, and you can handle moderately complex decision-making situations effectively.\n\n",
                    "3": "Decision Making L3\n\nYou are an expert decision-maker, capable of making high-impact decisions that drive project and team success. You gather and analyze comprehensive information, consider various perspectives, and make strategic decisions that align with business goals.\n\n",
                },
            },
            {
                name: "Conflict Resolution",
                description:
                    "Managing and resolving conflicts to maintain a productive work environment",
                roles: [ENGINEERING_MANAGER],
                levels: {
                    "1": "Conflict Resolution L1\n\nYou can address minor conflicts with some guidance. You are aware of conflict resolution techniques, but may require support in handling more complex conflicts.\n\n",
                    "2": "Conflict Resolution L2\n\nYou effectively manage and resolve conflicts within the team. You use conflict resolution techniques to address issues constructively and maintain a positive work environment.\n\n",
                    "3": "Conflict Resolution L3\n\nYou are an expert in conflict resolution, capable of handling complex conflicts and facilitating constructive discussions. You create an environment where conflicts are resolved amicably and the team can focus on achieving their goals.\n\n",
                },
            },
        ],
    },
    {
        name: "Mindset",
        color: "#FFABAB",
        skills: [
            {
                name: "Result ownership",
                description: "Taking responsibility for own results",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Result ownership L1\n\nYou demonstrate a growing sense of responsibility for the outcomes of your product.\n\nYou have difficulties taking ownership of the ultimate results of your work when it depends on factors outside your area.\n\n",
                    "2": "Result ownership L2\n\nYou possess a 'get-it-done' attitude.\n\nYou set clear expectations and provide support to ensure that objectives are met.\n\nYou take full ownership of your product's results, driving the team toward achieving its goals.\n\nYou foster a culture of continuous improvement by incorporating lessons learned from the past and others. \n\n",
                    "3": "Result ownership L3\n\nYou consistently demonstrate strategic vision and leadership in driving the product to success.\n\nYou expertly balance stakeholder expectations, resource constraints, and market demands to deliver exceptional products that achieve business objectives.\n\nYou seek out challenges, create opportunities, and have an 'owner mindset'.\n\n",
                },
            },
            {
                name: "Grit",
                description: "Persisting and persevering through challenges",
                roles: [
                    PRODUCT_MANAGER,
                    SOFTWARE_ENGINEER,
                    DATA_ENGINEER,
                    DATA_SCIENTIST,
                    DATA_ANALYST,
                    UX_DESIGNER,
                    ENGINEERING_MANAGER,
                ],
                levels: {
                    "1": "Grit L1\n\nYou are eager to learn from setbacks and maintain a positive attitude, fostering a growth mindset that allows you to adapt and improve. \n\n",
                    "2": "Grit L2\n\nYou confront challenges and display a relentless drive to achieve product excellence.\n\nYou maintain calm under pressure and adapt to changing circumstances, which instills confidence in your team and contributes to successful product outcomes. \n\n",
                    "3": "Grit L3\n\nYou consistently showcase the perseverance required to achieve exceptional product results.\n\nYour commitment to the product vision and goals inspires your team to overcome challenges. \n\n",
                },
            },
        ],
    },
];
