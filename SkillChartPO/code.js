(() => {
  // levelinfo.tsx
  var levelDescriptions = [
    {
      skill: "Industry",
      level: "1",
      description: "Industry L1\n\nYou have a basic understanding of the industry landscape, including current trends and challenges.\n\nYou are familiar with the industry's major players and their offerings, and you actively work to expand your knowledge of the industry.\n\n"
    },
    {
      skill: "Industry",
      level: "2",
      description: "Industry L2\n\nYou possess comprehensive knowledge of the industry, including emerging trends, opportunities, and potential threats. You can analyze market shifts and anticipate future developments.\n\nYou effectively apply industry knowledge to product development and strategy.\n\n"
    },
    {
      skill: "Industry",
      level: "3",
      description: "Industry L3\n\nYou have an expert-level understanding of the industry, with a proven track record of leveraging this knowledge to drive product success.\n\nYou are recognized as an industry thought leader and can influence market trends and developments.\n\nYou guide product strategy based on deep industry insights.\n\n"
    },
    {
      skill: "Competitors",
      level: "1",
      description: "Competitors L1\n\nYou are aware of key competitors and their products. You understand basic competitive analysis techniques and assist in gathering competitive intelligence.\n\nYou recognize potential opportunities for product differentiation.\n\n"
    },
    {
      skill: "Competitors",
      level: "2",
      description: "Competitors L2\n\nYou conduct in-depth competitive analysis and identify strengths and weaknesses of competing products.\n\nYou develop strategies to create a unique value proposition for the product.\n\n"
    },
    {
      skill: "Competitors",
      level: "3",
      description: "Competitors L3\n\nYou are an expert in understanding the competitive landscape and anticipating competitor moves.\n\nYou drive product strategy and positioning based on deep competitive insights. You ensure the product maintains a competitive edge in the market.\n\n"
    },
    {
      skill: "Regulations",
      level: "1",
      description: "Regulations L1\n\nYou have a limited understanding of relevant laws, regulations, and compliance requirements.\n\nYou actively work to expand your knowledge and ensure the product is developed with compliance in mind.\n\n"
    },
    {
      skill: "Regulations",
      level: "2",
      description: "Regulations L2\n\nYou possess comprehensive knowledge of the regulatory landscape, including current and upcoming regulations.\n\nYou ensure that the product complies with all necessary requirements and identify potential risks.\n\n"
    },
    {
      skill: "Regulations",
      level: "3",
      description: "Regulations L3\n\nYou are an expert in navigating the complex regulatory environment and anticipating changes in the regulatory landscape.\n\nYou guide the product team in developing compliant solutions and mitigating risks associated with regulatory non-compliance.\n\n"
    },
    {
      skill: "Planning & execution",
      level: "1",
      description: "Planning & execution L1\n\nYou need help in structuring work, struggle to meet deadlines and focus on tasks.\n\nYou do not adequately follow up on and close tasks.\n\n"
    },
    {
      skill: "Planning & execution",
      level: "2",
      description: "Planning & execution L2\n\nYou can structure your work and execute it in a timely manner, follow up and close tasks.\n\nYou generally ensure tasks are completed and rarely miss important details.\n\nYou maintain clear focus on your work.\n\n"
    },
    {
      skill: "Planning & execution",
      level: "3",
      description: "Planning & execution L3\n\nYou structure, define, and scope your own work as well as the team's work in a way that leads to effectively meeting deadlines.\n\nYou consistently follow up and improve based on the follow-up.\n\nYou effectively delegate tasks, set up processes, and monitor progress on your tasks as well as delegated tasks. You avoid unnecessary crunches.\n\n"
    },
    {
      skill: "Roadmap Planning",
      level: "1",
      description: "Roadmap Planning L1\n\nYou have a limited understanding of how to create a product roadmap.\n\nYou require guidance on how to prioritize features and communicate the roadmap.\n\n"
    },
    {
      skill: "Roadmap Planning",
      level: "2",
      description: "Roadmap Planning L2\n\nYou can create a product roadmap and prioritize features effectively.\n\nYou are building your skills in communicating the roadmap to stakeholders.\n\n"
    },
    {
      skill: "Roadmap Planning",
      level: "3",
      description: "Roadmap Planning L3\n\nYou can create and communicate a product roadmap that aligns with business goals.\n\nYou can balance competing priorities and adjust the roadmap as necessary.\n\n"
    },
    {
      skill: "Launch Strategy",
      level: "1",
      description: "Launch Strategy L1\n\nYou have a limited understanding of how to plan and execute a product launch.\n\nYou require guidance on how to create a launch plan and coordinate with stakeholders.\n\n"
    },
    {
      skill: "Launch Strategy",
      level: "2",
      description: "Launch Strategy L2\n\nYou can plan and execute a product launch, including developing launch plans and coordinating with stakeholders.\n\nYou are building your skills in optimizing launch processes.\n\n"
    },
    {
      skill: "Launch Strategy",
      level: "3",
      description: "Launch Strategy L3\n\nYou can plan and execute successful product launches that meet business goals. You can optimize launch processes and can effectively coordinate with cross-functional teams.\n\n"
    },
    {
      skill: "Communication",
      level: "1",
      description: "Communication L1\n\nYou have difficulties conveying information, both written and verbally, within the team and across teams.\n\nYou are often misunderstood and do not involve others enough in your work.\n\n"
    },
    {
      skill: "Communication",
      level: "2",
      description: "Communication L2\n\nYou consistently share information, both written and verbally, with team members, ensuring information is rarely lost or misinterpreted.\n\nYou can write clear and concise project documents and facilitate effective meetings.\n\n"
    },
    {
      skill: "Communication",
      level: "3",
      description: "Communication L3\n\nYou effectively collect and share information within and across teams. You coach the team towards effective written communication and are skilled at facilitating insightful meetings and workshops.\n\n"
    },
    {
      skill: "Backlog management",
      level: "1",
      description: "Backlog management L1\n\nYou actively collaborate with team members to gather requirements and create user stories, ensuring they are clearly defined and aligned with goals.\n\nYou are open to feedback and strive to improve your skills in managing and refining the product backlog.\n\n"
    },
    {
      skill: "Backlog management",
      level: "2",
      description: "Backlog management L2\n\nYou break down large tasks into smaller, manageable tasks, ensuring that the backlog is well-organized and easily understood by team members. You effectively prioritize and communicate the rationale behind prioritization decisions. You consistently measure and track progress, and continuously improve backlog management processes and overall team performance.\n\n"
    },
    {
      skill: "Backlog management",
      level: "3",
      description: "Backlog management L3\n\nYou possess a deep mastery of backlog management.\n\nYou consistently analyze market trends, customer feedback, and business objectives to prioritize backlog items effectively. Your leadership in backlog refinement and cross-functional collaboration ensures that the development team remains focused and aligned, resulting in high-quality product releases.\n\n"
    },
    {
      skill: "Problem solving",
      level: "1",
      description: "Problem solving L1\n\nYou may be lacking analytical rigour in your reasoning and may have difficulty solving problems independently.\n\nYou may require a lot of guidance in problem-solving.\n\n"
    },
    {
      skill: "Problem solving",
      level: "2",
      description: "Problem solving L2\n\nYou follow sound logic and have a good understanding of the problem-solving process.\n\nYou can work independently with the steps involved, including framing and breaking down ambiguous problems and collecting relevant information to make decisions.\n\n"
    },
    {
      skill: "Problem solving",
      level: "3",
      description: "Problem solving L3\n\nYou are able to use logic, insights, and prior knowledge to effectively define and structure problems.\n\nYou can synthesize findings from analyses and develop impactful recommendations.\n\nYou also have the ability to coach team members in problem-solving fundamentals.\n\n"
    },
    {
      skill: "Data Analysis",
      level: "1",
      description: "Data Analysis L1\n\nYou have a limited understanding of data analysis and how to use data to inform product decisions. You require guidance on how to analyze data and communicate insights to stakeholders.\n\n"
    },
    {
      skill: "Data Analysis",
      level: "2",
      description: "Data Analysis L2\n\nYou can use data to inform product decisions and can effectively analyze data to identify trends and patterns. You are building your skills in communicating data insights to stakeholders.\n\n"
    },
    {
      skill: "Data Analysis",
      level: "3",
      description: "Data Analysis L3\n\nYou can use data to drive product decisions and can effectively analyze complex data sets.\n\nYou can communicate data insights to stakeholders in a clear and actionable manner.\n\n"
    },
    {
      skill: "Metrics identification",
      level: "1",
      description: "Metrics identification L1\n\nSometimes, you may struggle to define metrics for given product and need guidance.\n\nYou may require specific direction on how to choose metrics that align with product goals\n\n"
    },
    {
      skill: "Metrics identification",
      level: "2",
      description: "Metrics identification L2\n\nYou have a good understanding of metrics identification and can select relevant metrics that align with product objectives.\n\n"
    },
    {
      skill: "Metrics identification",
      level: "3",
      description: "Metrics identification L3\n\nYou have a deep understanding of the product's user journey and identify key touchpoints where metrics can be used to measure success and drive improvement.\n\nYou are able to create or select the most appropriate metrics framework based on the product's stage of development, and business objectives.\n\n"
    },
    {
      skill: "Metrics prioritization",
      level: "1",
      description: "Metrics prioritization L1\n\nSometimes, you may struggle with prioritization and need guidance.\n\nYou may focus on the irrelevant metrics first\n\n"
    },
    {
      skill: "Metrics prioritization",
      level: "2",
      description: "Metrics prioritization L2\n\nYou prioritize and focus on the most relevant metrics to drive product success.\n\nYou structure your metrics properly and prioritize them between primary and secondary metrics.\n\nYou have the ability to clearly discuss the pros and cons of various metrics, and make a solid argument for the choices that you made.\n\n"
    },
    {
      skill: "Metrics prioritization",
      level: "3",
      description: "Metrics prioritization L3\n\nYou are an expert in metrics prioritization, adeptly identifying and prioritizing primary, secondary, and guardrail metrics that drive the product's success.\n\nYou possess a deep understanding of the product's market, competitive landscape, and customer needs, allowing you to effectively align metrics to the product strategy.\n\n"
    },
    {
      skill: "Visual (UI)",
      level: "1",
      description: "Visual (UI) L1\n\nYou may have a limited understanding of composition, color theory, and typography. You may struggle to detect inconsistencies in designs and branding assets.\n\nYou are not aware of industry patterns and trends.\n\n"
    },
    {
      skill: "Visual (UI)",
      level: "2",
      description: "Visual (UI) L2\n\nYou have a good understanding of composition, color theory, typography, and design principles. You can identify inconsistencies and suggest improvements to your product designs.\n\nYou are up to date on industry patterns and trends and can make informed decisions about design choices.\n\n"
    },
    {
      skill: "Visual (UI)",
      level: "3",
      description: "Visual (UI) L3\n\nYou possess a deep understanding of composition, color theory, typography, and design principles, and can use this knowledge to provide guidance and mentorship to junior team members.\n\nYou have a strong sense of the brand and can ensure that all design work is consistent with the brand identity.\n\nAdditionally, you stay up to date on industry trends and can identify opportunities to innovate and improve the visual design of the product.\n\n"
    },
    {
      skill: "User experience",
      level: "1",
      description: "User experience L1\n\nYou have a basic understanding of user experience design principles and the importance of providing a positive UX. You actively collaborate with UX designers to gather feedback from users and improve the product's usability. You strive to improve your skills in UX design, ensuring that user needs are at the forefront of product development.\n\n"
    },
    {
      skill: "User experience",
      level: "2",
      description: "User experience L2\n\nYou design a smooth UX for your products.\n\nYou structure the content in a way that is intuitive and easy to navigate for users. You evaluate the usability of the product and identify areas for improvement and prioritize them based on their impact on the user experience.\n\n"
    },
    {
      skill: "User experience",
      level: "3",
      description: "User experience L3\n\nYou design an enjoyable UX for your products.\n\nYour deep understanding of user-centric design enables you to drive exceptional user experiences that differentiate the product in the market.\n\n"
    },
    {
      skill: "UX practices",
      level: "1",
      description: "UX practices L1\n\nYou\u2019re building your knowledge of the discovery process and have a limited understanding of it. You hesitate to bring customers into the process.\n\nYou have a basic understanding of when and how to validate your work through research.\n\n"
    },
    {
      skill: "UX practices",
      level: "2",
      description: "UX practices L2\n\nYou use practices and tools to understand customer problems & identify opportunities/needs.\n\nYou can do your own research if necessary.\n\nYou find and validate the solutions to the problems identified.\n\n"
    },
    {
      skill: "UX practices",
      level: "3",
      description: "UX practices L3\n\nYou use a wide range of discovery techniques to reach an optimal outcome.\n\nConsistently make good decisions about what to build and how.\n\nContinuously in direct contact with our customers and is deeply invested in their needs.\n\n"
    },
    {
      skill: "User research",
      level: "1",
      description: "User research L1\n\nYou have little or no expertise in effectively identifying user requirements and often find it difficult to obtain valuable insights from interviews.\n\n"
    },
    {
      skill: "User research",
      level: "2",
      description: "User research L2\n\nYou are skilled in identifying target customer segments and understanding their unique needs and preferences.\n\nYou design and conduct user research to gather valuable insights.\n\nYou effectively translate customer feedback into actionable product improvements.\n\n"
    },
    {
      skill: "User research",
      level: "3",
      description: "User research L3\n\nYou are an expert in uncovering customer insights and predicting future customer needs.\n\nYou establish a customer-centric culture within the product team and drive product decisions based on deep customer understanding.\n\nYou develop strategies for maximizing customer satisfaction and long-term success.\n\n"
    },
    {
      skill: "Technical understanding",
      level: "1",
      description: "Technical understanding L1\n\nYou have little knowledge or understanding of software development and code reviews, and are unable to create code independently.\n\n"
    },
    {
      skill: "Technical understanding",
      level: "2",
      description: "Technical understanding L2\n\nYou possess basic software development skills and understand how different parts of the tech stack work together, as well as what needs to happen for the code to function.\n\nYou have a good understanding of data structures, algorithms, and basic knowledge of HTML, CSS, and SQL.\n\n"
    },
    {
      skill: "Technical understanding",
      level: "3",
      description: "Technical understanding L3\n\nYou are knowledgeable and can coach other team members with basic software development skills.\n\nYou have a good understanding of the side effects of coding decisions, and you understand what drives poor performance and can adjust accordingly.\n\n"
    },
    {
      skill: "Quality assurance",
      level: "1",
      description: "Quality assurance L1\n\nYou have no knowledge or involvement in the team's quality assurance work.\n\nYou test 'the wrong things,' miss scenarios or use cases, and cannot differentiate between general ideas and feedback from bugs and errors.\n\nYou cannot clearly describe found bugs and show no interest in contributing to quality assurance work.\n\n"
    },
    {
      skill: "Quality assurance",
      level: "2",
      description: "Quality assurance L2\n\nYou have knowledge of and show initiative to participate in the team's quality assurance work.\n\nYou understand what needs to be tested and perform relevant tests.\n\nYou can distinguish between improvements and bugs, and you report found bugs in a compliant manner.\n\n"
    },
    {
      skill: "Quality assurance",
      level: "3",
      description: "Quality assurance L3\n\nYou can test the right things, including corner cases, without being too broad.\n\nYou can precisely fix bugs found during QA to reduce the risk of introducing new issues.\n\nYou have excellent judgment of what needs to be fixed during the QA process and what can be fixed later.\n\nYou can set up the QA process and are good at identifying which changes have increased risk.\n\nYou consistently take the initiative to improve QA work.\n\n"
    },
    {
      skill: "Team Management",
      level: "1",
      description: "Team Management L1\n\nYou require guidance on managing the team, setting team goals, and providing feedback to team members.\n\n"
    },
    {
      skill: "Team Management",
      level: "2",
      description: "Team Management L2\n\nYou can manage a team effectively, including setting team goals and providing feedback to team members.\n\nYou are building your skills in coaching and mentoring team members.\n\n"
    },
    {
      skill: "Team Management",
      level: "3",
      description: "Team Management L3\n\nYou can manage multiple teams and can effectively coach and mentor team members to drive performance.\n\nYou can create a positive team culture and can manage team dynamics effectively.\n\n"
    },
    {
      skill: "Inspirational leadership",
      level: "1",
      description: "Inspirational leadership L1\n\nYou may struggle in having a positive impact on team morale, resolving issues with other team members, and don't consistently reinforce company values.\n\n"
    },
    {
      skill: "Inspirational leadership",
      level: "2",
      description: "Inspirational leadership L2\n\nYou consistently project a positive, can-do attitude, adapt to team dynamics, help resolve conflicts, and lead by example by consciously acting in line with company values.\n\n"
    },
    {
      skill: "Inspirational leadership",
      level: "3",
      description: "Inspirational leadership L3\n\nYou establish an environment that fosters shared pride in team accomplishments by building on the contributions of the whole team.\n\nYou effectively manage conflicts within the team and actively reinforce and communicate company values.\n\n"
    },
    {
      skill: "Considerate leadership",
      level: "1",
      description: "Considerate leadership L1\n\nYou rarely identify the needs of other team members or help them out and seldom consider other team members.\n\n"
    },
    {
      skill: "Considerate leadership",
      level: "2",
      description: "Considerate leadership L2\n\nYou frequently take time for other team members when they need help and take on additional responsibilities when asked, even if it's outside your direct area of responsibility, for the greater good of the team.\n\n"
    },
    {
      skill: "Considerate leadership",
      level: "3",
      description: "Considerate leadership L3\n\nYou proactively seek opportunities to help team members and are trusted as a go-to person. You contribute to the well-being of the team.\n\n"
    },
    {
      skill: "Developing leaders",
      level: "1",
      description: "Developing leaders L1\n\nYou give feedback infrequently and it's rarely effective.\n\nYou react defensively to receiving feedback and show little interest in improving the team's way of working.\n\n"
    },
    {
      skill: "Developing leaders",
      level: "2",
      description: "Developing leaders L2\n\nYou continuously provide effective feedback to team members, are receptive to feedback, and coach team members when needed.\n\nYou take on a constructive role in retrospectives.\n\n"
    },
    {
      skill: "Developing leaders",
      level: "3",
      description: "Developing leaders L3\n\nYou act as a dedicated coach and consistently offer insightful feedback on strengths, development needs, and ways to improve.\n\nYou lead by example and are approached by team members seeking advice and coaching.\n\nYou actively contribute to enhancing the overall team performance.\n\n"
    },
    {
      skill: "Result ownership",
      level: "1",
      description: "Result ownership L1\n\nYou demonstrate a growing sense of responsibility for the outcomes of your product.\n\nYou have difficulties taking ownership of the ultimate results of your work when it depends on factors outside your area.\n\n"
    },
    {
      skill: "Result ownership",
      level: "2",
      description: "Result ownership L2\n\nYou possess a 'get-it-done' attitude.\n\nYou set clear expectations and provide support to ensure that objectives are met.\n\nYou take full ownership of your product's results, driving the team toward achieving its goals.\n\nYou foster a culture of continuous improvement by incorporating lessons learned from the past and others. \n\n"
    },
    {
      skill: "Result ownership",
      level: "3",
      description: "Result ownership L3\n\nYou consistently demonstrate strategic vision and leadership in driving the product to success.\n\nYou expertly balance stakeholder expectations, resource constraints, and market demands to deliver exceptional products that achieve business objectives.\n\nYou seek out challenges, create opportunities, and have an 'owner mindset'.\n\n"
    },
    {
      skill: "Grit",
      level: "1",
      description: "Grit L1\n\nYou are eager to learn from setbacks and maintain a positive attitude, fostering a growth mindset that allows you to adapt and improve. \n\n"
    },
    {
      skill: "Grit",
      level: "2",
      description: "Grit L2\n\nYou confront challenges and display a relentless drive to achieve product excellence.\n\nYou maintain calm under pressure and adapt to changing circumstances, which instills confidence in your team and contributes to successful product outcomes. \n\n"
    },
    {
      skill: "Grit",
      level: "3",
      description: "Grit L3\n\nYou consistently showcase the perseverance required to achieve exceptional product results.\n\nYour commitment to the product vision and goals inspires your team to overcome challenges. \n\n"
    }
  ];

  // code.tsx
  var { widget } = figma;
  var {
    useSyncedState,
    useSyncedMap,
    useEffect,
    AutoLayout,
    Frame,
    Rectangle,
    Text,
    SVG
  } = widget;
  var domainCategory = {
    name: "Domain knowledge",
    color: "#9747FF",
    skills: ["Industry", "Competitors", "Regulations"],
    skillDescriptions: [
      "Understanding of the workings and trends of a specific industry",
      "Knowledge of the strengths, weaknesses, and strategies of competing businesses in the same industry",
      "Familiarity with the laws, rules, and regulations that govern a specific industry."
    ]
  };
  var processCategory = {
    name: "Process",
    color: "#0D99FF",
    skills: [
      "Planning & execution",
      "Communication",
      "Roadmap planning",
      "Backlog management",
      "Launch strategy"
    ],
    skillDescriptions: [
      "Planning and executing tasks and initiatives while monitoring progress and adjusting as needed",
      "Collaborating with others and integrating feedback into work",
      "Developing a long-term plan for achieving business goals and objectives",
      "Managing a backlog of tasks, prioritizing them based on  needs",
      "Planinng and execution of successful product or service launches"
    ]
  };
  var analyticsCategory = {
    name: "Analytics",
    color: "#FFA629",
    skills: [
      "Problem solving",
      "Data Analysis",
      "Metrics identification",
      "Metrics prioritization"
    ],
    skillDescriptions: [
      "Identifing, analyzing, and solving problems effectively",
      " Collecting and analyzing data to gain insights and make informed decisions",
      "Identifying relevant metrics that measure progress towards business goals",
      "Prioritizing metrics based on their importance and impact on business objectives"
    ]
  };
  var uxuiCategory = {
    name: "UX/UI",
    color: "#14AE5C",
    skills: ["Visual (UI)", "User experience", "UX practices", "User research"],
    skillDescriptions: [
      "Designing visually appealing and easy to use products",
      "Designing and creating user-centered digital experiences",
      " Implementing best practices and methodologies",
      "Conducting research to understand user behavior, needs, and preferences"
    ]
  };
  var technicalCategory = {
    name: "Technical",
    color: "#FFCD29",
    skills: ["Technical understanding", "Quality assurance"],
    skillDescriptions: [
      "Understanding and applying technical knowledge and skills",
      ": Ensuring the quality of products or services "
    ]
  };
  var leadershipCategory = {
    name: "Leadership",
    color: "#C9A7EB",
    skills: [
      "Team Management",
      "Inspirational leadership",
      "Considerate leadership",
      "Developing leaders"
    ],
    skillDescriptions: [
      "Managing and guiding team members",
      "Inspiring and motivating team members",
      "Practicing empathy and consideration towards team members",
      "Mentoring and coaching others"
    ]
  };
  var mindsetCategory = {
    name: "Mindset",
    color: "#FFABAB",
    skills: ["Result ownership", "Grit"],
    skillDescriptions: [
      "Taking responsibility for own results",
      "Persisting and persevering through challenges"
    ]
  };
  var categories = [
    domainCategory,
    processCategory,
    analyticsCategory,
    uxuiCategory,
    technicalCategory,
    leadershipCategory,
    mindsetCategory
  ];
  var OVERALL_WIDTH = 7120;
  function round(whole) {
    const fraction = whole % 1;
    const integer = whole - fraction;
    return integer + (fraction <= 0.5 ? 0 : 1);
  }
  function Widget() {
    const voteMap = useSyncedMap("skill-level");
    const [userLevel, setUserLevel] = useSyncedState("level", 1);
    const [showLevels, setShowLevels] = useSyncedState("isShown", false);
    const [role, setRole] = useSyncedState("role", "Product");
    useEffect(() => {
      const values = voteMap.values().filter((x) => x > 0);
      const average = values.length ? round(values.reduce((acc, x) => acc + x, 0) / values.length) : null;
      if (average !== userLevel) {
        setUserLevel(average);
      }
    });
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Everything",
      width: OVERALL_WIDTH,
      height: 1100,
      fill: "#FFFFFF",
      cornerRadius: 10,
      effect: [
        {
          type: "drop-shadow",
          color: "#9747FF0A",
          offset: {
            x: 0,
            y: 3
          },
          blur: 57,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#0D99FF0A",
          offset: {
            x: 0,
            y: 2
          },
          blur: 30,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#C9A7EB0A",
          offset: {
            x: 0,
            y: 1
          },
          blur: 18,
          showShadowBehindNode: false
        },
        {
          type: "drop-shadow",
          color: "#FFABAB0D",
          offset: {
            x: 0,
            y: 0
          },
          blur: 6,
          showShadowBehindNode: false
        }
      ],
      stroke: "#00000026",
      strokeWidth: 3
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Dividers",
      x: 82,
      y: 228,
      width: OVERALL_WIDTH - 150,
      height: 650
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L1",
      opacity: 0.1,
      x: 0,
      y: 450,
      strokeWidth: 0,
      overflow: "visible",
      hidden: showLevels ? true : false,
      width: OVERALL_WIDTH,
      height: 200,
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L1-Bg",
      y: 1.5,
      fill: "#FFF",
      width: 150,
      height: 200
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L1-Line",
      height: 3,
      width: OVERALL_WIDTH,
      opacity: userLevel == 1 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L2",
      opacity: 0.1,
      y: 250,
      strokeWidth: 0,
      overflow: "visible",
      width: OVERALL_WIDTH,
      height: 200,
      hidden: showLevels ? true : false,
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L2-Bg",
      y: 0.5,
      fill: "#FFF",
      width: 150,
      height: 200
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L2-Line",
      height: 3,
      width: OVERALL_WIDTH,
      opacity: userLevel == 2 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99196 3.4997L-7.88722e-06 3.49969L-7.62939e-06 0.499695L3.99196 0.499696L3.99196 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.627 3.49982L682.627 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Divider-L3",
      opacity: 0.1,
      y: 50,
      strokeWidth: 0,
      overflow: "visible",
      width: OVERALL_WIDTH,
      height: 200,
      hidden: showLevels ? true : false,
      hoverStyle: {
        opacity: showLevels ? 0.1 : 0.5
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Divider-L3-Bg",
      fill: "#FFF",
      width: 150,
      height: 200
    }), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-L3-Line",
      y: 0.5,
      height: 3,
      width: OVERALL_WIDTH,
      opacity: userLevel == 3 ? 1 : 1,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3.99197 3.4997L-2.57824e-07 3.49969L0 0.499695L3.99197 0.499696L3.99197 3.4997ZM19.9599 3.4997L11.9759 3.4997L11.9759 0.499697L19.9599 0.499698L19.9599 3.4997ZM35.9277 3.4997L27.9438 3.4997L27.9438 0.4997L35.9277 0.499701L35.9277 3.4997ZM51.8956 3.4997L43.9117 3.4997L43.9117 0.499703L51.8956 0.499704L51.8956 3.4997ZM67.8635 3.49971L59.8796 3.49971L59.8796 0.499706L67.8635 0.499707L67.8635 3.49971ZM83.8314 3.49971L75.8475 3.49971L75.8475 0.499708L83.8314 0.49971L83.8314 3.49971ZM99.7993 3.49971L91.8154 3.49971L91.8154 0.499711L99.7993 0.499713L99.7993 3.49971ZM115.767 3.49972L107.783 3.49971L107.783 0.499714L115.767 0.499715L115.767 3.49972ZM131.735 3.49972L123.751 3.49972L123.751 0.499717L131.735 0.499718L131.735 3.49972ZM147.703 3.49972L139.719 3.49972L139.719 0.49972L147.703 0.499721L147.703 3.49972ZM163.671 3.49972L155.687 3.49972L155.687 0.499722L163.671 0.499724L163.671 3.49972ZM179.639 3.49973L171.655 3.49973L171.655 0.499725L179.639 0.499727L179.639 3.49973ZM195.607 3.49973L187.623 3.49973L187.623 0.499728L195.607 0.49973L195.607 3.49973ZM211.575 3.49973L203.591 3.49973L203.591 0.499731L211.575 0.499732L211.575 3.49973ZM227.542 3.49974L219.559 3.49973L219.559 0.499734L227.542 0.499735L227.542 3.49974ZM243.51 3.49974L235.526 3.49974L235.526 0.499737L243.51 0.499738L243.51 3.49974ZM259.478 3.49974L251.494 3.49974L251.494 0.49974L259.478 0.499741L259.478 3.49974ZM275.446 3.49974L267.462 3.49974L267.462 0.499742L275.446 0.499744L275.446 3.49974ZM291.414 3.49975L283.43 3.49975L283.43 0.499745L291.414 0.499747L291.414 3.49975ZM307.382 3.49975L299.398 3.49975L299.398 0.499748L307.382 0.499749L307.382 3.49975ZM323.35 3.49975L315.366 3.49975L315.366 0.499751L323.35 0.499752L323.35 3.49975ZM339.318 3.49976L331.334 3.49975L331.334 0.499754L339.318 0.499755L339.318 3.49976ZM355.286 3.49976L347.302 3.49976L347.302 0.499757L355.286 0.499758L355.286 3.49976ZM371.254 3.49976L363.27 3.49976L363.27 0.499759L371.254 0.499761L371.254 3.49976ZM387.221 3.49976L379.237 3.49976L379.237 0.499762L387.221 0.499764L387.221 3.49976ZM403.189 3.49977L395.205 3.49977L395.205 0.499765L403.189 0.499767L403.189 3.49977ZM419.157 3.49977L411.173 3.49977L411.173 0.499768L419.157 0.499769L419.157 3.49977ZM435.125 3.49977L427.141 3.49977L427.141 0.499771L435.125 0.499772L435.125 3.49977ZM451.093 3.49977L443.109 3.49977L443.109 0.499774L451.093 0.499775L451.093 3.49977ZM467.061 3.49978L459.077 3.49978L459.077 0.499777L467.061 0.499778L467.061 3.49978ZM483.029 3.49978L475.045 3.49978L475.045 0.499779L483.029 0.499781L483.029 3.49978ZM498.997 3.49978L491.013 3.49978L491.013 0.499782L498.997 0.499784L498.997 3.49978ZM514.965 3.49979L506.981 3.49978L506.981 0.499785L514.965 0.499786L514.965 3.49979ZM530.932 3.49979L522.949 3.49979L522.949 0.499788L530.932 0.499789L530.932 3.49979ZM546.9 3.49979L538.916 3.49979L538.916 0.499791L546.9 0.499792L546.9 3.49979ZM562.868 3.49979L554.884 3.49979L554.884 0.499794L562.868 0.499795L562.868 3.49979ZM578.836 3.4998L570.852 3.4998L570.852 0.499796L578.836 0.499798L578.836 3.4998ZM594.804 3.4998L586.82 3.4998L586.82 0.499799L594.804 0.499801L594.804 3.4998ZM610.772 3.4998L602.788 3.4998L602.788 0.499802L610.772 0.499803L610.772 3.4998ZM626.74 3.49981L618.756 3.4998L618.756 0.499805L626.74 0.499806L626.74 3.49981ZM642.708 3.49981L634.724 3.49981L634.724 0.499808L642.708 0.499809L642.708 3.49981ZM658.676 3.49981L650.692 3.49981L650.692 0.499811L658.676 0.499812L658.676 3.49981ZM674.644 3.49981L666.66 3.49981L666.66 0.499813L674.644 0.499815L674.644 3.49981ZM690.611 3.49982L682.628 3.49982L682.628 0.499816L690.611 0.499818L690.611 3.49982ZM706.579 3.49982L698.595 3.49982L698.595 0.499819L706.579 0.49982L706.579 3.49982ZM722.547 3.49982L714.563 3.49982L714.563 0.499822L722.547 0.499823L722.547 3.49982ZM738.515 3.49983L730.531 3.49982L730.531 0.499825L738.515 0.499826L738.515 3.49983ZM754.483 3.49983L746.499 3.49983L746.499 0.499828L754.483 0.499829L754.483 3.49983ZM770.451 3.49983L762.467 3.49983L762.467 0.49983L770.451 0.499832L770.451 3.49983ZM786.419 3.49983L778.435 3.49983L778.435 0.499833L786.419 0.499835L786.419 3.49983ZM802.387 3.49984L794.403 3.49984L794.403 0.499836L802.387 0.499838L802.387 3.49984ZM818.355 3.49984L810.371 3.49984L810.371 0.499839L818.355 0.49984L818.355 3.49984ZM834.323 3.49984L826.339 3.49984L826.339 0.499842L834.323 0.499843L834.323 3.49984ZM850.29 3.49985L842.306 3.49984L842.306 0.499845L850.29 0.499846L850.29 3.49985ZM866.258 3.49985L858.274 3.49985L858.274 0.499847L866.258 0.499849L866.258 3.49985ZM882.226 3.49985L874.242 3.49985L874.242 0.49985L882.226 0.499852L882.226 3.49985ZM898.194 3.49985L890.21 3.49985L890.21 0.499853L898.194 0.499855L898.194 3.49985ZM914.162 3.49986L906.178 3.49986L906.178 0.499856L914.162 0.499857L914.162 3.49986ZM930.13 3.49986L922.146 3.49986L922.146 0.499859L930.13 0.49986L930.13 3.49986ZM946.098 3.49986L938.114 3.49986L938.114 0.499862L946.098 0.499863L946.098 3.49986ZM962.066 3.49987L954.082 3.49986L954.082 0.499865L962.066 0.499866L962.066 3.49987ZM978.034 3.49987L970.05 3.49987L970.05 0.499867L978.034 0.499869L978.034 3.49987ZM994.002 3.49987L986.018 3.49987L986.018 0.49987L994.002 0.499872L994.002 3.49987ZM1009.97 3.49987L1001.99 3.49987L1001.99 0.499873L1009.97 0.499875L1009.97 3.49987ZM1025.94 3.49988L1017.95 3.49988L1017.95 0.499876L1025.94 0.499877L1025.94 3.49988ZM1041.91 3.49988L1033.92 3.49988L1033.92 0.499879L1041.91 0.49988L1041.91 3.49988ZM1057.87 3.49988L1049.89 3.49988L1049.89 0.499882L1057.87 0.499883L1057.87 3.49988ZM1073.84 3.49989L1065.86 3.49988L1065.86 0.499884L1073.84 0.499886L1073.84 3.49989ZM1089.81 3.49989L1081.82 3.49989L1081.82 0.499887L1089.81 0.499889L1089.81 3.49989ZM1105.78 3.49989L1097.79 3.49989L1097.79 0.49989L1105.78 0.499892L1105.78 3.49989ZM1121.74 3.49989L1113.76 3.49989L1113.76 0.499893L1121.74 0.499894L1121.74 3.49989ZM1137.71 3.4999L1129.73 3.4999L1129.73 0.499896L1137.71 0.499897L1137.71 3.4999ZM1153.68 3.4999L1145.7 3.4999L1145.7 0.499899L1153.68 0.4999L1153.68 3.4999ZM1169.65 3.4999L1161.66 3.4999L1161.66 0.499901L1169.65 0.499903L1169.65 3.4999ZM1185.61 3.49991L1177.63 3.4999L1177.63 0.499904L1185.61 0.499906L1185.61 3.49991ZM1201.58 3.49991L1193.6 3.49991L1193.6 0.499907L1201.58 0.499909L1201.58 3.49991ZM1217.55 3.49991L1209.57 3.49991L1209.57 0.49991L1217.55 0.499911L1217.55 3.49991ZM1233.52 3.49991L1225.53 3.49991L1225.53 0.499913L1233.52 0.499914L1233.52 3.49991ZM1249.49 3.49992L1241.5 3.49992L1241.5 0.499916L1249.49 0.499917L1249.49 3.49992ZM1265.45 3.49992L1257.47 3.49992L1257.47 0.499918L1265.45 0.49992L1265.45 3.49992ZM1281.42 3.49992L1273.44 3.49992L1273.44 0.499921L1281.42 0.499923L1281.42 3.49992ZM1297.39 3.49993L1289.41 3.49992L1289.41 0.499924L1297.39 0.499926L1297.39 3.49993ZM1313.36 3.49993L1305.37 3.49993L1305.37 0.499927L1313.36 0.499928L1313.36 3.49993ZM1329.32 3.49993L1321.34 3.49993L1321.34 0.49993L1329.32 0.499931L1329.32 3.49993ZM1345.29 3.49993L1337.31 3.49993L1337.31 0.499933L1345.29 0.499934L1345.29 3.49993ZM1361.26 3.49994L1353.28 3.49994L1353.28 0.499936L1361.26 0.499937L1361.26 3.49994ZM1377.23 3.49994L1369.24 3.49994L1369.24 0.499938L1377.23 0.49994L1377.23 3.49994ZM1393.2 3.49994L1385.21 3.49994L1385.21 0.499941L1393.2 0.499943L1393.2 3.49994ZM1409.16 3.49995L1401.18 3.49994L1401.18 0.499944L1409.16 0.499945L1409.16 3.49995ZM1425.13 3.49995L1417.15 3.49995L1417.15 0.499947L1425.13 0.499948L1425.13 3.49995ZM1441.1 3.49995L1433.12 3.49995L1433.12 0.49995L1441.1 0.499951L1441.1 3.49995ZM1457.07 3.49995L1449.08 3.49995L1449.08 0.499953L1457.07 0.499954L1457.07 3.49995ZM1473.03 3.49996L1465.05 3.49996L1465.05 0.499955L1473.03 0.499957L1473.03 3.49996ZM1489 3.49996L1481.02 3.49996L1481.02 0.499958L1489 0.49996L1489 3.49996ZM1504.97 3.49996L1496.99 3.49996L1496.99 0.499961L1504.97 0.499963L1504.97 3.49996ZM1520.94 3.49997L1512.95 3.49996L1512.95 0.499964L1520.94 0.499965L1520.94 3.49997ZM1536.91 3.49997L1528.92 3.49997L1528.92 0.499967L1536.91 0.499968L1536.91 3.49997ZM1552.87 3.49997L1544.89 3.49997L1544.89 0.49997L1552.87 0.499971L1552.87 3.49997ZM1568.84 3.49997L1560.86 3.49997L1560.86 0.499973L1568.84 0.499974L1568.84 3.49997ZM1584.81 3.49998L1576.83 3.49998L1576.83 0.499975L1584.81 0.499977L1584.81 3.49998ZM1600.78 3.49998L1592.79 3.49998L1592.79 0.499978L1600.78 0.49998L1600.78 3.49998ZM1616.74 3.49998L1608.76 3.49998L1608.76 0.499981L1616.74 0.499982L1616.74 3.49998ZM1632.71 3.49999L1624.73 3.49998L1624.73 0.499984L1632.71 0.499985L1632.71 3.49999ZM1648.68 3.49999L1640.7 3.49999L1640.7 0.499987L1648.68 0.499988L1648.68 3.49999ZM1664.65 3.49999L1656.66 3.49999L1656.66 0.499989L1664.65 0.499991L1664.65 3.49999ZM1680.62 3.49999L1672.63 3.49999L1672.63 0.499992L1680.62 0.499994L1680.62 3.49999ZM1696.58 3.5L1688.6 3.5L1688.6 0.499995L1696.58 0.499997L1696.58 3.5ZM1712.55 3.5L1704.57 3.5L1704.57 0.499998L1712.55 0.499999L1712.55 3.5ZM1728.52 3.5L1720.54 3.5L1720.54 0.500001L1728.52 0.500002L1728.52 3.5ZM1744.49 3.50001L1736.5 3.5L1736.5 0.500004L1744.49 0.500005L1744.49 3.50001ZM1760.45 3.50001L1752.47 3.50001L1752.47 0.500007L1760.45 0.500008L1760.45 3.50001ZM1776.42 3.50001L1768.44 3.50001L1768.44 0.500009L1776.42 0.500011L1776.42 3.50001ZM1792.39 3.50001L1784.41 3.50001L1784.41 0.500012L1792.39 0.500014L1792.39 3.50001ZM1808.36 3.50002L1800.37 3.50002L1800.37 0.500015L1808.36 0.500016L1808.36 3.50002ZM1824.33 3.50002L1816.34 3.50002L1816.34 0.500018L1824.33 0.500019L1824.33 3.50002ZM1840.29 3.50002L1832.31 3.50002L1832.31 0.500021L1840.29 0.500022L1840.29 3.50002ZM1856.26 3.50002L1848.28 3.50002L1848.28 0.500024L1856.26 0.500025L1856.26 3.50002ZM1872.23 3.50003L1864.25 3.50003L1864.25 0.500026L1872.23 0.500028L1872.23 3.50003ZM1888.2 3.50003L1880.21 3.50003L1880.21 0.500029L1888.2 0.500031L1888.2 3.50003ZM1904.16 3.50003L1896.18 3.50003L1896.18 0.500032L1904.16 0.500034L1904.16 3.50003ZM1920.13 3.50004L1912.15 3.50004L1912.15 0.500035L1920.13 0.500036L1920.13 3.50004ZM1936.1 3.50004L1928.12 3.50004L1928.12 0.500038L1936.1 0.500039L1936.1 3.50004ZM1952.07 3.50004L1944.08 3.50004L1944.08 0.500041L1952.07 0.500042L1952.07 3.50004ZM1968.04 3.50004L1960.05 3.50004L1960.05 0.500043L1968.04 0.500045L1968.04 3.50004ZM1984 3.50005L1976.02 3.50005L1976.02 0.500046L1984 0.500048L1984 3.50005ZM1999.97 3.50005L1991.99 3.50005L1991.99 0.500049L1999.97 0.500051L1999.97 3.50005ZM2015.94 3.50005L2007.96 3.50005L2007.96 0.500052L2015.94 0.500053L2015.94 3.50005ZM2031.91 3.50006L2023.92 3.50005L2023.92 0.500055L2031.91 0.500056L2031.91 3.50006ZM2047.87 3.50006L2039.89 3.50006L2039.89 0.500058L2047.87 0.500059L2047.87 3.50006ZM2063.84 3.50006L2055.86 3.50006L2055.86 0.500061L2063.84 0.500062L2063.84 3.50006ZM2079.81 3.50006L2071.83 3.50006L2071.83 0.500063L2079.81 0.500065L2079.81 3.50006ZM2095.78 3.50007L2087.79 3.50007L2087.79 0.500066L2095.78 0.500068L2095.78 3.50007ZM2111.75 3.50007L2103.76 3.50007L2103.76 0.500069L2111.75 0.50007L2111.75 3.50007ZM2127.71 3.50007L2119.73 3.50007L2119.73 0.500072L2127.71 0.500073L2127.71 3.50007ZM2143.68 3.50008L2135.7 3.50007L2135.7 0.500075L2143.68 0.500076L2143.68 3.50008ZM2159.65 3.50008L2151.67 3.50008L2151.67 0.500078L2159.65 0.500079L2159.65 3.50008ZM2175.62 3.50008L2167.63 3.50008L2167.63 0.50008L2175.62 0.500082L2175.62 3.50008ZM2191.58 3.50008L2183.6 3.50008L2183.6 0.500083L2191.58 0.500085L2191.58 3.50008ZM2207.55 3.50009L2199.57 3.50009L2199.57 0.500086L2207.55 0.500087L2207.55 3.50009ZM2223.52 3.50009L2215.54 3.50009L2215.54 0.500089L2223.52 0.50009L2223.52 3.50009ZM2239.49 3.50009L2231.5 3.50009L2231.5 0.500092L2239.49 0.500093L2239.49 3.50009ZM2255.46 3.5001L2247.47 3.50009L2247.47 0.500095L2255.46 0.500096L2255.46 3.5001ZM2271.42 3.5001L2263.44 3.5001L2263.44 0.500097L2271.42 0.500099L2271.42 3.5001ZM2287.39 3.5001L2279.41 3.5001L2279.41 0.5001L2287.39 0.500102L2287.39 3.5001ZM2303.36 3.5001L2295.38 3.5001L2295.38 0.500103L2303.36 0.500104L2303.36 3.5001ZM2319.33 3.50011L2311.34 3.50011L2311.34 0.500106L2319.33 0.500107L2319.33 3.50011ZM2335.29 3.50011L2327.31 3.50011L2327.31 0.500109L2335.29 0.50011L2335.29 3.50011ZM2351.26 3.50011L2343.28 3.50011L2343.28 0.500112L2351.26 0.500113L2351.26 3.50011ZM2367.23 3.50012L2359.25 3.50011L2359.25 0.500114L2367.23 0.500116L2367.23 3.50012ZM2383.2 3.50012L2375.21 3.50012L2375.21 0.500117L2383.2 0.500119L2383.2 3.50012ZM2399.17 3.50012L2391.18 3.50012L2391.18 0.50012L2399.17 0.500122L2399.17 3.50012ZM2415.13 3.50012L2407.15 3.50012L2407.15 0.500123L2415.13 0.500124L2415.13 3.50012ZM2431.1 3.50013L2423.12 3.50013L2423.12 0.500126L2431.1 0.500127L2431.1 3.50013ZM2447.07 3.50013L2439.09 3.50013L2439.09 0.500129L2447.07 0.50013L2447.07 3.50013ZM2463.04 3.50013L2455.05 3.50013L2455.05 0.500132L2463.04 0.500133L2463.04 3.50013ZM2479 3.50014L2471.02 3.50013L2471.02 0.500134L2479 0.500136L2479 3.50014ZM2494.97 3.50014L2486.99 3.50014L2486.99 0.500137L2494.97 0.500139L2494.97 3.50014ZM2510.94 3.50014L2502.96 3.50014L2502.96 0.50014L2510.94 0.500141L2510.94 3.50014ZM2526.91 3.50014L2518.92 3.50014L2518.92 0.500143L2526.91 0.500144L2526.91 3.50014ZM2542.88 3.50015L2534.89 3.50015L2534.89 0.500146L2542.88 0.500147L2542.88 3.50015ZM2558.84 3.50015L2550.86 3.50015L2550.86 0.500149L2558.84 0.50015L2558.84 3.50015ZM2574.81 3.50015L2566.83 3.50015L2566.83 0.500151L2574.81 0.500153L2574.81 3.50015ZM2590.78 3.50016L2582.8 3.50015L2582.8 0.500154L2590.78 0.500156L2590.78 3.50016ZM2606.75 3.50016L2598.76 3.50016L2598.76 0.500157L2606.75 0.500159L2606.75 3.50016ZM2622.71 3.50016L2614.73 3.50016L2614.73 0.50016L2622.71 0.500161L2622.71 3.50016ZM2638.68 3.50016L2630.7 3.50016L2630.7 0.500163L2638.68 0.500164L2638.68 3.50016ZM2654.65 3.50017L2646.67 3.50017L2646.67 0.500166L2654.65 0.500167L2654.65 3.50017ZM2670.62 3.50017L2662.63 3.50017L2662.63 0.500168L2670.62 0.50017L2670.62 3.50017ZM2686.59 3.50017L2678.6 3.50017L2678.6 0.500171L2686.59 0.500173L2686.59 3.50017ZM2702.55 3.50018L2694.57 3.50017L2694.57 0.500174L2702.55 0.500175L2702.55 3.50018ZM2718.52 3.50018L2710.54 3.50018L2710.54 0.500177L2718.52 0.500178L2718.52 3.50018ZM2734.49 3.50018L2726.51 3.50018L2726.51 0.50018L2734.49 0.500181L2734.49 3.50018ZM2750.46 3.50018L2742.47 3.50018L2742.47 0.500183L2750.46 0.500184L2750.46 3.50018ZM2766.42 3.50019L2758.44 3.50019L2758.44 0.500185L2766.42 0.500187L2766.42 3.50019ZM2782.39 3.50019L2774.41 3.50019L2774.41 0.500188L2782.39 0.50019L2782.39 3.50019ZM2798.36 3.50019L2790.38 3.50019L2790.38 0.500191L2798.36 0.500193L2798.36 3.50019ZM2814.33 3.5002L2806.34 3.50019L2806.34 0.500194L2814.33 0.500195L2814.33 3.5002ZM2830.3 3.5002L2822.31 3.5002L2822.31 0.500197L2830.3 0.500198L2830.3 3.5002ZM2846.26 3.5002L2838.28 3.5002L2838.28 0.5002L2846.26 0.500201L2846.26 3.5002ZM2862.23 3.5002L2854.25 3.5002L2854.25 0.500202L2862.23 0.500204L2862.23 3.5002ZM2878.2 3.50021L2870.22 3.50021L2870.22 0.500205L2878.2 0.500207L2878.2 3.50021ZM2894.17 3.50021L2886.18 3.50021L2886.18 0.500208L2894.17 0.50021L2894.17 3.50021ZM2910.13 3.50021L2902.15 3.50021L2902.15 0.500211L2910.13 0.500212L2910.13 3.50021ZM2926.1 3.50022L2918.12 3.50021L2918.12 0.500214L2926.1 0.500215L2926.1 3.50022ZM2942.07 3.50022L2934.09 3.50022L2934.09 0.500217L2942.07 0.500218L2942.07 3.50022ZM2958.04 3.50022L2950.05 3.50022L2950.05 0.50022L2958.04 0.500221L2958.04 3.50022ZM2974.01 3.50022L2966.02 3.50022L2966.02 0.500222L2974.01 0.500224L2974.01 3.50022ZM2989.97 3.50023L2981.99 3.50023L2981.99 0.500225L2989.97 0.500227L2989.97 3.50023ZM3005.94 3.50023L2997.96 3.50023L2997.96 0.500228L3005.94 0.50023L3005.94 3.50023ZM3021.91 3.50023L3013.93 3.50023L3013.93 0.500231L3021.91 0.500232L3021.91 3.50023ZM3037.88 3.50024L3029.89 3.50023L3029.89 0.500234L3037.88 0.500235L3037.88 3.50024ZM3053.84 3.50024L3045.86 3.50024L3045.86 0.500237L3053.84 0.500238L3053.84 3.50024ZM3069.81 3.50024L3061.83 3.50024L3061.83 0.500239L3069.81 0.500241L3069.81 3.50024ZM3085.78 3.50024L3077.8 3.50024L3077.8 0.500242L3085.78 0.500244L3085.78 3.50024ZM3101.75 3.50025L3093.76 3.50025L3093.76 0.500245L3101.75 0.500247L3101.75 3.50025ZM3117.72 3.50025L3109.73 3.50025L3109.73 0.500248L3117.72 0.500249L3117.72 3.50025ZM3133.68 3.50025L3125.7 3.50025L3125.7 0.500251L3133.68 0.500252L3133.68 3.50025ZM3149.65 3.50026L3141.67 3.50025L3141.67 0.500254L3149.65 0.500255L3149.65 3.50026ZM3165.62 3.50026L3157.64 3.50026L3157.64 0.500256L3165.62 0.500258L3165.62 3.50026ZM3181.59 3.50026L3173.6 3.50026L3173.6 0.500259L3181.59 0.500261L3181.59 3.50026ZM3197.55 3.50026L3189.57 3.50026L3189.57 0.500262L3197.55 0.500264L3197.55 3.50026ZM3213.52 3.50027L3205.54 3.50027L3205.54 0.500265L3213.52 0.500266L3213.52 3.50027ZM3229.49 3.50027L3221.51 3.50027L3221.51 0.500268L3229.49 0.500269L3229.49 3.50027ZM3245.46 3.50027L3237.47 3.50027L3237.47 0.500271L3245.46 0.500272L3245.46 3.50027ZM3261.43 3.50027L3253.44 3.50027L3253.44 0.500273L3261.43 0.500275L3261.43 3.50027ZM3277.39 3.50028L3269.41 3.50028L3269.41 0.500276L3277.39 0.500278L3277.39 3.50028ZM3293.36 3.50028L3285.38 3.50028L3285.38 0.500279L3293.36 0.500281L3293.36 3.50028ZM3309.33 3.50028L3301.34 3.50028L3301.34 0.500282L3309.33 0.500283L3309.33 3.50028ZM3325.3 3.50029L3317.31 3.50028L3317.31 0.500285L3325.3 0.500286L3325.3 3.50029ZM3341.26 3.50029L3333.28 3.50029L3333.28 0.500288L3341.26 0.500289L3341.26 3.50029ZM3357.23 3.50029L3349.25 3.50029L3349.25 0.500291L3357.23 0.500292L3357.23 3.50029ZM3373.2 3.50029L3365.22 3.50029L3365.22 0.500293L3373.2 0.500295L3373.2 3.50029ZM3389.17 3.5003L3381.18 3.5003L3381.18 0.500296L3389.17 0.500298L3389.17 3.5003ZM3405.14 3.5003L3397.15 3.5003L3397.15 0.500299L3405.14 0.5003L3405.14 3.5003ZM3421.1 3.5003L3413.12 3.5003L3413.12 0.500302L3421.1 0.500303L3421.1 3.5003ZM3437.07 3.50031L3429.09 3.5003L3429.09 0.500305L3437.07 0.500306L3437.07 3.50031ZM3453.04 3.50031L3445.05 3.50031L3445.05 0.500308L3453.04 0.500309L3453.04 3.50031ZM3469.01 3.50031L3461.02 3.50031L3461.02 0.50031L3469.01 0.500312L3469.01 3.50031ZM3481 3.50031L3476.99 3.50031L3476.99 0.500313L3481 0.500314L3481 3.50031Z' fill='black'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(Text, {
      name: "Level-Label",
      y: {
        type: "top",
        offset: 660 - userLevel * 200
      },
      hidden: showLevels ? true : false,
      fill: "#A7A7A7",
      width: 105,
      lineHeight: "150%",
      fontFamily: "Inter",
      letterSpacing: 1.456,
      fontWeight: 700
    }, "CURRENT LEVEL (", userLevel, ")"), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Divider-Line-Active",
      y: {
        type: "top",
        offset: 650 - userLevel * 200
      },
      hidden: showLevels ? true : false,
      height: 3,
      width: OVERALL_WIDTH,
      src: "<svg width='3481' height='4' viewBox='0 0 3481 4' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path fill-rule='evenodd' clip-rule='evenodd' d='M3481 3.50031L-2.57824e-07 3.49969L0 0.499695L3481 0.500314L3481 3.50031Z' fill='black' fill-opacity='0.33'/>\n  </svg>\n  "
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Container",
      verticalAlignItems: "center",
      x: 150,
      y: 100,
      spacing: 32,
      padding: 64,
      cornerRadius: 8,
      direction: "vertical"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Skills",
      overflow: "visible",
      spacing: 30
    }, categories.map((category) => {
      return category.skills.map((skill, i) => {
        return Skill(skill, category.name, category.color, category.skillDescriptions[i], `${category.name}-${skill}`, role, showLevels, voteMap);
      });
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Categories",
      overflow: "visible"
    }, categories.map((category, i) => {
      return Category(category.name, category.color, role, category.skills.length, `${category.name}`, i === 0);
    }))));
  }
  function Category(name, color, role, skills_count, category_key, edge) {
    const hideCategory = role == "Design" && name == "Writing" || role == "Writing" && name == "Craft";
    return /* @__PURE__ */ figma.widget.h(Text, {
      name: `Category-${name}`,
      key: `Category-${category_key}`,
      hidden: hideCategory ? true : false,
      fill: color,
      width: skills_count * 280 - (edge ? 15 : 0),
      height: 50,
      verticalAlignText: "center",
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 32,
      letterSpacing: 1.536,
      textCase: "upper",
      fontWeight: 700
    }, name);
  }
  function Skill(name, category, color, skill_description, skill_key, role, showLevels, voteMap) {
    var _a, _b, _c, _d, _e, _f;
    const offsetA = 734 - (voteMap.get(skill_key) || 1) * 200;
    const activeOpacity = 0.8;
    const hoverOpacity = 0.4;
    const hideSkill = role == "Design" && category == "Writing" || role == "Writing" && category == "Craft";
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: `Skill-${name}`,
      key: `Skill-${skill_key}`,
      hidden: hideSkill ? true : false,
      width: 250,
      height: 716
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-Bg-${name}`,
      key: `Skill-Block-Bg-${skill_key}`,
      opacity: 0.2,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 600
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-3-${name}`,
      key: `Skill-Block-3-${skill_key}`,
      opacity: voteMap.get(skill_key) == "3" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 600,
      onClick: () => {
        voteMap.set(skill_key, 3);
      },
      hoverStyle: {
        opacity: voteMap.get(skill_key) == "3" ? 1 : hoverOpacity
      },
      tooltip: (_b = (_a = levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "3";
      })) == null ? void 0 : _a.description) != null ? _b : ""
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-2-${name}`,
      key: `Skill-Block-2-${skill_key}`,
      opacity: voteMap.get(skill_key) == "2" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 1
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 400,
      onClick: () => {
        voteMap.set(skill_key, 2);
      },
      hoverStyle: {
        opacity: voteMap.get(skill_key) == "2" ? 1 : hoverOpacity
      },
      tooltip: (_d = (_c = levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "2";
      })) == null ? void 0 : _c.description) != null ? _d : ""
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: `Skill-Block-1-${name}`,
      key: `Skill-Block-1-${skill_key}`,
      opacity: voteMap.get(skill_key) == "1" ? activeOpacity : 0,
      y: {
        type: "bottom",
        offset: 0
      },
      fill: color,
      cornerRadius: 6,
      width: 250,
      height: 200,
      onClick: () => {
        voteMap.set(skill_key, 1);
      },
      hoverStyle: {
        opacity: voteMap.get(skill_key) == "1" ? 1 : hoverOpacity
      },
      tooltip: (_f = (_e = levelDescriptions.find((obj) => {
        return obj.skill === name && obj.level === "1";
      })) == null ? void 0 : _e.description) != null ? _f : ""
    }), /* @__PURE__ */ figma.widget.h(Text, {
      name: `Skill-Level-${name}`,
      key: `Skill-Level-${skill_key}`,
      hidden: showLevels ? true : false,
      opacity: voteMap.get(skill_key) ? 0.9 : 0,
      y: {
        type: "top",
        offset: offsetA
      },
      fill: name == "Effectiveness" || name == "Leadership" || name == "Citizenship" ? "#876C14" : "#FFF",
      width: 250,
      height: 38,
      horizontalAlignText: "center",
      lineHeight: "150%",
      fontFamily: "Inter",
      fontSize: 32,
      letterSpacing: -0.456,
      fontWeight: 700
    }, "L", voteMap.get(skill_key) || 1), /* @__PURE__ */ figma.widget.h(Text, {
      name: `Skill-Label-${name}`,
      key: `Skill-Label-${skill_key}`,
      fill: color,
      width: 250,
      height: 100,
      verticalAlignText: "bottom",
      horizontalAlignText: "left",
      lineHeight: "120%",
      fontFamily: "Inter",
      fontSize: 32,
      letterSpacing: -0.32,
      fontWeight: 700,
      strokeWidth: 1.391,
      tooltip: `${skill_description}`
    }, name));
  }
  widget.register(Widget);
})();
